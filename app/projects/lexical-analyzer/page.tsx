"use client";

import Window from "@/components/Window";

export default function LexicalAnalyzerPage() {
  return (
    <main className="h-screen bg-transparent">
      <Window title="Lexical Analyzer">
        <div className="p-6 space-y-6 text-sm text-gray-800">
          <h1 className="text-xl font-bold">Lexical Analyzer</h1>
          <p>
            Engineered a pattern-matching lexical analyzer using Lex to scan source code and extract tokens,
            including keywords, identifiers, and operators.
          </p>

          <h2 className="font-semibold">Tech Stack</h2>
          <ul className="list-disc list-inside">
            <li>Lex</li>
            <li>C</li>
            <li>Data Structures</li>
          </ul>

          <h2 className="font-semibold">Highlights</h2>
          <ul className="list-disc list-inside">
            <li>Error handling mechanisms</li>
            <li>Validated syntactical structures</li>
            <li>Generated clean token streams for compiler processing</li>
          </ul>
        </div>
      </Window>
    </main>
  );
}
