import Window from "@/components/Window";

export default function Home() {
  return (
    <main className="h-screen">
      <Window title="Resume">
        <p>
          Software Engineer at Apple. Skilled in React, Next.js, Tailwind, OAuth, and algorithm design.
        </p>
      </Window>

      <Window title="Projects">
        <ul className="list-disc pl-5">
          <li>MacOS Portfolio Site</li>
          <li>College Discovery App</li>
          <li>Algorithm Optimizer</li>
        </ul>
      </Window>

      <Window title="Skills">
        <p>
          JavaScript, TypeScript, React, Node.js, Python, C, Jest, NextAuth
        </p>
      </Window>
    </main>
  );
}
