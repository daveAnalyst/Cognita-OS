// src-frontend/app/chat/page.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { Camera, SendHorizonal, Bot, User, FileText, Lightbulb, Sparkles, BrainCircuit, Zap, Terminal } from 'lucide-react';

type Message = { role: 'user' | 'assistant'; content: string; };
type LogEntry = { type: 'SYSTEM' | 'TOOL' | 'INFO'; content: string; };

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Welcome to Wise. Your Second Brain is ready." }
  ]);
  const [executionLog, setExecutionLog] = useState<LogEntry[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeLens, setActiveLens] = useState('Scholar');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setExecutionLog([]);

    const log = (entry: LogEntry) => setExecutionLog(prev => [...prev, entry]);
    await new Promise(r => setTimeout(r, 500)); log({ type: 'SYSTEM', content: 'Deconstructing intent...' });
    await new Promise(r => setTimeout(r, 800)); log({ type: 'SYSTEM', content: `Activating ${activeLens} Lens...` });
    await new Promise(r => setTimeout(r, 1200)); log({ type: 'TOOL', content: 'RAG Agent: Searching Second Brain...' });
    await new Promise(r => setTimeout(r, 1000)); log({ type: 'INFO', content: 'Found 3 relevant chunks in `Biology_Chapter_4.pdf`.' });
    await new Promise(r => setTimeout(r, 500)); log({ type: 'SYSTEM', content: 'Synthesizing response...' });

    const assistantMessage: Message = { role: 'assistant', content: "That's an excellent question. Based on your lecture notes, the key difference is that mitosis results in two identical diploid cells, whereas meiosis results in four unique haploid cells. This is crucial for genetic diversity." };
    setMessages(prev => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  const LensButton = ({ name, icon: Icon, emoji }: { name: string, icon: React.ElementType, emoji?: string }) => (
    <button
      onClick={() => setActiveLens(name)}
      className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-full transition-all duration-200 ${
        activeLens === name 
        ? 'bg-accent-primary/20 text-accent-primary border border-accent-primary font-semibold' 
        : 'text-text-tertiary border border-border-primary hover:bg-bg-tertiary'
      }`}
    >
      {Icon ? <Icon size={16}/> : <span>{emoji}</span>}
      {name}
    </button>
  );

  return (
    // We add our new "app-container" class here to reset the global color override.
    <div className="app-container flex h-screen font-sans">
      
      {/* --- LEFT PANEL: SECOND BRAIN --- */}
      <aside className="w-[280px] bg-bg-secondary p-4 flex flex-col border-r border-border-primary">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-text-primary"><FileText size={18} className="text-accent-primary"/> Second Brain</h2>
        <div className="flex-1 overflow-y-auto space-y-2 text-sm pr-2">
          {/* Mock Documents */}
          <div className="p-3 bg-bg-tertiary rounded-md">
            <p className="font-semibold text-text-primary truncate">Biology_Chapter_4.pdf</p>
            <p className="text-xs text-text-tertiary">Indexed: 15 mins ago</p>
          </div>
          <div className="p-3 bg-bg-tertiary rounded-md">
            <p className="font-semibold text-text-primary truncate">Lecture_Notes_Oct_12.txt</p>
            <p className="text-xs text-text-tertiary">Indexed: 2 hours ago</p>
          </div>
        </div>
        <div className="mt-4 p-6 text-center border-2 border-dashed border-border-primary rounded-lg text-text-tertiary hover:border-accent-primary hover:text-white transition-colors">
          <p>Drag & Drop Files Here</p>
        </div>
      </aside>

      {/* --- CENTER PANEL: COGNITIVE CANVAS --- */}
      <main className="flex-1 flex flex-col bg-bg-primary">
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'assistant' ? 'bg-accent-secondary' : 'bg-accent-primary'}`}>
                {msg.role === 'assistant' ? <Bot size={18} /> : <User size={18} />}
              </div>
              <div className={`p-4 rounded-lg max-w-2xl text-text-primary ${msg.role === 'assistant' ? 'bg-bg-tertiary rounded-bl-none font-mono text-green-400' : 'bg-blue-900/50 rounded-br-none'}`}>
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <footer className="p-4 border-t border-border-primary bg-bg-tertiary/50">
            <div className="flex items-center justify-center gap-2 mb-4">
                <LensButton name="Scholar" icon={BrainCircuit} />
                <LensButton name="Muse" icon={Sparkles} />
                <LensButton name="Reflective" emoji="🧘" icon={null as any} />
            </div>
            <form onSubmit={handleSubmit} className="relative max-w-4xl mx-auto">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSubmit(e); } }}
                placeholder="Ask a question, propose a theory, or start a debate..."
                // THIS IS THE FIX: Increased padding and text size for a better feel.
                className="w-full bg-bg-tertiary border border-border-secondary rounded-lg p-4 pr-32 text-base resize-none focus:outline-none focus:ring-2 focus:ring-accent-primary"
                rows={1}
                disabled={isLoading}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-3">
                  <button type="button" className="text-text-tertiary hover:text-white transition-colors"><Camera size={20}/></button>
                  <button type="submit" disabled={isLoading} className="text-text-tertiary hover:text-white disabled:opacity-50 transition-colors"><SendHorizonal size={20}/></button>
              </div>
            </form>
        </footer>
      </main>

      {/* --- RIGHT PANEL: THOUGHT LOG & NEXUS --- */}
      <aside className="w-[320px] bg-bg-secondary p-4 flex flex-col border-l border-border-primary">
        <div className="flex border-b border-border-primary mb-4">
            <button className="flex-1 text-sm font-semibold pb-2 border-b-2 border-accent-primary text-white">Execution Log</button>
            <button className="flex-1 text-sm text-text-tertiary pb-2 hover:text-white transition-colors">Insights</button>
            <button className="flex-1 text-sm text-text-tertiary pb-2 hover:text-white transition-colors">Nexus</button>
        </div>
        <div className="flex-1 overflow-y-auto font-mono text-xs space-y-3 text-text-secondary pr-2">
          {executionLog.map((log, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className={`shrink-0 mt-0.5 ${log.type === 'TOOL' ? 'text-yellow-400' : 'text-accent-primary'}`}>{log.type === 'TOOL' ? <Zap size={12}/> : <Terminal size={12}/>}</span>
              <span>{log.content}</span>
            </div>
          ))}
          {isLoading && (
              <div className="flex items-center gap-2 text-text-secondary mt-2">
                <span className="w-2 h-2 bg-text-tertiary rounded-full animate-pulse"></span>
                <span className="w-2 h-2 bg-text-tertiary rounded-full animate-pulse [animation-delay:0.2s]"></span>
              </div>
          )}
        </div>
      </aside>
    </div>
  );
}