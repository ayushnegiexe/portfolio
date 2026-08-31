"use client";

import { useEffect, useState } from "react";
import type { JSX } from "react";

import Window from "@/components/Window";
import FileIcon from "@/components/FileIcon";

interface FinderProps {
  active: string | null;
  onClose: () => void;
}

export default function Finder({ active, onClose }: FinderProps) {
  const [mounted, setMounted] = useState(false);
  const [openedFiles, setOpenedFiles] = useState<string[]>([]);

  useEffect(() => setMounted(true), []);
  if (!mounted || !active) return null;

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
      </div>
    ),
    Skills: (
      <div className="grid grid-cols-4 gap-4 p-4">
        <FileIcon
          name="Skills.txt"
          type="text"
          onOpen={() => setOpenedFiles((prev) => [...prev, "Skills.txt"])}
        />
      </div>
    ),
    "About Me": <p>About me content here</p>,
    Contact: <p>Contact form or info here</p>,
    "Download Resume": <p>Download link or PDF here</p>,
    "Portfolio Guide": <p>Guide content here</p>,
  };

  const fileContents: Record<string, JSX.Element> = {
    "Resume.pdf": (
      <div className="p-4 text-sm text-black bg-white rounded-md">
        <h2 className="font-bold mb-2">Ayush — Resume</h2>
        <ul className="list-disc list-inside">
          <li>Software Engineer at Apple</li>
          <li>Full‑stack developer (React, Node.js, TypeScript)</li>
          <li>Advanced in C, JavaScript, Algorithm design</li>
          <li>Experience with NextAuth, Jest, OAuth debugging</li>
        </ul>
      </div>
    ),
    "Project1.js": (
      <pre className="p-4 text-xs bg-black text-green-400 rounded-md overflow-auto">
{`function helloWorld() {
  console.log("Hello, world!");
}`}
      </pre>
    ),
    "Project2.js": (
      <pre className="p-4 text-xs bg-black text-green-400 rounded-md overflow-auto">
{`export default function Portfolio() {
  return <div>My Portfolio Project</div>;
}`}
      </pre>
    ),
    "Portfolio.png": (
      <div className="p-4">
        <p className="text-sm text-black">Image preview placeholder for Portfolio.png</p>
      </div>
    ),
    "Skills.txt": (
      <div className="p-4 text-sm text-black bg-white rounded-md">
        <p>Skills:</p>
        <ul className="list-disc list-inside">
          <li>React.js, Next.js</li>
          <li>Node.js, TypeScript</li>
          <li>Algorithmic problem solving</li>
          <li>Frontend UI/UX design</li>
        </ul>
      </div>
    ),
  };

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
