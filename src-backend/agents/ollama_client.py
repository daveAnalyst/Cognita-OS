# src-backend/agents/ollama_client.py
import httpx
import sys

class OllamaClient:
    """
    A professional, asynchronous client for interacting with a remote or local
    Ollama service. This is the "Nervous System" for our Vision Brain.
    """
    def __init__(self, base_url: str = "http://127.0.0.1:11434"):
        """
        Initializes the client with the Ollama service URL.
        """
        self.base_url = base_url
        # We create one persistent client for the lifetime of the agent
        self.client = httpx.AsyncClient(base_url=self.base_url, timeout=180.0)
        print(f"⚡️ OllamaClient configured for endpoint: {self.base_url}")

    async def get_response(
        self,
        prompt: str,
        system_prompt: str | None = None,
        image_base64: str | None = None,
        model: str = "gemma3" # Default to the model we need
    ) -> str:
        """
        Sends a request to the Ollama /api/generate endpoint and returns the
        text content of the response. This is a clean, reusable method.
        """
        messages = []
        if system_prompt:
            messages.append({'role': 'system', 'content': system_prompt})
        
        user_message = {'role': 'user', 'content': prompt}
        if image_base64:
            user_message['images'] = [image_base64]
        
        messages.append(user_message)
        
        # This payload matches the official Ollama API documentation
        payload = {
            "model": model,
            "prompt": prompt, # The main prompt goes here for /api/generate
            "system": system_prompt if system_prompt else "",
            "images": [image_base64] if image_base64 else [],
            "stream": False
        }
        
        try:
            print(f"  -> Sending request to Ollama with model '{model}'...")
            response = await self.client.post("/api/generate", json=payload)
            response.raise_for_status() # Will raise an exception for 4xx/5xx errors
            
            # The /api/generate endpoint returns a JSON object with a 'response' key
            data = response.json()
            content = data.get("response", "Error: 'response' key not found in Ollama output.")
            print(f"  <- Received response from Ollama.")
            return content.strip()

        except httpx.HTTPStatusError as e:
            print(f"❌ HTTP Error communicating with Ollama: {e.response.status_code}", file=sys.stderr)
            print(f"   Response: {e.response.text}", file=sys.stderr)
            return f"Error: Received status {e.response.status_code} from Ollama."
        except httpx.RequestError as e:
            print(f"❌ Network Error communicating with Ollama: {e}", file=sys.stderr)
            return "Error: Could not connect to the Ollama service."
        except Exception as e:
            print(f"❌ An unexpected error occurred in OllamaClient: {e}", file=sys.stderr)
            return "Error: An unexpected error occurred while communicating with the AI."

    async def close(self):
        """Closes the HTTP client gracefully."""
        await self.client.aclose()