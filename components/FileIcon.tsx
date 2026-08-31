"use client";

import { FileText, Code, FileImage } from "lucide-react";

export default function FileIcon({ name, type }: { name: string; type: "pdf" | "code" | "text" | "image" }) {
  const iconMap = {
    pdf: FileText,
    code: Code,
    text: FileText,
    image: FileImage,
  };
  const Icon = iconMap[type];

  return (
    <div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80">
      <div className="flex h-16 w-14 items-center justify-center rounded-md bg-white/10">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <span className="text-[12px] text-white truncate w-14 text-center">{name}</span>
    </div>
  );
}
