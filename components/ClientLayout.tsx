"use client";

import { useState } from "react";
import Dock from "@/components/Dock";
import Splash from "@/components/Splash";
import MenuBar from "@/components/MenuBar";
import StatusBar from "@/components/StatusBar";
import Window from "@/components/Window";
import type {JSX} from "react";

// Import your content pages
import ResumePage from "@/app/resume/page"; 
import DevsheelPage from "@/app/projects/devsheel/page";
import ResumeAnalyzerPage from "@/app/projects/resume-analyzer/page";
import TicketAssistantPage from "@/app/projects/ticket-assistant/page";
import LexicalAnalyzerPage from "@/app/projects/lexical-analyzer/page";
import SkillsPage from "@/app/skills/page";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<string | null>(null);

  // Map active keys to content
  const sections: Record<string, JSX.Element> = {
    Resume: <ResumePage />,
    Projects: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <ProjectCard title="Devsheel" description="Portfolio website showcasing developer projects and skills." onOpen={() => setActive("Devsheel")} />
        <ProjectCard title="Resume Analyzer" description="AI-powered tool to analyze resumes and provide insights." onOpen={() => setActive("ResumeAnalyzer")} />
        <ProjectCard title="Ticket Assistant" description="Smart assistant for managing support tickets efficiently." onOpen={() => setActive("TicketAssistant")} />
        <ProjectCard title="Lexical Analyzer" description="Compiler design project using Lex and C for tokenization." onOpen={() => setActive("LexicalAnalyzer")} />
      </div>
    ),
    Skills: <SkillsPage />,
  };

  const fileContents: Record<string, JSX.Element> = {
    Devsheel: <DevsheelPage />,
    ResumeAnalyzer: <ResumeAnalyzerPage />,
    TicketAssistant: <TicketAssistantPage />,
    LexicalAnalyzer: <LexicalAnalyzerPage />,
  };

  return (
    <>
      {/* Background splash */}
      <Splash />

      {/* Top menu bar */}
      <MenuBar onOpen={setActive} />

      {/* Status bar fixed top-right */}
      <div className="fixed top-2 right-4 z-50">
        <StatusBar />
      </div>

      {/* Spotlight search */}
      <Spotlight />

      {/* Single clean window */}
      {active && (
        <div className="pointer-events-auto flex justify-center mt-20">
          <Window title={active} onClose={() => setActive(null)}>
            {sections[active] ?? fileContents[active]}
          </Window>
        </div>
      )}

      {/* Page content */}
      {children}

      {/* Dock at bottom */}
      <Dock onOpen={setActive} />
    </>
  );
}

/* Project Card Helper */
function ProjectCard({
  title,
  description,
  onOpen,
}: {
  title: string;
  description: string;
  onOpen: () => void;
}) {
  return (
    <div className="rounded-lg border bg-white dark:bg-zinc-900 shadow-md hover:shadow-lg transition p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{description}</p>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          onClick={onOpen}
          className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
        >
          Open
        </button>
      </div>
    </div>
  );
}
