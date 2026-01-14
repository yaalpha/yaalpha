'use client';
import React, { useState, useEffect } from 'react';

const Terminal = () => {
  const [lines, setLines] = useState<string[]>([]);
  const fullText = [
    "root@alpha:~$ status --current",
    "> System: Online",
    "> Target: Project_Luna",
    "> Progress: [||||||----] 65%",
    "> Status: Building something legendary..."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < fullText.length) {
        setLines(prev => [...prev, fullText[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black/40 rounded-2xl p-4 border border-white/5 font-mono text-[11px] text-gray-300 terminal-glow">
      <div className="flex gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-500/50" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
        <div className="w-2 h-2 rounded-full bg-green-500/50" />
      </div>
      <div className="space-y-1">
        {lines.map((line, i) => (
          <div key={i} className={i === 0 ? "text-white/80" : "text-gray-400"}>
            {line}
          </div>
        ))}
        <div className="w-2 h-4 bg-white/50 animate-pulse inline-block align-middle ml-1" />
      </div>
    </div>
  );
};

export default Terminal;