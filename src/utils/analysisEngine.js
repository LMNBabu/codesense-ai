export const analyzeCode = (code) => {
  // Ensure code is a string to prevent crashes if editor is cleared
  const codeStr = code || '';
  const suggestions = [];
  let scores = { quality: 100, uiux: 100, a11y: 100 };

  // 1. Accessibility Checks
  // Catches <img> tags missing an alt= attribute anywhere inside them
  if (/<img\b(?![^>]*\balt=)[^>]*>/i.test(codeStr)) {
    suggestions.push({
      id: 'a11y-1',
      title: 'Missing Image Alt Text',
      description: 'Images without alt attributes are invisible to screen readers.',
      severity: 'high',
      recommendation: 'Add alt="description" to your <img> tags.',
      category: 'accessibility'
    });
    scores.a11y -= 30;
  }

  // Catches empty buttons or buttons missing aria-labels
  if (/<button\b[^>]*>\s*<\/button>/i.test(codeStr) && !/aria-label/i.test(codeStr)) {
    suggestions.push({
      id: 'a11y-2',
      title: 'Empty Button Label',
      description: 'Empty or icon-only buttons need aria-labels for screen readers.',
      severity: 'medium',
      recommendation: 'Add aria-label="Action name" to the button.',
      category: 'accessibility'
    });
    scores.a11y -= 20;
  }

  // 2. UI/UX Checks
  // Catches inline styles for both React (style={{}}) and HTML (style="")
  if (/style={{|style="/i.test(codeStr)) {
    suggestions.push({
      id: 'ui-1',
      title: 'Inline Styles Detected',
      description: 'Inline styles make UI maintenance difficult and hurt performance.',
      severity: 'medium',
      recommendation: 'Move styles to Tailwind classes or a CSS stylesheet.',
      category: 'uiux'
    });
    scores.uiux -= 25;
  }

  // 3. Code Quality Checks
  // Catches the exact word "var" (but not words like "variable")
  if (/\bvar\b/.test(codeStr)) {
    suggestions.push({
      id: 'qual-1',
      title: 'Legacy "var" Usage',
      description: '"var" has functional scope and can cause scoping bugs.',
      severity: 'high',
      recommendation: 'Replace "var" with "let" or "const".',
      category: 'quality'
    });
    scores.quality -= 30;
  }

  // Catches console.log statements
  if (/console\.log/.test(codeStr)) {
    suggestions.push({
      id: 'qual-2',
      title: 'Console Logs Left In Code',
      description: 'Console statements should be removed before pushing to production.',
      severity: 'low',
      recommendation: 'Remove console.log() statements.',
      category: 'quality'
    });
    scores.quality -= 15;
  }

  // 4. Generate "Improved" Code based on the regex hits
  let improvedCode = codeStr
    .replace(/\bvar\b/g, 'const') // Changes var to const
    .replace(/console\.log\([^)]*\);?/g, '') // Removes console.logs
    .replace(/<img\b(?![^>]*\balt=)([^>]*)>/gi, '<img alt="Optimized AI Fallback" $1>') // Injects alt tags
    .replace(/style={{[^}]*}}/g, 'className="optimized-tailwind-classes"'); // Replaces React inline styles

  return {
    suggestions,
    scores: {
      quality: Math.max(scores.quality, 0),
      uiux: Math.max(scores.uiux, 0),
      a11y: Math.max(scores.a11y, 0)
    },
    improvedCode
  };
};