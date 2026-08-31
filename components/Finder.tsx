"use client";

import { useEffect, useState } from "react";
import type { JSX } from "react";

import Window from "@/components/Window";
import FileIcon from "@/components/FileIcon";
import ResumePage from "@/app/resume/page"; 
import DevsheelPage from "@/app/projects/devsheel/page";
import ResumeAnalyzerPage from "@/app/projects/resume-analyzer/page";
import TicketAssistantPage from "@/app/projects/ticket-assistant/page";
import LexicalAnalyzerPage from "@/app/projects/lexical-analyzer/page";
import SkillsPage from "@/app/skills/page";


interface FinderProps {
  active: string | null;
  onClose: () => void;
}

export default function Finder({ active, onClose }: FinderProps) {
  const [mounted, setMounted] = useState(false);
  const [openedFiles, setOpenedFiles] = useState<string[]>([]);

  useEffect(() => setMounted(true), []);
  if (!mounted || !active) return null;

  // 1️⃣ Folder windows (what icons show inside each folder)
const windows: Record<string, JSX.Element> = {
  Resume: (
    <div className="grid grid-cols-4 gap-4 p-4">
      <FileIcon
        name="Resume.pdf"
        type="pdf"
        onOpen={() => setOpenedFiles((prev) => [...prev, "Resume.pdf"])}
      />
    </div>
  ),
  Projects: (
    <div className="grid grid-cols-4 gap-4 p-4">
      <FileIcon
        name="Project1.js"
        type="code"
        onOpen={() => setOpenedFiles((prev) => [...prev, "Project1.js"])}
      />
      <FileIcon
        name="Project2.js"
        type="code"
        onOpen={() => setOpenedFiles((prev) => [...prev, "Project2.js"])}
      />
      <FileIcon
        name="Portfolio.png"
        type="image"
        onOpen={() => setOpenedFiles((prev) => [...prev, "Portfolio.png"])}
      />
      <FileIcon
        name="LexicalAnalyzer.js"
        type="code"
        onOpen={() => setOpenedFiles((prev) => [...prev, "LexicalAnalyzer.js"])}
      />
      <FileIcon
        name="Skills.md"
        type="text"
        onOpen={() => setOpenedFiles((prev) => [...prev, "Skills.md"])}
      />
    </div>
  ),
  // you can add other folders here if needed
};



const fileContents: Record<string, JSX.Element> = {
  "Resume.pdf": (
    <div className="p-4 h-[80vh] flex flex-col gap-4">
      <iframe
        src="/resume.pdf"
        className="w-full flex-1 border rounded-md shadow-sm"
      />
      <div className="flex justify-end">
        <a
          href="/resume.pdf"
          download
          className="px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded-md hover:bg-gray-300 transition"
        >
          ⬇️ Download
        </a>
      </div>
    </div>
  ),
  "Project1.js": <DevsheelPage />,
  "Project2.js": <ResumeAnalyzerPage />,
  "Portfolio.png": <TicketAssistantPage />,
  "LexicalAnalyzer.js": <LexicalAnalyzerPage />,
  "Skills.md": <SkillsPage />,
};


  // 3️⃣ Rendering Finder UI
  return (
    <div className="absolute inset-0 pointer-events-none z-30">
      {/* Finder window */}
      <div className="pointer-events-auto flex justify-center mt-20">
        <Window title={active} onClose={onClose}>
          {windows[active]}
        </Window>
      </div>

      {/* Multiple file windows */}
      {openedFiles.map((file, index) => (
        <div
          key={file}
          className="pointer-events-auto flex justify-center"
          style={{ marginTop: 32 + index * 40, marginLeft: 12 + index * 20 }}
        >
          <Window
            title={file}
            onClose={() =>
              setOpenedFiles((prev) => prev.filter((f) => f !== file))
            }
          >
            {fileContents[file]}
          </Window>
        </div>
      ))}
    </div>
  );
}
