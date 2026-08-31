"use client";

import { FileText, Code, FileImage } from "lucide-react";

export default function FileIcon({
  name,
  type,
  onOpen,
}: {
  name: string;
  type: "pdf" | "code" | "text" | "image";
  onOpen?: () => void;
}) {
  const iconMap = {
    pdf: FileText,
    code: Code,
    text: FileText,
    image: FileImage,
  };
  const colorMap = {
    pdf: "bg-red-500/30",
    code: "bg-green-500/30",
    text: "bg-blue-500/30",
    image: "bg-purple-500/30",
  };

  const Icon = iconMap[type];

  return (
    <div
      className="flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition-transform"
      onDoubleClick={onOpen}
    >
      <div
        className={`flex h-16 w-14 items-center justify-center rounded-md ${colorMap[type]} backdrop-blur-md shadow-md`}
      >
        <Icon className="h-8 w-8 text-white" />
      </div>
      <span className="text-[12px] text-white truncate w-14 text-center">
        {name}
      </span>
    </div>
  );
}
