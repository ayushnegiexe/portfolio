"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface DockProps {
  onOpen: (name: string) => void;
}

const apps = [
  { name: "Resume", icon: "/resume.png" },
  { name: "Projects", icon: "/projects.png" },
  { name: "Skills", icon: "/skills.png" },
  { name: "GitHub", icon: "/github.png", link: "https://github.com/ayushnegiexe" },
  { name: "LinkedIn", icon: "/linkedin.png", link: "https://linkedin.com/in/ayush-negi-exe" },
];

export default function Dock({ onOpen }: DockProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [clicked, setClicked] = useState<number | null>(null);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex px-4 py-2 bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 dark:border-black/20">
      {apps.map((app, i) => {
        const distance = hovered !== null ? Math.abs(i - hovered) : 0;
        const scale = hovered !== null ? Math.max(1, 1.5 - distance * 0.25) : 1;

        const handleClick = () => {
          if (app.link) {
            window.open(app.link, "_blank");
          } else {
            onOpen(app.name);
          }
          setClicked(i);
        };

        return (
          <motion.div
            key={app.name}
            className="mx-2 flex flex-col items-center cursor-pointer"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onClick={handleClick}
            animate={{ scale, y: clicked === i ? -10 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onAnimationComplete={() => setClicked(null)}
          >
            <Image
              src={app.icon}
              alt={app.name}
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="text-xs mt-1">{app.name}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
