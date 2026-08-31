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
      <Splash />
      <MenuBar onOpen={setActive} />
<StatusBar />   {/* no onSpotlight prop */}
<Finder active={active} onClose={() => setActive(null)} />
{children}
<Dock onOpen={setActive} />

    </>
  );
}
