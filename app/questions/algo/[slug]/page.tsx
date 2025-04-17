"use client";

import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios';
import CodeEditor from '@/components/CodeEditor';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import QuestionDispScreen from '@/components/QuestionDispScreen';
import TestCases from '@/components/TestCases';
import { BASE_URL } from '@/lib/utils';


const page = () => {

  const [question, setQuestion] = React.useState({} as any)
console.log(question)
  const params = useParams()

  useEffect(() => {
    axios.get(`${BASE_URL}/api/questions`).then(res => {
      const quest = res.data.find((quest: any) => quest.id === params.slug);
      if (quest) setQuestion(quest)

      else alert("No question found...try solving other question")
    })
  }, [params.slug])
  return (
    <div className='w-full  lg:p-6'>

{/* mobile view */}
<div
        className="flex flex-col  gap-5 lg:hidden"
      >
        <div>

          <QuestionDispScreen question={question} />
        </div>

<div className='h-[60vh]'>

          <CodeEditor quest={question} />
</div>

  <div className='pb-20'>
        <TestCases question={question} setQuestion={setQuestion} />
    </div>      
      </div>

{/* pc view */}
<div className='hidden lg:inline-block'>

      <ResizablePanelGroup
        direction="horizontal"
        className=" rounded-lg border"
        >
        <ResizablePanel defaultSize={60} className='h-full'>
          {/* question disp screen */}
          <QuestionDispScreen question={question} />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={60}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              {/* code editor screen */}
              <CodeEditor quest={question} />
            </ResizablePanel>
            <ResizableHandle className='' />
            <ResizablePanel defaultSize={10}>
              <TestCases question={question} setQuestion={setQuestion} />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
        </div>
    </div>
  )
}

export default page
