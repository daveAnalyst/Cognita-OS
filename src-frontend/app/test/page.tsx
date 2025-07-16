'use client'; // This is required at the top of a file that uses hooks

import { useState } from 'react';

export default function TestPage() {
  const [message, setMessage] = useState('Click the button to test backend connection...');

  const handleTestConnection = async () => {
    try {
      // Davin's future health-check endpoint
      const response = await fetch('http://127.0.0.1:8000/'); 
      const data = await response.json();
      setMessage(`Success! Backend says: ${JSON.stringify(data)}`);
    } catch (error) {
      setMessage(`Error: Could not connect to backend. Is it running? Details: ${error.message}`);
    }
  };

  return (
    <main style={{ padding: '2rem', color: 'white' }}>
      <h1>Backend Connection Test</h1>
      <button onClick={handleTestConnection} style={{ padding: '1rem', marginTop: '1rem' }}>
        Test Connection
      </button>
      <p style={{ marginTop: '1rem' }}>Status: {message}</p>
    </main>
  );
}