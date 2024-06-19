
import React from 'react';
import './App.css';
import CodeEditor from './Component/CodeEditor';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Prodios Labs Assignment</h1>
      </header>
      <main>
        <CodeEditor language="javascript" initialCode="// Write your code here" />
      </main>
    </div>
  );
};

export default App;
