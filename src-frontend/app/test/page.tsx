// src-frontend/app/test/page.tsx

'use client'; // This is a Client Component because it uses state and event handlers.

import { useState } from 'react';

export default function TestPage() {
  // We use a state variable to hold the message we display to the user.
  const [message, setMessage] = useState('Awaiting test...');
  const [isLoading, setIsLoading] = useState(false);

  // This function is called when the button is clicked.
  const handleTestConnection = async () => {
    setMessage('Connecting to backend...');
    setIsLoading(true);

    try {
      // This is the core of the test: a fetch call to the backend's root endpoint.
      const response = await fetch('http://1.2.7.0.0.1:8000/');
      
      if (!response.ok) {
        // Handle HTTP errors like 404 or 500
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // If the call is successful, we update the message with the backend's response.
      setMessage(`✅ Success! Backend says: ${JSON.stringify(data)}`);

    } catch (error) {
      // If the call fails for any reason (CORS, server not running), we show an error.
      // This is the error we expect to see first.
      console.error("Connection test failed:", error);
      setMessage(`❌ Error: Could not connect to backend. Check the console for details.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // We use your beautiful Design System classes to make the test page look good.
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