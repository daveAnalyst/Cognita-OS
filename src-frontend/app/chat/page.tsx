'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Camera, SendHorizontal, Bot, User, FileText, Mic, Sparkles, BrainCircuit, Terminal, Zap, CheckCircle, Download } from 'lucide-react';

// --- Type Definitions ---
type Message = { role: 'user' | 'assistant'; content: string; };
type LogEntry = { type: 'SYSTEM' | 'TOOL' | 'INFO' | 'ERROR'; content: string; };
type KernelStatus = { text_brain_online: boolean; vision_brain_online: boolean; };
type RightPanelTab = 'Log' | 'Insights' | 'Nexus';

// --- Main Application Component ---
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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

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

    if (activeLens === 'Reflective') {
      const msg: Message = {
        role: 'assistant',
        content: "🧘 **Reflective Lens Preview**: The Reflective Lens uses CBT-inspired techniques for metacognitive coaching. This powerful feature for self-awareness and thought pattern analysis is coming in Wise V2."
      };
      setMessages(prev => [...prev, msg]);
      return;
    }

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setExecutionLog([]);
    setActiveRightTab('Log');

    addLog({ type: 'SYSTEM', content: `Activating ${activeLens} Lens...` });
    addLog({ type: 'TOOL', content: 'Analyzing query intent...' });
    addLog({ type: 'TOOL', content: 'Cross-referencing Second Brain...' });
    addLog({ type: 'INFO', content: 'Generating contextual response...' });

    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input, image: null }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `Request failed`);
      }
      const data = await response.json();
      const assistantMessage: Message = { role: 'assistant', content: data.response };
      setMessages(prev => [...prev, assistantMessage]);
      addLog({ type: 'INFO', content: `Response generated via ${activeLens} Lens` });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to get response.';
      addLog({ type: 'ERROR', content: errorMessage });
      setMessages(prev => [...prev, { role: 'assistant', content: `Sorry, I encountered an error: ${errorMessage}` }]);
      addLog({ type: 'INFO', content: 'Fallback response generated' });
    } finally {
      setIsLoading(false);
    }
  };

  // --- Sub-components ---
  const LensButton = ({ name, icon: Icon }: { name: string, icon: React.ElementType }) => (
    <button
      onClick={() => setActiveLens(name)}
      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 font-inter ${
        activeLens === name
          ? 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-[var(--text-primary)]'
          : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]'
      } border border-[var(--border-primary)]`}
      aria-label={`Switch to ${name} lens`}
    >
      <Icon size={18} /> {name}
    </button>
  );

  const TabButton = ({ name, activeTab }: { name: RightPanelTab, activeTab: RightPanelTab }) => (
    <button
      onClick={() => setActiveRightTab(name)}
      className={`flex-1 py-2 text-sm font-medium font-inter transition-colors ${
        activeTab === name
          ? 'border-b-2 border-[var(--accent-primary)] text-[var(--text-primary)]'
          : 'border-b-2 border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
      }`}
      aria-label={`Switch to ${name} tab`}
    >
      {name}
    </button>
  );

  return (
    <div className="flex min-h-screen app-container">
      {/* Left Sidebar - Second Brain */}
      <aside className="w-full md:w-72 p-8 border-r border-[var(--border-primary)] bg-[var(--bg-secondary)]/80 backdrop-blur-lg flex flex-col">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-[var(--accent-primary)] font-inter">
          <FileText size={20} /> Second Brain
        </h2>
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {[
            { title: 'Biology_Chapter_4.pdf', desc: 'Cell Division & Mitosis' },
            { title: 'Lecture_Notes_Oct_12.txt', desc: 'Lecture Notes' },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-[var(--border-primary)] bg-[var(--bg-tertiary)] hover:bg-[var(--bg-secondary)] transition-colors"
            >
              <p className="font-semibold text-[var(--accent-tertiary)] truncate font-inter">{item.title}</p>
              <p className="text-sm text-[var(--text-secondary)] mt-1 font-inter">{item.desc}</p>
            </div>
          ))}
        </div>
        <div
          className="mt-6 p-6 text-center border-2 border-dashed border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:bg-[var(--bg-tertiary)]/50 transition-all cursor-pointer font-inter"
          role="button"
          aria-label="Upload files"
        >
          <p className="font-medium text-base">Drag & Drop Files Here</p>
          <p className="text-sm text-[var(--text-secondary)] mt-2">Build your personal ontology</p>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  msg.role === 'assistant' ? 'bg-[var(--accent-secondary)]' : 'bg-[var(--accent-primary)]'
                }`}
              >
                {msg.role === 'assistant' ? <Bot size={20} /> : <User size={20} />}
              </div>
              <div
                className={`p-4 rounded-lg max-w-[85%] font-jetbrains-mono text-sm ${
                  msg.role === 'assistant'
                    ? 'bg-[var(--bg-tertiary)]/80 text-[var(--accent-tertiary)] rounded-bl-none'
                    : 'bg-[var(--accent-primary)]/20 text-[var(--text-primary)] rounded-br-none'
                } border border-[var(--border-primary)] backdrop-blur-lg`}
              >
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[var(--accent-secondary)]">
                <Bot size={20} />
              </div>
              <div className="p-4 rounded-lg rounded-bl-none bg-[var(--bg-tertiary)]/80 border border-[var(--border-primary)] backdrop-blur-lg">
                <div className="flex items-center gap-2 text-[var(--accent-primary)] font-jetbrains-mono">
                  <div className="w-2 h-2 rounded-full animate-pulse bg-[var(--accent-primary)]"></div>
                  <div className="w-2 h-2 rounded-full animate-pulse bg-[var(--accent-primary)] animate-delay-200"></div>
                  <div className="w-2 h-2 rounded-full animate-pulse bg-[var(--accent-primary)] animate-delay-400"></div>
                  <span className="ml-2">Thinking with {activeLens} Lens...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <footer className="p-8 border-t border-[var(--border-primary)] bg-[var(--bg-secondary)]/80 backdrop-blur-lg">
          <div className="flex items-center justify-center gap-3 mb-4">
            <LensButton name="Scholar" icon={BrainCircuit} />
            <LensButton name="Muse" icon={Sparkles} />
            <LensButton name="Reflective" icon={Bot} />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              placeholder={isLoading ? `${activeLens} Lens is thinking...` : `Ask me anything (${activeLens} mode active)...`}
              className="w-full rounded-lg p-4 pr-40 text-base resize-none focus:outline-none transition-all bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/50 font-inter"
              rows={1}
              disabled={isLoading}
              aria-label="Chat input"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-4">
              <div className="relative group">
                <button
                  type="button"
                  disabled={!kernelStatus?.vision_brain_online}
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Vision input"
                >
                  <Camera size={20} />
                </button>
                <span className="absolute bottom-full mb-2 w-max px-2 py-1 bg-[var(--bg-tertiary)] text-[var(--text-primary)] text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-inter">
                  {!kernelStatus?.vision_brain_online ? "Ollama not detected" : "Attach Image"}
                </span>
              </div>
              <div className="relative group">
                <button
                  type="button"
                  disabled
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Voice input (disabled)"
                >
                  <Mic size={20} />
                </button>
                <span className="absolute bottom-full mb-2 w-max px-2 py-1 bg-[var(--bg-tertiary)] text-[var(--text-primary)] text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-inter">
                  Voice input coming in V2
                </span>
              </div>
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: input.trim() && !isLoading
                    ? 'var(--gradient-primary)'
                    : 'var(--text-tertiary)',
                }}
                aria-label="Send message"
              >
                <SendHorizontal size={20} />
              </button>
            </div>
          </div>
          <p className="text-center text-sm text-[var(--text-primary)] mt-4 font-inter">
            Wise is an experimental AI partner. Please verify important information.
          </p>
        </footer>
      </main>

      {/* Right Sidebar - Logs & Insights */}
      <aside className="w-full md:w-80 p-8 border-l border-[var(--border-primary)] bg-[var(--bg-secondary)]/80 backdrop-blur-lg flex flex-col">
        <div className="flex mb-4 border-b border-[var(--border-secondary)]">
          <TabButton name="Log" activeTab={activeRightTab} />
          <TabButton name="Insights" activeTab={activeRightTab} />
          <TabButton name="Nexus" activeTab={activeRightTab} />
        </div>
        <div className="flex-1 overflow-y-auto font-jetbrains-mono text-sm space-y-4 text-[var(--text-secondary)] pr-2">
          {activeRightTab === 'Log' && (
            <div className="space-y-4">
              {executionLog.map((log, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span
                    className="shrink-0 mt-0.5"
                    style={{
                      color: log.type === 'TOOL' ? 'var(--accent-tertiary)' : log.type === 'ERROR' ? '#ef4444' : 'var(--accent-primary)',
                    }}
                  >
                    {log.type === 'TOOL' ? <Zap size={14} /> : <Terminal size={14} />}
                  </span>
                  <span className="text-[var(--text-primary)]">{log.content}</span>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-[var(--text-secondary)] mt-2">
                  <span className="w-2 h-2 rounded-full animate-pulse bg-[var(--accent-primary)]"></span>
                  <span className="text-[var(--accent-primary)]">Processing with {activeLens} Lens...</span>
                </div>
              )}
            </div>
          )}
          {activeRightTab === 'Insights' && (
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-[var(--text-primary)] pt-2 font-inter">Proactive Insights</h4>
              {[
                { title: "Kreb Cycle Connection", desc: "Relates to 'Cellular Respiration'" },
                { title: "Work Pattern", desc: "You work on coding problems most effectively on Thursdays" },
              ].map((item, index) => (
                <div key={index} className="p-4 rounded-lg border border-[var(--border-primary)] bg-[var(--bg-tertiary)]">
                  <p className="font-semibold text-[var(--accent-tertiary)] flex items-center gap-2 font-inter">{item.title}</p>
                  <p className="text-sm text-[var(--text-secondary)] mt-1 font-inter">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
          {activeRightTab === 'Nexus' && (
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-[var(--text-primary)] pt-2 font-inter">Agent & Tool Nexus</h4>
              {[
                { title: 'Research Agent', desc: 'Automated literature review and data synthesis', active: true },
                { title: 'Code Agent', desc: 'Assists with coding and debugging', active: true },
                { title: 'Calendar Agent', desc: 'Smart scheduling and task prioritization', active: false },
                { title: 'Web Search Agent', desc: 'Real-time web scraping and analysis', active: false },
              ].map((item, index) => (
                <div key={index} className="p-4 rounded-lg border border-[var(--border-primary)] bg-[var(--bg-tertiary)]">
                  <p className="font-semibold text-[var(--text-primary)] flex items-center gap-2 font-inter">
                    {item.active ? <CheckCircle size={16} className="text-[var(--accent-tertiary)]" /> : <Download size={16} />}
                    {item.title}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] mt-1 font-inter">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </aside>

      <style jsx>{`
        @keyframes gridMove {
          from { transform: translate(0, 0); }
          to { transform: translate(50px, 50px); }
        }
        .animate-delay-200 {
          animation-delay: 0.2s;
        }
        .animate-delay-400 {
          animation-delay: 0.4s;
        }
        @media (max-width: 1024px) {
          aside {
            display: none;
          }
          main {
            width: 100%;
          }
        }
        @media (max-width: 640px) {
          .p-8 {
            padding: 1.5rem;
          }
          textarea {
            padding-right: 9rem;
          }
        }
      `}</style>
    </div>
  );
}