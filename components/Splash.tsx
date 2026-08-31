"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Splash() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted || !loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-500 opacity-100">
      <div className="relative">
        <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl scale-150" />
        <Image
          src="/appleLogo.png"
          alt="Portfolio Logo"
          width={180}
          height={180}
          className="animate-pulse relative z-10"
        />
      </div>
    </div>
  );
}
