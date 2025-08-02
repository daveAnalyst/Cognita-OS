// src-frontend/app/test/page.tsx (The Final, Legendary, Inline-Styled & Integrated Version)
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Camera, SendHorizontal, Bot, User, FileText, Mic, Sparkles, BrainCircuit, Terminal, Zap, CheckCircle, Download } from 'lucide-react';

// --- Type Definitions ---
type Message = { role: 'user' | 'assistant'; content: string; };
type LogEntry = { type: 'SYSTEM' | 'TOOL' | 'INFO' | 'ERROR'; content: string; };
type KernelStatus = { text_brain_online: boolean; vision_brain_online: boolean; };
type RightPanelTab = 'Log' | 'Insights' | 'Nexus';

// --- The Main Application Component ---
export default function ChatPage() {
  // --- State Management ---
  const [messages, setMessages] = useState<Message[]>([ { role: 'assistant', content: "Welcome to Wise. Your offline, sovereign Second Brain is ready. What great idea are we exploring today?" } ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeLens, setActiveLens] = useState('Scholar');
  const [executionLog, setExecutionLog] = useState<LogEntry[]>([]);
  const [kernelStatus, setKernelStatus] = useState<KernelStatus | null>(null);
  const [activeRightTab, setActiveRightTab] = useState<RightPanelTab>('Log');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // --- Utility & Side Effects ---
  const addLog = useCallback((entry: LogEntry) => { setExecutionLog(prev => [...prev, entry]); }, []);
  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);
  useEffect(() => { if (textareaRef.current) { textareaRef.current.style.height = 'auto'; const scrollHeight = textareaRef.current.scrollHeight; textareaRef.current.style.height = `${scrollHeight}px`; } }, [input]);

  useEffect(() => {
    const fetchKernelStatus = async () => {
      try {
        addLog({ type: 'SYSTEM', content: 'Pinging Engelbert Kernel...' });
        const response = await fetch('http://127.0.0.1:8000/api/v1/status');
        if (!response.ok) throw new Error(`Kernel responded with status: ${response.status}`);
        const data: KernelStatus = await response.json();
        setKernelStatus(data);
        addLog({ type: 'INFO', content: `Text Brain: ${data.text_brain_online ? 'Online' : 'Offline'}` });
        addLog({ type: 'INFO', content: `Vision Brain: ${data.vision_brain_online ? 'Online' : 'Offline'}` });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        addLog({ type: 'ERROR', content: `Could not connect to kernel. ${errorMessage}` });
        setKernelStatus({ text_brain_online: false, vision_brain_online: false });
      }
    };
    fetchKernelStatus();
  }, [addLog]);

  // --- Core Logic ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    if (activeLens === 'Reflective') { const msg: Message = { role: 'assistant', content: "The Reflective Lens is a powerful feature for metacognition, coming in Wise V2." }; setMessages(prev => [...prev, msg]); return; }
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]); setInput(''); setIsLoading(true); setExecutionLog([]); setActiveRightTab('Log');
    addLog({ type: 'SYSTEM', content: `Activating ${activeLens} Lens...` });
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt: input, image: null }), });
      if (!response.ok) { const errorData = await response.json(); throw new Error(errorData.detail || `Request failed`); }
      const data = await response.json();
      const assistantMessage: Message = { role: 'assistant', content: data.response };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to get response.';
      addLog({ type: 'ERROR', content: errorMessage });
      setMessages(prev => [...prev, { role: 'assistant', content: `Sorry, I encountered an error: ${errorMessage}` }]);
    } finally { setIsLoading(false); }
  };

  // --- Sub-components ---
  const LensButton = ({ name, icon: Icon }: { name: string, icon: React.ElementType }) => ( <button onClick={() => setActiveLens(name)} className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-full transition-all duration-200 border ${ activeLens === name ? 'bg-cyan-500/20 text-cyan-400 border-cyan-400 font-semibold shadow-lg' : 'text-gray-400 border-gray-600 hover:bg-gray-800 hover:text-cyan-300' }`} style={activeLens === name ? { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)', textShadow: '0 0 10px rgba(0, 212, 255, 0.5)' } : {}} > <Icon size={16}/> {name} </button> );
  const TabButton = ({ name, activeTab }: { name: RightPanelTab, activeTab: RightPanelTab }) => ( <button onClick={() => setActiveRightTab(name)} className={`flex-1 text-sm font-semibold pb-2 border-b-2 transition-colors ${ activeTab === name ? 'border-cyan-400 text-white' : 'border-transparent text-gray-400 hover:text-white' }`} style={activeTab === name ? { textShadow: '0 0 10px rgba(0, 212, 255, 0.5)' } : {}} > {name} </button> );

  return (
    <div className="flex h-screen font-sans text-white relative overflow-hidden" style={{ background: '#0a0a0b', backgroundImage: ` linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px), radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(124, 58, 237, 0.1) 0%, transparent 50%) `, backgroundSize: '50px 50px, 50px 50px, 100% 100%, 100% 100%', animation: 'gridMove 20s linear infinite' }} >
      <aside className="w-[280px] p-4 flex flex-col border-r" style={{ background: 'rgba(17, 17, 21, 0.8)', borderColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }} >
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: '#00d4ff', textShadow: '0 0 10px rgba(0, 212, 255, 0.5)' }} > <FileText size={18}/> Second Brain </h2>
        <div className="flex-1 overflow-y-auto space-y-2 text-sm pr-2">
          <div className="p-3 rounded-md border" style={{ background: '#1a1a20', borderColor: 'rgba(255, 255, 255, 0.1)' }} > <p className="font-semibold truncate" style={{ color: '#06ffa5', textShadow: '0 0 10px rgba(6, 255, 165, 0.5)' }} > Biology_Chapter_4.pdf </p> </div>
          <div className="p-3 rounded-md border" style={{ background: '#1a1a20', borderColor: 'rgba(255, 255, 255, 0.1)' }} > <p className="font-semibold truncate" style={{ color: '#06ffa5', textShadow: '0 0 10px rgba(6, 255, 165, 0.5)' }} > Lecture_Notes_Oct_12.txt </p> </div>
        </div>
        <div className="mt-4 p-6 text-center border-2 border-dashed rounded-lg text-gray-400 hover:text-white transition-colors cursor-pointer" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#00d4ff'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; }} > <p>Drag & Drop Files Here</p> </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {messages.map((msg, index) => ( <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`} > <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${ msg.role === 'assistant' ? 'bg-purple-600' : 'bg-cyan-500' }`} style={{ boxShadow: msg.role === 'assistant' ? '0 0 20px rgba(124, 58, 237, 0.3)' : '0 0 20px rgba(0, 212, 255, 0.3)' }} > {msg.role === 'assistant' ? <Bot size={18} /> : <User size={18} />} </div> <div className={`p-4 rounded-lg max-w-2xl font-mono ${ msg.role === 'assistant' ? 'rounded-bl-none' : 'rounded-br-none' }`} style={msg.role === 'assistant' ? { background: 'rgba(26, 26, 32, 0.8)', color: '#06ffa5', textShadow: '0 0 10px rgba(6, 255, 165, 0.5)', border: '1px solid rgba(6, 255, 165, 0.2)', backdropFilter: 'blur(10px)' } : { background: 'rgba(59, 130, 246, 0.2)', color: 'white', border: '1px solid rgba(59, 130, 246, 0.3)', backdropFilter: 'blur(10px)' }} > <p className="whitespace-pre-wrap">{msg.content}</p> </div> </div> ))}
          <div ref={messagesEndRef} />
        </div>
        <footer className="p-4 border-t backdrop-blur-sm" style={{ background: 'rgba(17, 17, 21, 0.8)', borderColor: 'rgba(255, 255, 255, 0.1)' }} >
          <div className="flex items-center justify-center gap-2 mb-4"> <LensButton name="Scholar" icon={BrainCircuit} /> <LensButton name="Muse" icon={Sparkles} /> <LensButton name="Reflective" icon={Bot} /> </div>
          <div className="relative max-w-4xl mx-auto">
            <textarea ref={textareaRef} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSubmit(e); } }} placeholder={isLoading ? "Thinking..." : "Start a conversation..."} className="w-full rounded-lg p-4 pr-40 text-base resize-none focus:outline-none transition-all overflow-y-hidden max-h-40 text-white font-mono" style={{ background: '#1a1a20', border: '1px solid rgba(255, 255, 255, 0.1)' }} onFocus={(e) => { e.target.style.borderColor = '#00d4ff'; e.target.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)'; }} onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.target.style.boxShadow = 'none'; }} rows={1} disabled={isLoading} />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
              <div className="relative group"> <button type="button" disabled={!kernelStatus?.vision_brain_online} className="text-gray-400 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"> <Camera size={20}/> </button> <span className="absolute bottom-full mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"> {!kernelStatus?.vision_brain_online ? "Ollama not detected" : "Attach Image"} </span> </div>
              <div className="relative group"> <button type="button" disabled className="text-gray-400 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"> <Mic size={20}/> </button> <span className="absolute bottom-full mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"> Voice input coming in V2 </span> </div>
              <button type="submit" disabled={!input.trim() || isLoading} className="p-2 rounded-full text-white transition-colors disabled:cursor-not-allowed" style={{ background: input.trim() && !isLoading ? 'linear-gradient(135deg, #00d4ff, #7c3aed)' : '#6b7280', boxShadow: input.trim() && !isLoading ? '0 0 20px rgba(0, 212, 255, 0.3)' : 'none' }} > <SendHorizontal size={20}/> </button>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-3"> *Wise is an experimental AI partner. Please verify important information.* </p>
        </footer>
      </main>

      <aside className="w-[320px] p-4 flex flex-col border-l" style={{ background: 'rgba(17, 17, 21, 0.8)', borderColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }} >
        <div className="flex mb-4" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }} > <TabButton name="Log" activeTab={activeRightTab}/> <TabButton name="Insights" activeTab={activeRightTab}/> <TabButton name="Nexus" activeTab={activeRightTab}/> </div>
        <div className="flex-1 overflow-y-auto font-mono text-xs space-y-3 text-gray-300 pr-2">
          {activeRightTab === 'Log' && ( <> {executionLog.map((log, index) => ( <div key={index} className="flex items-start gap-2" > <span className={`shrink-0 mt-0.5`} style={{ color: log.type === 'TOOL' ? '#facc15' : log.type === 'ERROR' ? '#ef4444' : '#00d4ff' }} >{log.type === 'TOOL' ? <Zap size={12}/> : <Terminal size={12}/>}</span> <span style={{ color: '#a0a0ab' }} >{log.content}</span> </div> ))} {isLoading && ( <div className="flex items-center gap-2 text-gray-400 mt-2"> <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00d4ff' }}></span> <span style={{ color: '#00d4ff', textShadow: '0 0 10px rgba(0, 212, 255, 0.5)' }} > Processing... </span> </div> )} </> )}
          {activeRightTab === 'Insights' && ( <div className="space-y-3"> <h3 className="text-sm font-bold mb-2" style={{ color: 'white', textShadow: '0 0 10px rgba(0, 212, 255, 0.5)' }} >Proactive Insights</h3> <div className="p-3 rounded-md border" style={{ background: '#1a1a20', borderColor: 'rgba(255, 255, 255, 0.1)' }} > <p style={{ color: '#06ffa5', textShadow: '0 0 10px rgba(6, 255, 165, 0.3)' }} > Connection Found: 'Kreb Cycle' relates to 'Cellular Respiration'.</p> </div> <div className="p-3 rounded-md border" style={{ background: '#1a1a20', borderColor: 'rgba(255, 255, 255, 0.1)' }} > <p style={{ color: '#06ffa5', textShadow: '0 0 10px rgba(6, 255, 165, 0.3)' }} > Pattern Detected: You work on coding problems most effectively on Thursdays.</p> </div> </div> )}
          {activeRightTab === 'Nexus' && ( <div className="space-y-3"> <h3 className="text-sm font-bold mb-2" style={{ color: 'white', textShadow: '0 0 10px rgba(0, 212, 255, 0.5)' }} >Agent & Tool Nexus</h3> <div className="p-3 rounded-md border" style={{ background: '#1a1a20', borderColor: 'rgba(255, 255, 255, 0.1)' }} > <p className="font-semibold text-white flex items-center gap-2"><CheckCircle size={14} className="text-green-400"/> <span style={{ color: '#06ffa5', textShadow: '0 0 10px rgba(6, 255, 165, 0.3)' }}>Research Agent</span></p> </div> <div className="p-3 rounded-md border" style={{ background: '#1a1a20', borderColor: 'rgba(255, 255, 255, 0.1)' }} > <p className="font-semibold text-white flex items-center gap-2"><CheckCircle size={14} className="text-green-400"/> <span style={{ color: '#06ffa5', textShadow: '0 0 10px rgba(6, 255, 165, 0.3)' }}>Code Agent</span></p> </div> <h4 className="text-xs font-bold text-gray-400 pt-2">Available on Nexus</h4> <div className="p-3 rounded-md border" style={{ background: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.1)' }} > <p className="font-semibold text-gray-400 flex items-center gap-2"><Download size={14}/> Calendar Agent</p> </div> <div className="p-3 rounded-md border" style={{ background: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(255, 255, 255, 0.1)' }} > <p className="font-semibold text-gray-400 flex items-center gap-2"><Download size={14}/> Web Search</p> </div> </div> )}
        </div>
      </aside>
      <style jsx>{` @keyframes gridMove { 0% { background-position: 0 0, 0 0; } 100% { background-position: 50px 50px, 50px 50px; } } `}</style>
    </div>
  );
}