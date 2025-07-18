# src-backend/llm_interface.py
import ollama
import base64
import io
from PIL import Image

async def get_llm_response(prompt: str, image_bytes: bytes | None = None) -> str:
    """Asynchronously gets a response from a local LLM, with optional image."""
    messages = [{'role': 'user', 'content': prompt}]
    
    if image_bytes:
        # Convert image bytes to base64 string
        img_base64 = base64.b64encode(image_bytes).decode('utf-8')
        messages[0]['images'] = img_base64
    
    try:
        # Use the async client for non-blocking calls
        response = await ollama.AsyncClient().chat(
            model='llava:latest',  # Use a multimodal model like LLaVA
            messages=messages
        )
        return response['message']['content']
    except Exception as e:
        print(f"Error communicating with Ollama: {e}")
        return "Error: Could not get a response from the local LLM."