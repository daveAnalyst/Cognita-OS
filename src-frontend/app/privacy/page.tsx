// src-frontend/app/privacy/page.tsx
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

// The Three Unbreakable Promises - Reused from our PrinciplesSection for consistency
const promises = [
  {
    title: "Always Offline.",
    description: "Wise runs fully on your device, not in the cloud. It thrives in airplane mode, ensuring your core thinking is never dependent on a Wi-Fi connection."
  },
  {
    title: "Uncompromising Privacy.",
    description: "Your data stays private—notes, chats, and files never leave your device. We cannot see them. No one can see them. Period."
  },
  {
    title: "Total Ownership.",
    description: "You own your AI’s evolution. All personalization and model fine-tuning happens only on your device, under your full control."
  }
];

export default function PrivacyPolicyPage() {
  return (
    // Note: The Navbar will be automatically included from layout.tsx
    <main className="bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        
        {/* The One-Sentence Summary */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">
            Our Privacy Policy is Simple:
          </h1>
          <p className="mt-6 text-2xl md:text-3xl text-gray-600 font-medium">
            We see none of your personal data. Ever.
          </p>
        </div>

        {/* The Bill of Rights - The Detailed Promises */}
        <div className="space-y-12">
          <h2 className="text-center text-3xl font-bold text-black">Your Bill of Rights</h2>
          
          {/* We will map over the same promises from the landing page for perfect consistency */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promises.map((promise) => (
              <div key={promise.title} className="text-center p-6 bg-gray-50 rounded-lg">
                <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{promise.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Fine Print - Human-Readable */}
        <div className="mt-20 pt-12 border-t border-gray-200 space-y-8 text-base text-gray-700">
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Website & Waitlist Information</h3>
            <p>
              When you visit our website or sign up for our updates waitlist, we only collect your email address to communicate with you. We use simple, privacy-first analytics to understand traffic. We will never sell or share your email.
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Future Cloud Features</h3>
            <p>
              If we ever offer optional cloud services (like team sync), they will be strictly opt-in and will use end-to-end, zero-knowledge encryption. Our architectural principle is that even if our servers were breached, your data would be unreadable gibberish.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
            <p>
              If you have any questions about this policy, please don't hesitate to reach out to us at <a href="mailto:davidomungala3@gmail.com" className="text-blue-600 hover:underline">davidomungala3@gmail.com</a>.
            </p>
          </section>
        </div>

        <div className="text-center mt-16">
            <Link href="/" className="text-blue-600 hover:underline font-medium">
              ← Back to Homepage
            </Link>
          </div>
      </div>
    </main>
  );
};