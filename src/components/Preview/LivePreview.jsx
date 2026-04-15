import React, { useMemo } from 'react';

export default function LivePreview({ code }) {
  // Simple sandboxing for HTML/CSS preview
  const srcDoc = useMemo(() => `
    <html>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>body { font-family: sans-serif; padding: 20px; }</style>
      </head>
      <body>${code}</body>
    </html>
  `, [code]);

  return (
    <div className="h-[300px] bg-white rounded-lg border border-slate-200 overflow-hidden">
      <div className="bg-slate-100 px-4 py-2 border-b text-xs font-mono text-slate-500">
        LIVE PREVIEW
      </div>
      <iframe
        srcDoc={srcDoc}
        title="preview"
        sandbox="allow-scripts"
        className="w-full h-full"
      />
    </div>
  );
}