from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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