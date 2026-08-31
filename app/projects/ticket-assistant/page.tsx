"use client";

import Window from "@/components/Window";

export default function TicketAssistantPage() {
  return (
    <main className="h-screen bg-transparent">
      <Window title="AI Ticket Assistant">
        <div className="p-8 space-y-8 text-gray-900 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg">
          {/* Header */}
          <header className="border-b pb-4">
            <h1 className="text-2xl font-bold tracking-tight">AI Ticket Assistant</h1>
            <p className="mt-2 text-sm text-gray-600">
              Intelligent support ticket platform that classifies issues, prioritizes requests, and drafts responses using AI.
            </p>
          </header>

          {/* Overview */}
          <section>
            <h2 className="text-lg font-semibold mb-2">Overview</h2>
            <p className="leading-relaxed">
              Designed a microservices-based ticketing system that leverages machine learning to automate
              customer support workflows. Reduced average response time by 40% while improving accuracy of issue classification.
            </p>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-lg font-semibold mb-2">Tech Stack</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <ul className="list-disc list-inside">
                <li>ReactJS (Frontend)</li>
                <li>NodeJS (Backend)</li>
              </ul>
              <ul className="list-disc list-inside">
                <li>Python (ML Models)</li>
                <li>Microservices Architecture</li>
              </ul>
            </div>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-lg font-semibold mb-2">Key Features</h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Automated ticket classification with NLP</li>
              <li>Priority assignment based on severity</li>
              <li>AI-generated draft responses for agents</li>
              <li>Interactive admin dashboard with analytics</li>
            </ul>
          </section>

          {/* View Project Button */}
          <div className="pt-4 border-t flex justify-end">
            <a
              href="https://github.com/yourusername/ticket-assistant" // replace with your repo/demo link
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition"
            >
              🔗 View Project
            </a>
          </div>

          {/* Footer */}
          <footer className="pt-4 text-xs text-gray-500">
            <p>Developed by Ayush · Software Engineer @ Apple</p>
          </footer>
        </div>
      </Window>
    </main>
  );
}
