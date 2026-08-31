"use client";

import Window from "@/components/Window";
import Image from "next/image";

const projects = [
  {
    icon: "/icons/portfolio.png",
    alt: "Portfolio",
    title: "MacOS Portfolio",
    description: "Interactive portfolio styled like macOS.",
    link: "https://github.com/yourusername/macos-portfolio",
  },
  {
    icon: "/icons/college.png",
    alt: "College App",
    title: "College Discovery App",
    description: "Helps students explore universities with filters.",
    link: "https://github.com/yourusername/college-app",
  },
  {
    icon: "/icons/algorithm.png",
    alt: "Algorithm",
    title: "Algorithm Optimizer",
    description: "Efficient solutions for subarray sum problems.",
    link: "https://github.com/yourusername/algorithm-optimizer",
  },
];

export default function ProjectsPage() {
  return (
    <main className="h-screen bg-transparent">
      <Window title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="rounded-lg border bg-white dark:bg-zinc-900 shadow-md hover:shadow-lg transition p-6 flex flex-col justify-between"
            >
              <div className="flex items-center gap-4">
                <Image src={proj.icon} alt={proj.alt} width={48} height={48} />
                <div>
                  <h2 className="text-lg font-semibold">{proj.title}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {proj.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
                >
                  🔗 View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </Window>
    </main>
  );
}
