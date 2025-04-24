// components/CodeEditor.tsx
import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import { Code, CornerUpLeft, Undo } from 'lucide-react';


  
const CodeEditor = ({quest, code, setCode}:any) => {
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState("vs-dark");
  const [question, setQuestion] = useState({} as any)

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || "")
  };

  useEffect(()=>{

        setCode(quest.starterCode)
        setQuestion(quest)
  },[quest])



  return (
    <div className="flex flex-col min-w-[25vw] rounded-xl  h-full ">
      {/* Header */}
      <div className="flex justify-between items-center p-3">
        <div className="flex justify-between items-center  w-full">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
          >
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
          </select>

        <div className='flex items-center gap-3'>

          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
            >
            <option value="dracula">Dracula</option>
            <option value="vs-dark">VS Dark</option>
            <option value="light">Light</option>
          </select>
            <button className='text-muted-foreground cursor-pointer' onClick={()=>setCode(quest?.starterCode || "")}><Undo width={20} height={20}/></button>
              </div>
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 overflow-hidden border-t w-full">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          value={code}
          language={language}
          theme={theme}
          onChange={handleEditorChange}
          options={{
            fontSize: 12,
            fontWeight:"500",
fontFamily: "Fira Code, monospace",
            lineHeight: 20,
            minimap: { enabled: false },
            wordWrap: 'on',
            scrollBeyondLastLine: false,
            automaticLayout: true,
            renderLineHighlight: 'line',
            tabSize: 2,
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
