import Window from "@/components/Window";
import Image from "next/image";

const projects = [
  {
    icon: "/icons/portfolio.png",
    alt: "Portfolio",
    title: "MacOS Portfolio",
    description: "Interactive portfolio styled like macOS.",
  },
  {
    icon: "/icons/college.png",
    alt: "College App",
    title: "College Discovery App",
    description: "Helps students explore universities with filters.",
  },
  {
    icon: "/icons/algorithm.png",
    alt: "Algorithm",
    title: "Algorithm Optimizer",
    description: "Efficient solutions for subarray sum problems.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="h-screen bg-transparent">
      <Window title="Projects">
        <div className="divide-y divide-gray-200">
          {projects.map((proj) => (
            <div key={proj.title} className="flex items-center gap-3 py-3">
              <Image src={proj.icon} alt={proj.alt} width={32} height={32} />
              <div>
                <p className="font-semibold">{proj.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Window>
    </main>
  );
}
