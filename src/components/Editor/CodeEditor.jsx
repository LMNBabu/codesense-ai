import React from 'react';
import Editor from '@monaco-editor/react';

export default function CodeEditor({ code, onChange, language = "javascript" }) {
  return (
    <div className="h-[400px] rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner">
      <Editor
        height="100%"
        defaultLanguage={language}
        theme="vs-dark"
        value={code}
        onChange={onChange}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          padding: { top: 16 },
          scrollBeyondLastLine: false,
        }}
      />
    </div>
  );
}