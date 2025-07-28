// src-frontend/app/api/chat/route.ts
import { NextResponse } from 'next/server';

// This function handles POST requests to your app's /api/chat endpoint
export async function POST(request: Request) {
  const { prompt } = await request.json();

  // Simulate a realistic thinking delay
  await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

  // Create a more intelligent, context-aware fake response
  let fakeResponse = `This is a mock response to your prompt: "${prompt}". The real backend is still under construction.`;
  
  if (prompt.toLowerCase().includes('mitosis')) {
    fakeResponse = "Of course! The diagram shows cellular mitosis. 'Prophase' is the first step, where chromosomes condense. Think of it like packing your bags for a trip!";
  }

  return NextResponse.json({ response: fakeResponse });
}