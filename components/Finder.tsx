"use client";

import { useEffect, useState } from "react";
import Window from "@/components/Window";

interface FinderProps {
  active: string | null;
  onClose: () => void;
}

export default function Finder({ active, onClose }: FinderProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || !active) return null;

  const windows: Record<string, JSX.Element> = {
    Resume: <p>Your resume content here</p>,
    Projects: <p>Your projects content here</p>,
    Skills: <p>Your skills content here</p>,
    "About Me": <p>About me content here</p>,
    Contact: <p>Contact form or info here</p>,
    "Download Resume": <p>Download link or PDF here</p>,
    "Portfolio Guide": <p>Guide content here</p>,
  };

  return (
  <div className="absolute inset-0 pointer-events-none z-30">
    <div className="pointer-events-auto flex justify-center mt-20">
      <Window title={active} onClose={onClose}>
        {windows[active]}
      </Window>
    </div>
  </div>
);

}
