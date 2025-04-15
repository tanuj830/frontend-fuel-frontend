"use client";

import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios';
import CodeEditor from '@/components/CodeEditor';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';


const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const [question, setQuestion] = React.useState({} as any)

  const params = useParams()

  useEffect(() => {
    axios.get("/api/challenges").then(res => {
      const quest = res.data.find((quest: any) => quest.id === params.slug);
      if (quest) setQuestion(quest)
       
      else alert("No question found...try solving other question")
    })
  }, [params.slug])

  return (
    <div className='p-6'>


<ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded-lg border md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          {/* question description screen */}
        <div className='w-[50%]'>
          {question.title}
        </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              {/* code editor screen */}
        <div className='w-[50%]'>
          <CodeEditor quest={question}/>
        </div>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>







     
      
      {children}
    
    </div>
  )
}

export default layout
