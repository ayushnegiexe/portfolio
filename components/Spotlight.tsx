"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const options = [
  { label: "Resume", route: "/resume" },
  { label: "Projects", route: "/projects" },
  { label: "Skills", route: "/skills" },
  { label: "GitHub", route: "https://github.com/ayushnegiexe", external: true },
  { label: "LinkedIn", route: "https://linkedin.com/in/ayush-negi-exe", external: true },
];

export default function Spotlight() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isSpace = event.code === "Space" || event.key === " ";
      const isK = event.key.toLowerCase() === "k";
      if ((event.metaKey || event.ctrlKey) && (isSpace || isK)) {
        event.preventDefault();
        setOpen(!open);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const filtered = options.filter((opt) =>
    opt.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (opt: (typeof options)[number]) => {
    if (opt.external) {
      window.open(opt.route, "_blank");
    } else {
      router.push(opt.route);
    }
    setOpen(false);
    setQuery("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-2 right-4 px-3 py-1 bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-md shadow"
      >
        ⌘ Space
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-40 z-50">
          <div className="bg-white/70 dark:bg-zinc-900/80 backdrop-blur-md rounded-lg shadow-lg w-96 p-4">
            <input
              type="text"
              placeholder="Search portfolio..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setOpen(false);
                  setQuery("");
                }
                if (e.key === "Enter" && filtered.length > 0) {
                  handleSelect(filtered[0]);
                }
              }}
              className="w-full px-3 py-2 border rounded-md bg-transparent"
            />
            {query && (
              <div className="mt-2 border rounded-md overflow-hidden bg-white/80 dark:bg-zinc-800/80">
                {filtered.map((opt) => (
                  <div
                    key={opt.label}
                    onClick={() => handleSelect(opt)}
                    className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer"
                  >
                    {opt.label}
                  </div>
                ))}
                {filtered.length === 0 && (
                  <div className="px-3 py-2 text-gray-500">No results</div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}