"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

export default function MenuBar({ onOpen }: { onOpen?: (app: string) => void }) {
  const [open, setOpen] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  const menus: Record<string, string[]> = {
    Apple: ["About Me", "Contact"],
    File: ["Download Resume"],
    Edit: ["Toggle Theme"],
    Help: ["Portfolio Guide"],
  };

  const handleItemClick = (item: string) => {
    if (item === "Toggle Theme") {
      setTheme(theme === "dark" ? "light" : "dark");
    } else {
      onOpen?.(item);
    }
    setOpen(null);
  };

  return (
    <nav
      role="menubar"
      className="fixed top-0 left-0 w-full h-8 bg-white/20 dark:bg-black/30 backdrop-blur-md flex items-center px-4 text-sm font-medium select-none z-40"
    >
      {Object.entries(menus).map(([menu, items]) => (
        <div
          key={menu}
          className="relative mr-6 cursor-pointer"
          onMouseEnter={() => setOpen(menu)}
          onMouseLeave={() => setOpen(null)}
          onClick={() => setOpen(open === menu ? null : menu)}
        >
          {menu}
          {open === menu && (
            <div
              role="menu"
              className="absolute left-0 mt-1 bg-white/90 dark:bg-zinc-900 shadow-lg rounded-md overflow-hidden"
            >
              {items.map((item) => (
                <div
                  key={item}
                  role="menuitem"
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer"
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
