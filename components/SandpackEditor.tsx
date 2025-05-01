import { SandpackCodeEditor, useSandpack } from '@codesandbox/sandpack-react';
import React, { useEffect } from 'react'
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";

const SandpackEditor = ({file}:any) => {
    const { sandpack } = useSandpack();
    const { setActiveFile } = sandpack;

useEffect(()=>{
    localStorage.setItem("files", JSON.stringify(sandpack.files))
}, [sandpack.files])


useEffect(()=>{setActiveFile(file)},[file])

  return (
<>
{/* mobile view */}
<div className='inline-block lg:hidden h-full'>

 <SandpackCodeEditor
                    style={{ height: "100%", width:"92vw" , backgroundColor: "transparent"}}
                    className="h-full w-full overflow-x-auto "
                    extensions={[autocompletion()]}
                    
                    />
                    </div>
                    <div className='lg:inline-block hidden h-full w-full'>
      <SandpackCodeEditor
                    showTabs={true}
                    showLineNumbers
                    showInlineErrors
                    style={{ height: "100%" , backgroundColor: "transparent",}}
                    className="h-full "
                    extensions={[autocompletion()]}
                    
                    />
                    </div>
                    </>

  )
}

export default SandpackEditor
