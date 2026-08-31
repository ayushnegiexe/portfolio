import Window from "@/components/Window";
import Image from "next/image";

export default function ResumePage() {
  return (
    <main className="h-screen">
      <Window title="Resume">
        <div className="divide-y divide-gray-200">
          {/* Profile */}
          <div className="flex items-center gap-3 py-3">
            <Image src="/profile.png" alt="Profile" width={32} height={32} />
            <div>
              <p className="font-semibold">Ayush</p>
              <p className="text-sm text-gray-600">Software Engineer @ Apple | Full‑Stack Developer</p>
            </div>
          </div>

          {/* Experience */}
          <div className="flex items-center gap-3 py-3">
            <Image src="/experience.png" alt="Experience" width={32} height={32} />
            <div>
              <p className="font-semibold">Experience</p>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>Apple — Frontend UI + Auth systems</li>
                <li>Copilot — Algorithm optimization</li>
                <li>Full‑stack developer — MERN stack</li>
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div className="flex items-center gap-3 py-3">
            <Image src="/skills.png" alt="Skills" width={32} height={32} />
            <div>
              <p className="font-semibold">Skills</p>
              <p className="text-sm text-gray-700">React, Next.js, Node.js, Python, C, TailwindCSS</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-3 py-3">
            <Image src="/contact.png" alt="Contact" width={32} height={32} />
            <div>
              <p className="font-semibold">Contact</p>
              <p className="text-sm text-gray-700">📧 ayush@example.com · 🔗 github.com/ayush · 💼 linkedin.com/in/ayush</p>
            </div>
          </div>
        </div>
      </Window>
    </main>
  );
}
