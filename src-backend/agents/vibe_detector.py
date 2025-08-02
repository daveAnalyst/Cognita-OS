# src-backend/agents/vibe_detector.py
import asyncio
from .ollama_client import OllamaClient

class VibeDetector:
    """
    An agent that uses an LLM to classify the user's intent or "vibe."
    This is the "Sensory Cortex" of our AI.
    """
    def __init__(self, client: OllamaClient):
        """
        Initializes the agent with a shared OllamaClient.
        """
        self.client = client
        self.system_prompt = """
You are a highly efficient text classification agent. Your only task is to
classify the user's message tone as one of three categories: 'scientific',
'creative', or 'other'.

- 'scientific': The user is analytical, precise, logical, or technical.
  They may ask for explanations, data, or structured reasoning.
- 'creative': The user is imaginative, metaphorical, poetic, or artistic.
  They may be expressing abstract ideas, inventing concepts, or telling stories.
- 'other': The user's message is a simple greeting, farewell, or conversational filler
  (e.g., "hi", "thanks", "okay", "bye").

You must respond with ONLY ONE WORD: 'scientific', 'creative', or 'other'.
Do not add any explanation or punctuation.
"""
        print("🧠 VibeDetector agent initialized.")

    async def classify(self, prompt: str) -> str:
        """
        Classifies the user's prompt and returns the detected vibe as a string.
        """
        print(f"  -> VibeDetector classifying prompt...")
        # We use a smaller, faster model for this simple classification task
        # to improve response time and reduce computational cost.
        vibe = await self.client.get_response(
            prompt=prompt,
            system_prompt=self.system_prompt,
            model='gemma:2b' # Use a smaller model for this task
        )
        
        # Clean up the response to ensure it's just one word
        cleaned_vibe = vibe.lower().strip().replace("'", "").replace(".", "")
        
        if cleaned_vibe in ['scientific', 'creative', 'other']:
            print(f"  <- Vibe detected: {cleaned_vibe}")
            return cleaned_vibe
        else:
            print(f"  <- Vibe detection failed, defaulting to 'scientific'. Raw output: '{vibe}'")
            # Fallback for safety
            return 'scientific'

# Example of how to use this agent (for testing)
async def main():
    # This requires Ollama to be running locally
    ollama_client = OllamaClient()
    vibe_detector = VibeDetector(ollama_client)
    
    test_prompt_1 = "Can you explain the theory of relativity?"
    test_prompt_2 = "What if clouds were made of cotton candy?"
    
    vibe1 = await vibe_detector.classify(test_prompt_1)
    vibe2 = await vibe_detector.classify(test_prompt_2)
    
    print(f"'{test_prompt_1}' was classified as: {vibe1}")
    print(f"'{test_prompt_2}' was classified as: {vibe2}")
    
    await ollama_client.close()

if __name__ == "__main__":
    asyncio.run(main())