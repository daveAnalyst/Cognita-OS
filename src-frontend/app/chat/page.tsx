// src-frontend/app/chat/page.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { SendHorizonal, User, Bot } from 'lucide-react'; // Using better icons

// Define a type for our messages for better code quality
type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I am Wise. How can I help you think today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Effect to auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      
      const data = await response.json();
      const assistantMessage: Message = { role: 'assistant', content: data.response };
      setMessages(prev => [...prev, assistantMessage]);

    } catch (error) {
      console.error("Failed to fetch response:", error);
      const errorMessage: Message = { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-bg-secondary font-sans">
      <header className="p-4 border-b border-border-primary text-center bg-bg-tertiary">
        <h1 className="text-xl font-bold text-text-primary">Wise: Sovereign Scholar Edition</h1>
      </header>

      {/* THIS IS THE MAIN FIX: The message history layout is now corrected */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-end gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'assistant' ? 'bg-accent-secondary' : 'bg-accent-primary'}`}>
              {msg.role === 'assistant' ? <Bot size={20} /> : <User size={20} />}
            </div>
            <div className={`p-4 rounded-lg max-w-xl ${msg.role === 'assistant' ? 'bg-bg-tertiary rounded-bl-none' : 'bg-blue-900/50 rounded-br-none'}`}>
              <p className="text-text-primary whitespace-pre-wrap">{msg.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-end gap-3 flex-row">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-accent-secondary">
              <Bot size={20} />
            </div>
            <div className="p-4 rounded-lg max-w-xl bg-bg-tertiary rounded-bl-none">
              <div className="flex items-center gap-2 text-text-secondary">
                <span className="w-2 h-2 bg-text-tertiary rounded-full animate-pulse"></span>
                <span className="w-2 h-2 bg-text-tertiary rounded-full animate-pulse [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 bg-text-tertiary rounded-full animate-pulse [animation-delay:0.4s]"></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <footer className="p-4 border-t border-border-primary bg-bg-tertiary">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSubmit(e); } }}
              placeholder="Ask a question, propose a theory, or start a debate..."
              className="w-full bg-bg-secondary border border-border-secondary rounded-lg p-4 pr-16 resize-none focus:outline-none focus:ring-2 focus:ring-accent-primary"
              rows={1}
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-accent-primary rounded-full text-bg-primary hover:scale-110 transition-transform disabled:opacity-50 disabled:scale-100">
              <SendHorizonal size={20} />
            </button>
          </div>
        </form>
      </footer>
    </div>
  );
}