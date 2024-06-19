
import React, { useState, ChangeEvent } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './CodeEditor.css';

interface CodeEditorProps {
  language: string;
  initialCode: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ language, initialCode }) => {
  const [code, setCode] = useState<string>(initialCode);

  const handleCodeChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor">
      <div className='child1'>
      <textarea
        className="code-input"
        value={code}
        onChange={handleCodeChange}
        spellCheck="false"
      />
      </div>
      <div className=' child2'>
      <SyntaxHighlighter language={language} style={prism}>
        {code}
      </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeEditor;
