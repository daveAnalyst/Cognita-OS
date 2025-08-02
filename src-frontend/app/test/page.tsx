// src-frontend/app/chat/page.tsx (The Final, Legendary Demo Version)
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Camera, SendHorizonal, Bot, User, FileText, Mic, Sparkles, BrainCircuit, Terminal, Zap, CheckCircle, Download, BookOpen, Code, Mail, Calendar, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Type Definitions ---
type Message = { role: 'user' | 'assistant'; content: string; };
type LogEntry = { type: 'SYSTEM' | 'TOOL' | 'INFO' | 'ERROR'; content: string; };
type KernelStatus = { text_brain_online: boolean; vision_brain_online: boolean; };
type RightPanelTab = 'Log' | 'Insights' | 'Nexus';

// --- The Main Application Component ---
export default function ChatPage() {
  // --- State Management ---
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Welcome to Wise. Your offline, sovereign Second Brain is ready. What great idea are we exploring today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeLens, setActiveLens] = useState('Scholar');
  const [executionLog, setExecutionLog] = useState<LogEntry[]>([]);
  const [kernelStatus, setKernelStatus] = useState<KernelStatus | null>(null);
  const [activeRightTab, setActiveRightTab] = useState<RightPanelTab>('Log');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // --- Utility & Side Effects ---
  const addLog = useCallback((entry: LogEntry) => {
    setExecutionLog(prev => [...prev, entry]);
  }, []);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  useEffect(() => {
    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [input]);

  useEffect(() => {
    const fetchKernelStatus = async () => {
      try {
        addLog({ type: 'SYSTEM', content: 'Pinging Engelbert Kernel...' });
        const response = await fetch('http://127.0.0.1:8000/api/v1/status');
        if (!response.ok) throw new Error('Kernel did not respond.');
        
        const data: KernelStatus = await response.json();
        setKernelStatus(data);
        addLog({ type: 'INFO', content: `Text Brain: ${data.text_brain_online ? 'Online' : 'Offline'}` });
        addLog({ type: 'INFO', content: `Vision Brain: ${data.vision_brain_online ? 'Online' : 'Offline'}` });
      } catch (error) {
        addLog({ type: 'ERROR', content: 'Could not connect to the local kernel.' });
        setKernelStatus({ text_brain_online: false, vision_brain_online: false });
      }
    };
    fetchKernelStatus();
  }, [addLog]);

  // --- Core Logic ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    if (activeLens === 'Reflective') {
      const reflectiveMessage: Message = { role: 'assistant', content: "The Reflective Lens is a powerful feature for metacognition, coming in Wise V2. It will help you analyze your own thought patterns. For now, try the Scholar or Muse lens!" };
      setMessages(prev => [...prev, reflectiveMessage]);
      return;
    }

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setExecutionLog([]);
    setActiveRightTab('Log'); // Switch to log view on new message

    // Realistic RAG Simulation
    addLog({ type: 'SYSTEM', content: 'Deconstructing intent...' });
    await new Promise(r => setTimeout(r, 300));
    addLog({ type: 'SYSTEM', content: `Activating ${activeLens} Lens...` });
    await new Promise(r => setTimeout(r, 500));
    addLog({ type: 'TOOL', content: 'RAG Agent: Searching Second Brain...' });
    await new Promise(r => setTimeout(r, 800));
    addLog({ type: 'INFO', content: 'Found 3 relevant chunks in `Biology_Chapter_4.pdf`.' });
    await new Promise(r => setTimeout(r, 400));
    addLog({ type: 'SYSTEM', content: 'Synthesizing response...' });

    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input, image: null }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'An unknown error occurred.');
      }

      const data = await response.json();
      const assistantMessage: Message = { role: 'assistant', content: data.response };
      setMessages(prev => [...prev, assistantMessage]);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to get response.';
      addLog({ type: 'ERROR', content: errorMessage });
      const systemErrorMessage: Message = { role: 'assistant', content: `Sorry, I encountered an error: ${errorMessage}` };
      setMessages(prev => [...prev, systemErrorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // --- Sub-components ---
  const LensButton = ({ name, icon: Icon }: { name: string, icon: React.ElementType }) => (
    <button onClick={() => setActiveLens(name)} className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-full transition-all duration-200 ${ activeLens === name ? 'bg-accent-primary/20 text-accent-primary border border-accent-primary font-semibold' : 'text-text-tertiary border border-border-primary hover:bg-bg-tertiary' }`} > <Icon size={16}/> {name} </button>
  );

  const TabButton = ({ name, activeTab }: { name: RightPanelTab, activeTab: RightPanelTab }) => (
    <button onClick={() => setActiveRightTab(name)} className={`flex-1 text-sm font-semibold pb-2 border-b-2 transition-colors ${activeTab === name ? 'border-accent-primary text-white' : 'border-transparent text-text-tertiary hover:text-white'}`}> {name} </button>
  );

  return (
    <div className="app-container flex h-screen font-sans bg-bg-primary text-text-primary">
      
      {/* LEFT PANEL */}
      <aside className="w-[280px] bg-bg-secondary p-4 flex flex-col border-r border-border-primary">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><FileText size={18} className="text-accent-primary"/> Second Brain</h2>
        <div className="flex-1 overflow-y-auto space-y-2 text-sm pr-2">
          <div className="p-3 bg-bg-tertiary rounded-md border border-border-secondary"><p className="font-semibold truncate">Biology_Chapter_4.pdf</p></div>
          <div className="p-3 bg-bg-tertiary rounded-md border border-border-secondary"><p className="font-semibold truncate">Lecture_Notes_Oct_12.txt</p></div>
        </div>
        <div className="mt-4 p-6 text-center border-2 border-dashed border-border-primary rounded-lg text-text-tertiary hover:border-accent-primary hover:text-white transition-colors cursor-pointer">
          <p>Drag & Drop Files Here</p>
        </div>
      </aside>

      {/* CENTER PANEL */}
      <main className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {messages.map((msg, index) => ( <motion.div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} > <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'assistant' ? 'bg-accent-secondary' : 'bg-accent-primary'}`}> {msg.role === 'assistant' ? <Bot size={18} /> : <User size={18} />} </div> <div className={`p-4 rounded-lg max-w-2xl ${msg.role === 'assistant' ? 'bg-bg-tertiary rounded-bl-none text-green-300 mono' : 'bg-blue-900/50 rounded-br-none text-white'}`}> <p className="whitespace-pre-wrap">{msg.content}</p> </div> </motion.div> ))}
          <div ref={messagesEndRef} />
        </div>
        
        <footer className="p-4 border-t border-border-primary bg-bg-secondary/50 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-4"> <LensButton name="Scholar" icon={BrainCircuit} /> <LensButton name="Muse" icon={Sparkles} /> <LensButton name="Reflective" icon={Bot} /> </div>
            <form onSubmit={handleSubmit} className="relative max-w-4xl mx-auto">
              <textarea ref={textareaRef} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSubmit(e); } }} placeholder={isLoading ? "Thinking..." : "Start a conversation with your sovereign partner..."} className="w-full bg-bg-tertiary border border-border-secondary rounded-lg p-4 pr-40 text-base resize-none focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all overflow-y-hidden max-h-40" rows={1} disabled={isLoading} />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
                  <div className="relative group"> <button type="button" disabled={!kernelStatus?.vision_brain_online} className="text-text-tertiary hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"> <Camera size={20}/> </button> <span className="absolute bottom-full mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"> {!kernelStatus?.vision_brain_online ? "Ollama not detected" : "Attach Image"} </span> </div>
                  <div className="relative group"> <button type="button" disabled className="text-text-tertiary hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"> <Mic size={20}/> </button> <span className="absolute bottom-full mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"> Voice input coming in V2 </span> </div>
                  <button type="submit" disabled={!input.trim() || isLoading} className="p-2 bg-accent-primary rounded-full text-white hover:bg-accent-primary/80 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"><SendHorizonal size={20}/></button>
              </div>
            </form>
            <p className="text-center text-xs text-text-tertiary mt-3"> *Wise is an experimental AI partner. Please verify important information.* </p>
        </footer>
      </main>

      {/* RIGHT PANEL */}
      <aside className="w-[320px] bg-bg-secondary p-4 flex flex-col border-l border-border-primary">
        <div className="flex border-b border-border-primary mb-4"> <TabButton name="Log" activeTab={activeRightTab}/> <TabButton name="Insights" activeTab={activeRightTab}/> <TabButton name="Nexus" activeTab={activeRightTab}/> </div>
        <div className="flex-1 overflow-y-auto font-mono text-xs space-y-3 text-text-secondary pr-2">
          {activeRightTab === 'Log' && ( <> <AnimatePresence> {executionLog.map((log, index) => ( <motion.div key={index} className="flex items-start gap-2" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }} > <span className={`shrink-0 mt-0.5 ${log.type === 'TOOL' ? 'text-yellow-400' : log.type === 'ERROR' ? 'text-red-400' : 'text-accent-primary'}`}>{log.type === 'TOOL' ? <Zap size={12}/> : <Terminal size={12}/>}</span> <span>{log.content}</span> </motion.div> ))} </AnimatePresence> {isLoading && ( <div className="flex items-center gap-2 text-text-secondary mt-2"> <span className="w-2 h-2 bg-text-tertiary rounded-full animate-pulse"></span> </div> )} </> )}
          {activeRightTab === 'Insights' && ( <div className="space-y-3"> <h3 className="text-sm font-bold text-white mb-2">Proactive Insights</h3> <div className="p-3 bg-bg-tertiary rounded-md border border-border-secondary"> <p>Connection Found: 'Kreb Cycle' in your notes relates to 'Cellular Respiration' in your textbook.</p> </div> <div className="p-3 bg-bg-tertiary rounded-md border border-border-secondary"> <p>Pattern Detected: You tend to work on coding problems most effectively on Thursday mornings.</p> </div> </div> )}
          {activeRightTab === 'Nexus' && ( <div className="space-y-3"> <h3 className="text-sm font-bold text-white mb-2">Agent & Tool Nexus</h3> <div className="p-3 bg-bg-tertiary rounded-md border border-border-secondary"> <p className="font-semibold text-white flex items-center gap-2"><CheckCircle size={14} className="text-green-400"/> Research Agent</p> </div> <div className="p-3 bg-bg-tertiary rounded-md border border-border-secondary"> <p className="font-semibold text-white flex items-center gap-2"><CheckCircle size={14} className="text-green-400"/> Code Agent</p> </div> <h4 className="text-xs font-bold text-text-tertiary pt-2">Available on Nexus</h4> <div className="p-3 bg-black/30 rounded-md border border-border-secondary"> <p className="font-semibold text-text-tertiary flex items-center gap-2"><Download size={14}/> Calendar Agent</p> </div> <div className="p-3 bg-black/30 rounded-md border border-border-secondary"> <p className="font-semibold text-text-tertiary flex items-center gap-2"><Download size={14}/> Web Search</p> </div> </div> )}
        </div>
      </aside>
    </div>
  );
}