# src-backend/bootstrap.py
import subprocess
import sys
import os

# --- Configuration ---
# We will use a smaller, faster model to maximize our chances of success on low-spec hardware
MODEL_URL = "https://huggingface.co/TheBloke/TinyLlama-1.1B-Chat-v1.0-GGUF/resolve/main/tinyllama-1.1b-chat-v1.0.Q3_K_S.gguf"
MODEL_FILENAME = "tinyllama-1.1b-chat-v1.0.Q3_K_S.gguf"
MODEL_DIR = "models"

# --- Main Script ---
def run_command(command):
    """Runs a command and checks for errors."""
    subprocess.run(command, check=True)

print("--- Bootstrapping Engelbert Kernel (Pythonic Engine) ---")

# 1. Install Python dependencies
print("📦 Installing Python packages...")
run_command([sys.executable, "-m", "pip", "install", "fastapi", "uvicorn[standard]", "pydantic", "httpx", "requests"])
# This is the magic: pip will install the correct version for your CPU
run_command([sys.executable, "-m", "pip", "install", "llama-cpp-python"])

# 2. Download the model
print("🧠 Downloading language model...")
os.makedirs(MODEL_DIR, exist_ok=True)
model_path = os.path.join(MODEL_DIR, MODEL_FILENAME)

if not os.path.exists(model_path):
    print(f"Downloading {MODEL_FILENAME} (~600MB)...")
    # Using requests for a more robust download
    import requests
    with requests.get(MODEL_URL, stream=True) as r:
        r.raise_for_status()
        with open(model_path, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
else:
    print(f"✅ Model '{MODEL_FILENAME}' already exists.")

print("\n🎉 Bootstrap complete! The backend is ready to run.")
print("➡️ Next step: Run 'uvicorn main:app --reload'")