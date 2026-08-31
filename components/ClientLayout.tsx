"use client";

import { useState } from "react";
import Dock from "@/components/Dock";
import Splash from "@/components/Splash";
import MenuBar from "@/components/MenuBar";
import Spotlight from "@/components/Spotlight";
import Finder from "@/components/Finder";
import StatusBar from "@/components/StatusBar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<string | null>(null);
  const [spotlightOpen, setSpotlightOpen] = useState(false);

  return (
    <>
      <Splash />
      <MenuBar onOpen={setActive} />
      <StatusBar onSpotlight={() => setSpotlightOpen(true)} />
      <Spotlight open={spotlightOpen} onClose={() => setSpotlightOpen(false)} />
      <Finder active={active} onClose={() => setActive(null)} />
      {children}
      <Dock onOpen={setActive} />
    </>
  );
}
