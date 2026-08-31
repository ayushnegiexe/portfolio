"use client";

import { useState } from "react";
import Dock from "@/components/Dock";
import Splash from "@/components/Splash";
import MenuBar from "@/components/MenuBar";
import Finder from "@/components/Finder";
import StatusBar from "@/components/StatusBar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      {/* Splash renders the background */}
      <Splash />

      {/* Menu bar at top */}
      <MenuBar onOpen={setActive} />

      {/* Status bar fixed to top-right */}
      <div className="fixed top-2 right-4 z-50">
        <StatusBar />
      </div>

      {/* Finder windows */}
      <Finder />


      {/* Page content */}
      {children}

      {/* Dock at bottom */}
      <Dock onOpen={setActive} />
    </>
  );
}
