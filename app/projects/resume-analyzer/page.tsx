"use client";

import Window from "@/components/Window";

export default function ResumeAnalyzerPage() {
  return (
    <main className="h-screen bg-transparent">
      <Window title="AI Resume Analyzer">
        <div className="p-8 space-y-8 text-gray-900 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg">
          {/* Header */}
          <header className="border-b pb-4">
            <h1 className="text-2xl font-bold tracking-tight">AI Resume Analyzer</h1>
            <p className="mt-2 text-sm text-gray-600">
              Intelligent resume evaluation platform leveraging NLP to match candidates with job descriptions.
            </p>
          </header>

          {/* Overview */}
          <section>
            <h2 className="text-lg font-semibold mb-2">Overview</h2>
            <p className="leading-relaxed">
              Built a full-stack application that analyzes resumes against job postings, highlighting missing skills,
              keyword density, and ATS compatibility. Designed to empower job seekers with actionable insights.
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
                <li>Python (NLP & AI)</li>
                <li>MongoDB Database</li>
              </ul>
            </div>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-lg font-semibold mb-2">Key Features</h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Real-time keyword density analysis</li>
              <li>Skill gap detection with AI recommendations</li>
              <li>ATS-friendly formatting validation</li>
              <li>Interactive dashboard with scoring metrics</li>
            </ul>
          </section>

          {/* View Project Button */}
          <div className="pt-4 border-t flex justify-end">
            <a
              href="https://github.com/yourusername/resume-analyzer" // replace with your repo/demo link
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
