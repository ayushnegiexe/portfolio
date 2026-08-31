import Window from "@/components/Window";
import Image from "next/image";

export default function SkillsPage() {
  return (
    <main className="h-screen">
      <Window title="Skills">
        <div className="grid grid-cols-3 gap-6 p-4">
          <Image src="/react.png" alt="React" width={48} height={48} />
          <Image src="/nextjs.png" alt="Next.js" width={48} height={48} />
          <Image src="/node.png" alt="Node.js" width={48} height={48} />
          <Image src="/python.png" alt="Python" width={48} height={48} />
          <Image src="/C.png" alt="C" width={48} height={48} />
          <Image src="/tailwind.png" alt="TailwindCSS" width={48} height={48} />
        </div>
      </Window>
    </main>
  );
}
