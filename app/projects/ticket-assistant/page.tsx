"use client";

import Window from "@/components/Window";

export default function TicketAssistantPage() {
  return (
    <main className="h-screen bg-transparent">
      <Window title="AI Ticket Assistant">
        <div className="p-6 space-y-6 text-sm text-gray-800">
          <h1 className="text-xl font-bold">AI Ticket Assistant</h1>
          <p>
            Built a support ticket platform using AI to classify incoming issues, assign priority levels,
            and generate automated response drafts.
          </p>

          <h2 className="font-semibold">Tech Stack</h2>
          <ul className="list-disc list-inside">
            <li>Frontend: ReactJS</li>
            <li>Backend: NodeJS</li>
            <li>Architecture: Microservices</li>
          </ul>

          <h2 className="font-semibold">Features</h2>
          <ul className="list-disc list-inside">
            <li>Complete CRUD functionality</li>
            <li>Token-based authentication</li>
            <li>Interactive dashboard for administrators</li>
          </ul>
        </div>
      </Window>
    </main>
  );
}
