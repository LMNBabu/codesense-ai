import React, { useState } from 'react';
import { useCodeAnalysis } from './hooks/useCodeAnalysis';
import Header from './components/Layout/Header';
import ScoreCard from './components/Analysis/ScoreCard';
import CodeEditor from './components/Editor/CodeEditor';
import SuggestionList from './components/Analysis/SuggestionList';
import LivePreview from './components/Preview/LivePreview';
import Editor from '@monaco-editor/react';
import { Sparkles, Code2, Layout, Eye } from 'lucide-react';

const INITIAL_CODE = `
<div style="padding: 20px">
  <h1>Welcome to CodeSense</h1>
  <img src="https://via.placeholder.com/150">
  <button onclick="alert('Hello')">Click Me</button>
  
  <script>
    var message = "Reviewing code...";
    console.log(message);
  </script>
</div>
`;

export default function App() {
  const { code, setCode, suggestions, scores, improvedCode } = useCodeAnalysis(INITIAL_CODE);
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <Header isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
        
        <main className="max-w-7xl mx-auto px-4 py-8">
          <ScoreCard scores={scores} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            {/* Left: Input Editor */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-3 font-medium">
                <Code2 size={18} className="text-brand-500" />
                <span>Input Source Code</span>
              </div>
              <CodeEditor code={code} onChange={setCode} />
            </div>

            {/* Right: Suggestions */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-3 font-medium">
                <Sparkles size={18} className="text-amber-500" />
                <span>AI Insights</span>
              </div>
              <SuggestionList suggestions={suggestions} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Bottom Left: Live Preview */}
            <section>
              <div className="flex items-center gap-2 mb-3 font-medium">
                <Eye size={18} className="text-emerald-500" />
                <span>Visual Sandbox</span>
              </div>
              <LivePreview code={code} />
            </section>

            {/* Bottom Right: Improved Code */}
            <section>
              <div className="flex items-center gap-2 mb-3 font-medium">
                <Layout size={18} className="text-purple-500" />
                <span>Improved Version</span>
              </div>
              <div className="h-[300px] rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800">
                <Editor
                  height="100%"
                  defaultLanguage="javascript"
                  theme="vs-dark"
                  value={improvedCode}
                  options={{ readOnly: true, minimap: { enabled: false } }}
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}