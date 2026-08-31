"use client";

import { ReactNode, useState, useEffect } from "react";

interface WindowProps {
  title: string;
  children: ReactNode;
  onClose?: () => void;
}

export default function Window({ title, children, onClose }: WindowProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-label={title}
      className={`rounded-lg shadow-lg bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-gray-300/50 dark:border-zinc-700/50
      transition-all duration-300 ease-in-out
      ${isMaximized ? "w-full h-full" : "w-[400px]"} 
      ${isMinimized ? "opacity-0 scale-95" : "opacity-100"}`}
    >
      {/* Title bar with traffic-light controls */}
      <div className="flex items-center justify-between px-3 py-2 bg-gray-200/60 dark:bg-zinc-800/60 backdrop-blur-sm rounded-t-lg">
        <div className="flex gap-2">
          {/* Close */}
          <span
            className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"
            onClick={() => onClose?.()}
            aria-label="Close window"
          />
          {/* Minimize */}
          <span
  className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"
  onClick={() => onClose?.()}   // closes instead of toggling minimize
  aria-label="Minimize window"
/>
          {/* Maximize */}
          <span
            className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"
            onClick={() => setIsMaximized((prev) => !prev)}
            aria-label="Maximize window"
          />
        </div>
        <p className="text-sm font-semibold">{title}</p>
        <div />
      </div>

      {/* Content */}
      {!isMinimized && <div className="p-4">{children}</div>}
    </div>
  );
}
