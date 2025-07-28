// src-frontend/app/page.tsx

'use client'; 

import { useState } from 'react';

export default function TestPage() {
  const [message, setMessage] = useState('Awaiting test...');
  const [isLoading, setIsLoading] = useState(false);

  const handleTestConnection = async () => {
    setMessage('Connecting to backend...');
    setIsLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessage(`✅ Success! Backend says: ${JSON.stringify(data)}`);

    } catch (error) {
      console.error("Connection test failed:", error);
      let errorMessage = error instanceof Error ? error.message : String(error);
      setMessage(`❌ Error: Could not connect. Is the backend running? Details: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold gradient-text mb-4">
        Sprint 1: End-to-End Test
      </h1>
      <p className="text-xl text-text-secondary mb-8">
        This page tests the connection from the Tauri frontend to the Python backend.
      </p>

      <div className="bg-glass-dark rounded-xl p-6 w-full max-w-2xl border border-border-primary">
        <button 
          onClick={handleTestConnection} 
          disabled={isLoading}
          className="btn-primary w-full disabled:opacity-50 disabled:scale-100"
        >
          {isLoading ? 'Testing...' : 'Test Connection to Backend'}
        </button>
        <div className="mt-6 p-4 bg-black/50 rounded-lg font-mono text-left">
          <p className="text-text-tertiary mb-2">{'>'} STATUS:</p>
          <p className="text-lg">{message}</p>
        </div>
      </div>
    </div>
  );
}