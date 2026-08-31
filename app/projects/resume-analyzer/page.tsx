"use client";

import Window from "@/components/Window";

export default function ResumeAnalyzerPage() {
  return (
    <main className="h-screen bg-transparent">
      <Window title="AI Resume Analyzer">
        <div className="p-6 space-y-6 text-sm text-gray-800">
          <h1 className="text-xl font-bold">AI Resume Analyzer</h1>
          <p>
            Developed a full-stack resume evaluation application that parses resumes against target job descriptions,
            scoring keyword density and skill alignment.
          </p>

          <h2 className="font-semibold">Tech Stack</h2>
          <ul className="list-disc list-inside">
            <li>Frontend: ReactJS</li>
            <li>Backend: NodeJS</li>
            <li>AI/NLP: Python</li>
          </ul>

          <h2 className="font-semibold">Highlights</h2>
          <ul className="list-disc list-inside">
            <li>Automated missing skill detection</li>
            <li>Optimized ATS parsing accuracy</li>
            <li>Real-time analytical feedback</li>
          </ul>
        </div>
      </Window>
    </main>
  );
}
