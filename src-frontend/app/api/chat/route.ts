// src-frontend/app/api/chat/route.ts
import { NextResponse } from 'next/server';

// This function handles POST requests to /api/chat
export async function POST(request: Request) {
  const { prompt } = await request.json();

  // Simulate a thinking delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Create a fake, hardcoded response
  const fakeResponse = `This is a mock response to your prompt: "${prompt}". The real backend is still under construction.`;

  return NextResponse.json({ response: fakeResponse });
}