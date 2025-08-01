# src-backend/main.py
import os
import asyncio
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from pydantic import BaseModel
from llama_cpp import Llama
import httpx

# Local module import for the Vision Brain
from vision_agent import VisionAgent 

# --- Configuration ---
MODEL_FILENAME = "tinyllama-1.1b-chat-v1.0.Q3_K_S.gguf" # Using your existing model
MODEL_PATH = os.path.join("models", MODEL_FILENAME)

# --- Global State ---
llm = None                # The local llama-cpp-python "Language Brain"
vision_agent = None       # The Ollama-based "Vision Brain"
ollama_is_available = False # Flag for the UI

# --- Pydantic Models ---
class ChatRequest(BaseModel):
    prompt: str
    image: str | None = None # base64 encoded image

class ChatResponse(BaseModel):
    response: str

# --- FastAPI Lifespan Manager (The heart of the kernel) ---
@asynccontextmanager
async def lifespan(app: FastAPI):
    global llm, vision_agent, ollama_is_available
    print("--- Starting Engelbert Kernel (Legendary Edition) ---")

    # 1. ALWAYS load the local text engine. This is our baseline.
    if os.path.exists(MODEL_PATH):
        print(f"🧠 Loading local 'Language Brain': {MODEL_FILENAME}...")
        try:
            llm = Llama(model_path=MODEL_PATH, n_ctx=2048, n_gpu_layers=-1, verbose=False)
            print("✅ 'Language Brain' is online.")
        except Exception as e:
            print(f"❌ Error loading local model: {e}", file=sys.stderr)
    else:
        print(f"⚠️ Warning: Local model not found. Text chat will be disabled.", file=sys.stderr)

    # 2. CHECK for the advanced vision engine (Ollama).
    print("🔬 Probing for local Ollama service...")
    try:
        async with httpx.AsyncClient(timeout=2.0) as client:
            await client.get("http://127.0.0.1:11434")
        ollama_is_available = True
        vision_agent = VisionAgent() # Initialize Davin's agent (currently mocked)
        print("✅ 'Vision Brain' (Ollama) detected. Multimodal features enabled.")
    except httpx.RequestError:
        print("ℹ️ Ollama not found. Running in text-only sovereign mode.")
        ollama_is_available = False

    yield # --- Application runs here ---

    print("--- Shutting down Engelbert Kernel ---")

# --- FastAPI App Definition ---
app = FastAPI(lifespan=lifespan, title="Engelbert OS Kernel")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

# --- API Endpoints ---
@app.get("/api/v1/status", summary="Kernel Capabilities Check")
async def get_status():
    """Lets the UI know what the backend can do."""
    return {"text_brain_online": llm is not None, "vision_brain_online": ollama_is_available}

@app.post("/api/v1/chat", response_model=ChatResponse, summary="Intelligent Request Router")
async def chat_handler(request: ChatRequest):
    # This is the intelligent router for Progressive Sovereignty
    if request.image:
        if not vision_agent or not ollama_is_available:
            raise HTTPException(status_code=501, detail="Vision features are not enabled.")
        # Route to the "Vision Brain"
        response_text = await vision_agent.analyze(request.prompt, request.image)
    else:
        if not llm:
            raise HTTPException(status_code=503, detail="Local text model is not available.")
        # Route to the local "Language Brain"
        prompt_template = f"""
<|system|>
You are a helpful assistant. Answer the user's question concisely.
<|user|>
{request.prompt}
<|assistant|>
"""
        output = llm(f"Q: {request.prompt} A: ", max_tokens=256, stop=["Q:", "\n"], temperature=0.7)
        response_text = output["choices"][0]["text"].strip()
    
    return ChatResponse(response=response_text)