"use client";

import { useState } from "react";
import Window from "@/components/Window";
import ResumePage from "@/app/resume/page"; 
import DevsheelPage from "@/app/projects/devsheel/page";
import ResumeAnalyzerPage from "@/app/projects/resume-analyzer/page";
import TicketAssistantPage from "@/app/projects/ticket-assistant/page";
import LexicalAnalyzerPage from "@/app/projects/lexical-analyzer/page";
import SkillsPage from "@/app/skills/page";
import { FileText, FolderOpen, Wrench } from "lucide-react"; 
import Image from "next/image";
import type { JSX } from "react";

export default function Finder() {
  const [active, setActive] = useState("Resume");
  const [openedFile, setOpenedFile] = useState<string | null>(null);

  // Sections for sidebar navigation
  const sections: Record<string, JSX.Element> = {
    Resume: <ResumePage />,
    Projects: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <ProjectCard
          icon="/icons/portfolio.png"
          alt="Portfolio"
          title="Devsheel"
          description="Portfolio website showcasing developer projects and skills."
          onOpen={() => setOpenedFile("Devsheel")}
        />
        <ProjectCard
          icon="/icons/college.png"
          alt="College App"
          title="Resume Analyzer"
          description="AI-powered tool to analyze resumes and provide insights."
          onOpen={() => setOpenedFile("ResumeAnalyzer")}
        />
        <ProjectCard
          icon="/icons/algorithm.png"
          alt="Algorithm"
          title="Ticket Assistant"
          description="Smart assistant for managing support tickets efficiently."
          onOpen={() => setOpenedFile("TicketAssistant")}
        />
        <ProjectCard
          icon="/icons/compiler.png"
          alt="Compiler"
          title="Lexical Analyzer"
          description="Compiler design project using Lex and C for tokenization."
          onOpen={() => setOpenedFile("LexicalAnalyzer")}
        />
      </div>
    ),
    Skills: <SkillsPage />,
  };

  // File contents (single window mode)
  const fileContents: Record<string, JSX.Element> = {
    Devsheel: <DevsheelPage />,
    ResumeAnalyzer: <ResumeAnalyzerPage />,
    TicketAssistant: <TicketAssistantPage />,
    LexicalAnalyzer: <LexicalAnalyzerPage />,
  };

  return (
    <main className="h-screen bg-transparent flex">
      {/* Sidebar */}
      <aside className="w-56 bg-gray-100 dark:bg-zinc-900 border-r p-6 space-y-4">
        <SidebarButton label="Resume" icon={<FileText className="w-4 h-4" />} active={active} setActive={setActive} setOpenedFile={setOpenedFile} />
        <SidebarButton label="Projects" icon={<FolderOpen className="w-4 h-4" />} active={active} setActive={setActive} setOpenedFile={setOpenedFile} />
        <SidebarButton label="Skills" icon={<Wrench className="w-4 h-4" />} active={active} setActive={setActive} setOpenedFile={setOpenedFile} />
      </aside>

      {/* Content Pane */}
      <div className="flex-1 p-6 overflow-y-auto">
        {!openedFile ? (
          <Window title={active}>
            {sections[active]}
          </Window>
        ) : (
          <Window title={openedFile} onClose={() => setOpenedFile(null)}>
            {fileContents[openedFile]}
          </Window>
        )}
      </div>
    </main>
  );
}

/* Sidebar Button Helper */
function SidebarButton({
  label,
  icon,
  active,
  setActive,
  setOpenedFile,
}: {
  label: string;
  icon: JSX.Element;
  active: string;
  setActive: (val: string) => void;
  setOpenedFile: (val: string | null) => void;
}) {
  return (
    <button
      onClick={() => { setActive(label); setOpenedFile(null); }}
      className={`flex items-center gap-2 w-full px-3 py-2 rounded-md text-sm font-medium transition 
        ${active === label ? "bg-blue-600 text-white" : "hover:bg-gray-200 dark:hover:bg-zinc-800"}`}
    >
      {icon} {label}
    </button>
  );
}

/* Project Card Helper */
function ProjectCard({
  icon,
  alt,
  title,
  description,
  onOpen,
}: {
  icon: string;
  alt: string;
  title: string;
  description: string;
  onOpen: () => void;
}) {
  return (
    <div className="rounded-lg border bg-white dark:bg-zinc-900 shadow-md hover:shadow-lg transition p-6 flex flex-col justify-between">
      <div className="flex items-center gap-4">
        <Image src={icon} alt={alt} width={48} height={48} />
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>
        </div>
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
