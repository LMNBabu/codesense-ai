import React from 'react';
import { DiffEditor } from '@monaco-editor/react';

export default function DiffViewer({ originalCode, modifiedCode, language = "javascript" }) {
  return (
    <div className="h-[400px] rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner">
      <DiffEditor
        height="100%"
        language={language}
        theme="vs-dark"
        original={originalCode}
        modified={modifiedCode}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          renderSideBySide: true,
          readOnly: true,
          padding: { top: 16 }
        }}
      />
    </div>
  );
}