"use client";

import Window from "@/components/Window";

export default function LexicalAnalyzerPage() {
  return (
    <main className="h-screen bg-transparent">
      <Window title="Lexical Analyzer">
        <div className="p-8 space-y-8 text-gray-900 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg">
          {/* Header */}
          <header className="border-b pb-4">
            <h1 className="text-2xl font-bold tracking-tight">Lexical Analyzer</h1>
            <p className="mt-2 text-sm text-gray-600">
              Academic compiler-design project built with Lex and C to tokenize source code into meaningful symbols.
            </p>
          </header>

          {/* Overview */}
          <section>
            <h2 className="text-lg font-semibold mb-2">Overview</h2>
            <p className="leading-relaxed">
              Developed a robust lexical analyzer that scans source code, identifies tokens such as keywords,
              identifiers, operators, and literals, and generates clean token streams for compiler processing.
              Enhanced error detection and syntactical validation for reliable compilation.
            </p>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-lg font-semibold mb-2">Tech Stack</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <ul className="list-disc list-inside">
                <li>Lex (Token Generator)</li>
                <li>C Programming</li>
              </ul>
              <ul className="list-disc list-inside">
                <li>Data Structures</li>
                <li>Compiler Design Concepts</li>
              </ul>
            </div>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-lg font-semibold mb-2">Key Features</h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Pattern matching for keywords and identifiers</li>
              <li>Error handling for invalid tokens</li>
              <li>Generation of token streams for parser input</li>
              <li>Validation of syntactical structures</li>
            </ul>
          </section>

          {/* View Project Button */}
          <div className="pt-4 border-t flex justify-end">
            <a
              href="https://github.com/yourusername/lexical-analyzer" // replace with your repo/demo link
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition"
            >
              🔗 View Project
            </a>
          </div>

          {/* Footer */}
          <footer className="pt-4 text-xs text-gray-500">
            <p>Developed by Ayush · Software Engineer @ Apple</p>
          </footer>
        </div>
      </Window>
    </main>
  );
}
