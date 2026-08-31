"use client";

import { useState } from "react";
import Window from "@/components/Window";
import ResumePage from "@/app/resume/page"; 
import DevsheelPage from "@/app/projects/devsheel/page";
import ResumeAnalyzerPage from "@/app/projects/resume-analyzer/page";
import TicketAssistantPage from "@/app/projects/ticket-assistant/page";
import LexicalAnalyzerPage from "@/app/projects/lexical-analyzer/page";
import SkillsPage from "@/app/skills/page";
import type { JSX } from "react";

export default function Finder() {
  const [active, setActive] = useState<"Resume" | "Projects" | "Skills">("Resume");
  const [openedFile, setOpenedFile] = useState<string | null>(null);

  // Sections
  const sections: Record<string, JSX.Element> = {
    Resume: <ResumePage />,
    Projects: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <ProjectCard
          title="Devsheel"
          description="Portfolio website showcasing developer projects and skills."
          onOpen={() => setOpenedFile("Devsheel")}
        />
        <ProjectCard
          title="Resume Analyzer"
          description="AI-powered tool to analyze resumes and provide insights."
          onOpen={() => setOpenedFile("ResumeAnalyzer")}
        />
        <ProjectCard
          title="Ticket Assistant"
          description="Smart assistant for managing support tickets efficiently."
          onOpen={() => setOpenedFile("TicketAssistant")}
        />
        <ProjectCard
          title="Lexical Analyzer"
          description="Compiler design project using Lex and C for tokenization."
          onOpen={() => setOpenedFile("LexicalAnalyzer")}
        />
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
    <main className="h-screen bg-transparent flex justify-center items-start p-6">
      {!openedFile ? (
        <Window title={active}>
          {sections[active]}
          {/* Simple navigation buttons */}
          <div className="flex gap-4 mt-6">
            <button onClick={() => { setActive("Resume"); setOpenedFile(null); }} className="px-3 py-1 bg-gray-200 rounded-md">Resume</button>
            <button onClick={() => { setActive("Projects"); setOpenedFile(null); }} className="px-3 py-1 bg-gray-200 rounded-md">Projects</button>
            <button onClick={() => { setActive("Skills"); setOpenedFile(null); }} className="px-3 py-1 bg-gray-200 rounded-md">Skills</button>
          </div>
        </Window>
      ) : (
        <Window title={openedFile} onClose={() => setOpenedFile(null)}>
          {fileContents[openedFile]}
        </Window>
      )}
    </main>
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
