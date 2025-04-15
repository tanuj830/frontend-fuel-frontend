"use client";

import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios';
import CodeEditor from '@/components/CodeEditor';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import QuestionDispScreen from '@/components/QuestionDispScreen';
import LivePreviewEditor from '@/components/LivePreviewEditor';


const page = () => {

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
    <div className='w-full h-[95vh] p-6 overflow-y-auto'>

      <ResizablePanelGroup
        direction="horizontal"
        className=" rounded-lg border min-h-[90vh] "
      >
        <ResizablePanel defaultSize={60} className=''>
          {/* question disp screen */}
          <QuestionDispScreen question={question} />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={60}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              {/* code editor screen */}
              <LivePreviewEditor />
            </ResizablePanel>
            <ResizableHandle className='' />
            <ResizablePanel defaultSize={10}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default page
