"use client";

import Window from "@/components/Window";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker } from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiC, 
  SiTailwindcss, 
  SiTypescript, 
  SiJavascript, 
  SiJest, 
  SiMongodb 
} from "react-icons/si";
import type { JSX } from "react";

export default function SkillsPage() {
  return (
    <main className="h-screen bg-transparent">
      <Window title="Skills">
        <div className="p-8 space-y-12 text-gray-900 dark:text-gray-100 bg-gradient-to-br from-white to-gray-50 dark:from-zinc-900 dark:to-black rounded-xl shadow-lg">
          
          {/* Header */}
          <header className="border-b pb-6">
            <h1 className="text-3xl font-bold tracking-tight">Technical Skills</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              A curated set of programming languages, frameworks, and tools I specialize in.
            </p>
          </header>

          {/* Languages */}
          <section>
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Languages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
              <SkillItem icon={<SiJavascript className="text-yellow-500" />} label="JavaScript" />
              <SkillItem icon={<SiTypescript className="text-blue-600" />} label="TypeScript" />
              <SkillItem icon={<FaPython className="text-blue-400" />} label="Python" />
              <SkillItem icon={<SiC className="text-blue-700" />} label="C" />
            </div>
          </section>

          {/* Frameworks */}
          <section>
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Frameworks</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
              <SkillItem icon={<FaReact className="text-blue-500" />} label="React.js" />
              <SkillItem icon={<SiNextdotjs className="text-black dark:text-white" />} label="Next.js" />
              <SkillItem icon={<FaNodeJs className="text-green-600" />} label="Node.js" />
              <SkillItem icon={<SiTailwindcss className="text-cyan-500" />} label="TailwindCSS" />
              <SkillItem icon={<SiMongodb className="text-green-700" />} label="MongoDB" />
            </div>
          </section>

          {/* Tools */}
          <section>
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
              <SkillItem icon={<FaGitAlt className="text-orange-600" />} label="Git" />
              <SkillItem icon={<FaDocker className="text-blue-500" />} label="Docker" />
              <SkillItem icon={<SiJest className="text-pink-500" />} label="Jest" />
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-6 border-t text-xs text-gray-500 dark:text-gray-400">
            <p>Developed by Ayush · Software Engineer @ Apple</p>
          </footer>
        </div>
      </Window>
    </main>
  );
}

/* Helper Component */
function SkillItem({ icon, label }: { icon: JSX.Element; label: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-md bg-gray-100 dark:bg-zinc-800 shadow-sm hover:shadow-md transition">
      <div className="text-2xl">{icon}</div>
      <span>{label}</span>
    </div>
  );
}
