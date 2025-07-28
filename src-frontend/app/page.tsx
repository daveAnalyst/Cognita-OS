// src-frontend/app/page.tsx
import { redirect } from 'next/navigation';

export default function HomePage() {
  // This server component's only job is to redirect to our main app interface.
  redirect('/chat');
  
  // We return null because the redirect will happen before anything is rendered.
  return null;
}