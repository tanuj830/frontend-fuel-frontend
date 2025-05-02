"use client";

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CodeEditor from '@/components/CodeEditor';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import QuestionDispScreen from '@/components/QuestionDispScreen';
import TestCases from '@/components/TestCases';
import { BASE_URL } from '@/lib/utils';
import { useQuestion } from '@/hooks/useQuestion';


const AlgoCodingPage = ({renderingInHomepage, params}:any) => {


  const [code, setCode] = React.useState("")

  const [testCaseWindowHeight, setTestCaseWindowHeight] = useState(10)
  // this state is of TestCases.tsx component
  const [submitClicked, setSubmitClicked] = React.useState("initial") // initial, loading, showResults, failed
  
  
  const { question, loading, error } = useQuestion(params.slug);
  useEffect(()=>{
    if(error)alert("Something went wrong...")

    },[params])


  useEffect(()=>{setTestCaseWindowHeight(0)}, [testCaseWindowHeight])


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

          <CodeEditor question={question} code={code} setCode={setCode} />
</div>

  <div className='pb-20'>
        <TestCases renderingInHomepage={renderingInHomepage} disableTestcaseHeight={true} question={question} code={code} submitClicked={submitClicked} setSubmitClicked={setSubmitClicked}/>
    </div>      
      </div>

{/* pc view */}
<div className='hidden lg:inline-block w-[100%] '>

      <ResizablePanelGroup
        direction="horizontal"
        className=""
        >
        <ResizablePanel defaultSize={50}  className='w-full h-full bg-muted/50 rounded-2xl  mr-1'>
          {/* question disp screen */}
          <QuestionDispScreen  question={question} submitClicked={submitClicked}/>
        </ResizablePanel>
        <ResizableHandle className='hover:bg-primary'/>
        <ResizablePanel defaultSize={50} className='ml-1'>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25} className='rounded-2xl  mb-1 bg-muted/50'>
              {/* code editor screen */}
              <CodeEditor question={question} code={code} setCode={setCode}/>
            </ResizablePanel>
            <ResizableHandle className='hover:bg-primary' />
            <ResizablePanel minSize={testCaseWindowHeight} defaultSize={10} className='rounded-2xl mt-1  bg-muted/50 '>
              <TestCases renderingInHomepage={renderingInHomepage} disableTestcaseHeight={false} question={question}  code={code} setTestCaseWindowHeight={setTestCaseWindowHeight} submitClicked={submitClicked} setSubmitClicked={setSubmitClicked}/>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
        </div>
    </div>
  )
}

export default AlgoCodingPage
