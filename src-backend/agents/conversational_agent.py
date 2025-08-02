# src-backend/agents/conversational_agent.py
import json
import os
import tempfile
import shutil
import asyncio

from .ollama_client import OllamaClient

class ConversationalAgent:
    """
    The main conversational engine. It orchestrates the "vibe" and memory
    to produce intelligent, context-aware responses. This is the "Frontal Lobe."
    """
    def __init__(self, client: OllamaClient, username: str, memory_path: str):
        self.client = client
        self.username = username
        self.memory_path = memory_path
        self.conversation_history = self._load_memory()
        
        # We store the "personalities" as prompts within the agent itself
        self.prompts = {
            "scientific": """
You are a scientific assistant. Your goal is to explain scientific questions
in a way that is analytical, fact-based, logically reasoned, and easy to understand.
Define technical terms when used.
""",
            "creative": """
You are a creative assistant who responds with imagination, beauty, and expression.
Your task is to answer in a way that is artistic, poetic, or metaphorical,
aiming to inspire and provoke thought.
"""
        }
        print(f"🧠 ConversationalAgent for user '{self.username}' initialized.")

    def _load_memory(self):
        """Loads the conversation history from the JSON file."""
        if os.path.exists(self.memory_path):
            try:
                with open(self.memory_path, "r", encoding="utf-8") as f:
                    print(f"  -> Loading conversation memory from '{self.memory_path}'")
                    return json.load(f)
            except (json.JSONDecodeError, IOError) as e:
                print(f"  -> Warning: Could not load or parse memory file: {e}")
        return {} # Return an empty dictionary if file doesn't exist or is invalid

    def _save_memory(self):
        """Saves the updated conversation history to the JSON file safely."""
        try:
            # Safe save using a temporary file to prevent data corruption
            with tempfile.NamedTemporaryFile("w", delete=False, encoding="utf-8", dir=".") as tf:
                json.dump(self.conversation_history, tf, ensure_ascii=False, indent=2)
                temp_path = tf.name
            shutil.move(temp_path, self.memory_path)
            print(f"  -> Conversation memory saved to '{self.memory_path}'")
        except Exception as e:
            print(f"  -> Error saving conversation memory: {e}")

    async def run(self, prompt: str, vibe: str) -> str:
        """
        The main entry point for the agent. Takes a prompt and a vibe,
        generates a response, and updates the conversation memory.
        """
        print(f"  -> ConversationalAgent running with vibe: '{vibe}'")
        
        system_prompt = self.prompts.get(vibe, self.prompts["scientific"]) # Default to scientific

        # For a truly stateful conversation, we could include past messages here.
        # For the MVP, we are keeping it simple: one prompt, one response.

        response_text = await self.client.get_response(
            prompt=prompt,
            system_prompt=system_prompt,
            model='gemma3' # Use the more powerful model for conversation
        )

        # Update and save the conversation history
        if self.username not in self.conversation_history:
            self.conversation_history[self.username] = []
        
        self.conversation_history[self.username].append({
            "query": prompt,
            "response": response_text
        })
        self._save_memory()

        return response_text