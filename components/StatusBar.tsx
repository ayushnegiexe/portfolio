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
    })
    .replace("AM", "AM")
    .replace("PM", "PM");
  return `${weekday} ${day} ${month}\u00a0\u00a0${time}`;
}
function BatteryGlyph({ percent }: { percent: number }) {
  const fillWidth = Math.max(1.2, (percent / 100) * 8.2);
  return (
    <svg viewBox="0 0 16 10" className="h-3 w-[18px]" aria-hidden="true">
      <rect x="0.6" y="1.2" width="12.4" height="7.6" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <rect x="12.8" y="3.4" width="1.6" height="3.2" rx="0.4" fill="currentColor" />
      <rect x="1.8" y="2.5" width={fillWidth} height="5" rx="0.6" fill="currentColor" />
    </svg>
  );
}
function ControlCenterGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
      <rect x="1.2" y="1.2" width="6.2" height="6.2" rx="1.4" fill="currentColor" />
      <rect x="8.6" y="1.2" width="6.2" height="6.2" rx="1.4" fill="currentColor" opacity="0.85" />
      <rect x="1.2" y="8.6" width="6.2" height="6.2" rx="1.4" fill="currentColor" opacity="0.85" />
      <rect x="8.6" y="8.6" width="6.2" height="6.2" rx="1.4" fill="currentColor" />
    </svg>
  );
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
    const nav = navigator as Navigator & {
      getBattery?: () => Promise<{
        level: number;
        addEventListener: (type: string, listener: () => void) => void;
        removeEventListener: (type: string, listener: () => void) => void;
      }>;
    };
    if (!nav.getBattery) {
      setBattery(100);
      return;
    }
    let batteryRef: Awaited<ReturnType<NonNullable<typeof nav.getBattery>>> | null = null;
    const sync = () => {
      if (batteryRef) setBattery(Math.round(batteryRef.level * 100));
    };
    nav.getBattery().then((b) => {
      batteryRef = b;
      sync();
      b.addEventListener("levelchange", sync);
    });
    return () => {
      batteryRef?.removeEventListener("levelchange", sync);
    };
  }, []);
  const iconBtn =
    "flex h-7 items-center justify-center rounded-sm px-1.5 text-white/95 hover:bg-white/15";
  return (
    <div className="ml-auto flex h-7 items-center pr-1 text-[13px] font-medium tracking-tight text-white">
      <button type="button" className={iconBtn} title="Control Centre" aria-label="Control Centre">
        <ControlCenterGlyph />
      </button>
      <button type="button" className={iconBtn} title="Wi-Fi: Connected" aria-label="Wi-Fi">
        <Wifi className="h-3.5 w-3.5" strokeWidth={2.2} />
      </button>
      <button type="button" className={iconBtn} title="Bluetooth: On" aria-label="Bluetooth">
        <Bluetooth className="h-3.5 w-3.5" strokeWidth={2.2} />
      </button>
      <button
        type="button"
        className={`${iconBtn} gap-1`}
        title={battery != null ? `Battery: ${battery}%` : "Battery"}
        aria-label={battery != null ? `Battery ${battery} percent` : "Battery"}
      >
        <BatteryGlyph percent={battery ?? 80} />
        {battery != null && <span className="text-[12px] tabular-nums leading-none">{battery}%</span>}
      </button>
      <button type="button" className={iconBtn} title="Sound" aria-label="Sound">
        <Volume2 className="h-3.5 w-3.5" strokeWidth={2.2} />
      </button>
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