export const codeTemplates = {
  html: `<div style="padding: 20px; background: #fff;">
  <h1>Welcome to CodeSense</h1>
  <img src="https://via.placeholder.com/150">
  <button onclick="alert('Hello')">Click Me</button>
  
  <script>
    var message = "Reviewing code...";
    console.log(message);
  </script>
</div>`,

  react: `// Bad React Example
import React, { useState } from 'react';

export default function App() {
  var count = 0;
  
  return (
    <div style={{ padding: '20px' }}>
      <img src="/logo.png" />
      <button onClick={() => count++}>
        Click me
      </button>
    </div>
  );
}`
};