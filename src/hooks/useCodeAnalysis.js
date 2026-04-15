import { useState, useEffect } from 'react';
import { analyzeCode } from '../utils/analysisEngine';

export const useCodeAnalysis = (initialCode) => {
  const [code, setCode] = useState(initialCode);
  const [results, setResults] = useState({
    suggestions: [],
    scores: { quality: 100, uiux: 100, a11y: 100 },
    improvedCode: ''
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      const analysis = analyzeCode(code);
      setResults(analysis);
    }, 500);

    return () => clearTimeout(timeout);
  }, [code]);

  return { code, setCode, ...results };
};