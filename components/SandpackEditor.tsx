import { SandpackCodeEditor, useSandpack } from '@codesandbox/sandpack-react';
import React, { useEffect } from 'react'

const SandpackEditor = ({file}:any) => {
    const { sandpack } = useSandpack();
    const { setActiveFile } = sandpack;

useEffect(()=>{
    
    const savedCode = localStorage.getItem("codezz") || ""
    if(savedCode.length > 1){

        setTimeout(()=>{
            localStorage.setItem("codezz", JSON.stringify(sandpack.files))
        }, 2000)
    }
}, [sandpack.files])


useEffect(()=>{setActiveFile(file)},[file])

  return (

      <SandpackCodeEditor
                    showTabs
                    showLineNumbers
                    showInlineErrors
                    style={{ height: "100%" , backgroundColor: "transparent"}}
                    className="h-full"
                    // extensions={[autocompletion()]}

                  />

  )
}

export default SandpackEditor
