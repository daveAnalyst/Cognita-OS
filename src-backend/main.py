from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from typing import Annotated

# Import our new function
from llm_interface import get_llm_response

app = FastAPI()

# --- CORS Configuration ---
# List of origins that are allowed to make requests to this backend.
# We need to allow our Next.js dev server.
origins = [
    "http://localhost:3000",
    "tauri://localhost", # Important for the Tauri app itself
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], # Allows all methods (GET, POST, etc.)
    allow_headers=["*"], # Allows all headers
)
# -------------------------

@app.get("/")
def read_root():
    return {"status": "ok", "message": "Hello from the Python backend!"}

# --- NEW CHAT ENDPOINT ---
@app.post("/api/v1/chat")
async def chat_endpoint(
    prompt: Annotated[str, Form()], 
    image: Annotated[UploadFile | None, File()] = None
):
    image_bytes = await image.read() if image else None
    
    # Call our refactored, async function
    llm_response = await get_llm_response(prompt, image_bytes)
    
    return {"response": llm_response}