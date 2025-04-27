"use client";

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import axios from 'axios';
import CodeEditor from '@/components/CodeEditor';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import QuestionDispScreen from '@/components/QuestionDispScreen';
import TestCases from '@/components/TestCases';
import { BASE_URL } from '@/lib/utils';
import withAuth from "@/lib/withAuth";
import { LiveEditor, LivePreview, LiveProvider } from 'react-live';
import ReactCodeEditor from '@/components/ReactCodeEditor';
import { Sandpack, SandpackProvider } from "@codesandbox/sandpack-react";
import ReactQuestionDispScreen from '@/components/ReactQuestionDispScreen';


const page = ({query}:any) => {

  const [question, setQuestion] = React.useState({} as any)
  const [code, setCode] = React.useState("")
  const [testCaseWindowHeight, setTestCaseWindowHeight] = useState(10)
  // this state is of TestCases.tsx component
  const [submitClicked, setSubmitClicked] = React.useState("initial") // initial, loading, showResults, failed

  const params = useParams()
  useEffect(()=>{

    axios.get("/api/questions").then(res=>{
    // axios.get(`${BASE_URL}/api/questions`).then(res=>{
      setQuestion(res.data.filter((d:any)=>d.id === params.slug)[0])
    })
  },[])

console.log(question)
  return (


    <div className='w-full  lg:p-6 bg-muted'>

{/* mobile view */}
<div
        className="flex flex-col  gap-5 lg:hidden "
        >
        <div>

          <QuestionDispScreen question={question} />
        </div>

<div className='min-h-[50vh]'>

          <ReactCodeEditor  />
</div>
   
      </div>

{/* pc view */}
<div className='hidden lg:inline-block w-[100%] '>

      <ResizablePanelGroup
        direction="horizontal"
        className=" "
        >
        <ResizablePanel defaultSize={30}  className='w-full h-full  border rounded-2xl  mr-1 bg-popover'>
          {/* question disp screen */}
          {/* <LiveEditor /> */}
          <ReactQuestionDispScreen  question={question} submitClicked={submitClicked}/>
        </ResizablePanel>
        <ResizableHandle className='hover:bg-primary'/>


            <ResizablePanel defaultSize={70} className='rounded-2xl h-full '>
              {/* code editor screen */}
             
              <ReactCodeEditor />
            </ResizablePanel>
            {/* <ResizableHandle className='hover:bg-primary' />
            <ResizablePanel minSize={testCaseWindowHeight} defaultSize={30} className='rounded-2xl mt-1  bg-muted/50 '>
            <LivePreview />
              <TestCases question={question} setQuestion={setQuestion} code={code} setTestCaseWindowHeight={setTestCaseWindowHeight} submitClicked={submitClicked} setSubmitClicked={setSubmitClicked}/>
            </ResizablePanel> */}

      </ResizablePanelGroup>
        </div>
    </div>

  )
}

export default withAuth(page)
