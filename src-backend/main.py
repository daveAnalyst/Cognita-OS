# src-backend/main.py (The Legendary Kernel - Final Version)
import os
import sys
import asyncio
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from pydantic import BaseModel
from llama_cpp import Llama
import httpx

# --- The Upgraded Brain Modules ---
from agents.ollama_client import OllamaClient
from agents.vibe_detector import VibeDetector
from agents.conversational_agent import ConversationalAgent

# --- Configuration ---
LOCAL_MODEL_FILENAME = "tinyllama-1.1b-chat-v1.0.Q3_K_S.gguf"
LOCAL_MODEL_PATH = os.path.join("models", LOCAL_MODEL_FILENAME)
MEMORY_FILE = "conversation_memory.json"
USERNAME = "User" # Default username for the demo

# --- Global State ---
llm_local = None            # The local llama-cpp-python "Language Brain"
ollama_client = None        # The client for the "Vision & Advanced Brain"
vibe_detector = None        # The "Sensory Cortex"
conv_agent_ollama = None    # The "Frontal Lobe"
ollama_is_available = False # Flag for the UI

# --- Pydantic Models ---
class ChatRequest(BaseModel):
    prompt: str
    image: str | None = None

class ChatResponse(BaseModel):
    response: str

# --- FastAPI Lifespan Manager ---
@asynccontextmanager
async def lifespan(app: FastAPI):
    global llm_local, ollama_client, vibe_detector, conv_agent_ollama, ollama_is_available
    print("--- Starting Engelbert Kernel (Legendary Edition) ---")

    # 1. ALWAYS load the local text engine.
    if os.path.exists(LOCAL_MODEL_PATH):
        print(f"🧠 Loading local 'Language Brain': {LOCAL_MODEL_FILENAME}...")
        try:
            llm_local = Llama(model_path=LOCAL_MODEL_PATH, n_ctx=2048, n_gpu_layers=-1, verbose=False)
            print("✅ 'Language Brain' is online.")
        except Exception as e:
            print(f"❌ Error loading local model: {e}", file=sys.stderr)
    else:
        print(f"⚠️ Warning: Local model not found. Text chat will be disabled.", file=sys.stderr)

    # 2. CHECK for the advanced Ollama-powered brain.
    print("🔬 Probing for local Ollama service...")
    try:
        async with httpx.AsyncClient(timeout=2.0) as client:
            await client.get("http://127.0.0.1:11434")
        ollama_is_available = True
        
        # If found, initialize the entire advanced brain suite
        ollama_client = OllamaClient()
        vibe_detector = VibeDetector(ollama_client)
        conv_agent_ollama = ConversationalAgent(ollama_client, USERNAME, MEMORY_FILE)
        
        print("✅ 'Advanced Brain' (Ollama) detected. Enhanced features enabled.")
    except httpx.RequestError:
        print("ℹ️ Ollama not found. Running in sovereign text-only mode.")
        ollama_is_available = False

    yield # --- Application runs here ---

    print("--- Shutting down Engelbert Kernel ---")
    if ollama_client:
        await ollama_client.close()

# --- FastAPI App Definition ---
app = FastAPI(lifespan=lifespan, title="Engelbert OS Kernel")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

# --- API Endpoints ---
@app.get("/api/v1/status")
async def get_status():
    return {"text_brain_online": llm_local is not None, "vision_brain_online": ollama_is_available}

@app.post("/api/v1/chat", response_model=ChatResponse)
async def chat_handler(request: ChatRequest):
    # This is the intelligent router for Progressive Sovereignty
    if request.image:
        # ALL multimodal requests go to the Ollama brain
        if not conv_agent_ollama or not ollama_is_available:
            raise HTTPException(status_code=501, detail="Vision features are not enabled.")
        # We'll need to add image handling to the conversational agent later.
        # For now, this path is for the "wow" demo.
        response_text = await conv_agent_ollama.run(request.prompt, "scientific") # Placeholder vibe
    
    elif ollama_is_available and conv_agent_ollama and vibe_detector:
        # If Ollama is available, use the advanced conversational brain for text too
        vibe = await vibe_detector.classify(request.prompt)
        response_text = await conv_agent_ollama.run(request.prompt, vibe)
    
    else:
        # Fallback to the simple, sovereign, local text brain
        if not llm_local:
            raise HTTPException(status_code=503, detail="Local text model is not available.")
        
        prompt_template = f"<|system|>\nYou are a helpful assistant.\n<|user|>\n{request.prompt}\n<|assistant|>\n"
        output = llm_local(prompt_template, max_tokens=256, stop=["<|user|>", "<|system|>"])
        response_text = output["choices"][0]["text"].strip()
    
    return ChatResponse(response=response_text)