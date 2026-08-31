"use client";
import { useEffect, useState } from "react";
import { Bluetooth, Search, Volume2, Wifi } from "lucide-react";

function formatMenuClock(date: Date) {
  const weekday = date.toLocaleDateString("en-GB", { weekday: "short" });
  const day = date.getDate();
  const month = date.toLocaleDateString("en-GB", { month: "short" });
  const time = date
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  return `${weekday} ${day} ${month}\u00a0\u00a0${time}`;
}

export default function StatusBar({ onSpotlight }: { onSpotlight?: () => void }) {
  const [now, setNow] = useState<Date | null>(null);
  const [battery, setBattery] = useState<number | null>(null);

  useEffect(() => {
    setNow(new Date());
    const tick = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(tick);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isSpace = event.code === "Space" || event.key === " ";
      if ((event.metaKey || event.ctrlKey) && isSpace) {
        event.preventDefault();
        onSpotlight?.();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onSpotlight]);

  const iconBtn =
    "flex h-7 items-center justify-center rounded-sm px-1.5 text-white/95 hover:bg-white/15";

  return (
    <div className="ml-auto flex h-7 items-center pr-1 text-[13px] font-medium tracking-tight text-white">
      {/* other buttons */}
      <button
        type="button"
        className={iconBtn}
        title="Spotlight Search (⌘ Space)"
        aria-label="Open Spotlight"
        onClick={() => onSpotlight?.()}
      >
        <Search className="h-3.5 w-3.5" strokeWidth={2.2} />
      </button>
      <time
        className="flex h-7 items-center px-2 tabular-nums"
        dateTime={now?.toISOString()}
        suppressHydrationWarning
      >
        {now ? formatMenuClock(now) : "\u00a0"}
      </time>
    </div>
  );
}
