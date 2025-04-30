"use client";

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import QuestionDispScreen from '@/components/QuestionDispScreen';;
import withAuth from "@/lib/withAuth";
import ReactCodeEditor from '@/components/ReactCodeEditor';
import ReactQuestionDispScreen from '@/components/ReactQuestionDispScreen';
import { BASE_URL } from '@/lib/utils';


const UICodingPage = ({featuredQuestion,params}:any) => {

  const [question, setQuestion] = React.useState({} as any)
  const [code, setCode] = React.useState("")
  const [testCaseWindowHeight, setTestCaseWindowHeight] = useState(10)
  // this state is of TestCases.tsx component
  const [submitClicked, setSubmitClicked] = React.useState("initial") // initial, loading, showResults, failed

 
  useEffect(() => {

    if(params === "")setQuestion(featuredQuestion)
        else{
    // axios.get("/api/questions").then(res => {
        axios.get(`${BASE_URL}/api/questions`).then(res=>{
            setQuestion(res.data.filter((d: any) => d.id === params.slug)[0])
        })
    }
  }, [params])

  return (


    <div className='w-full  lg:p-6 bg-muted relative'>
      {/* mobile view */}
      <div className="flex flex-col  gap-5 lg:hidden ">
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
          <ResizablePanel defaultSize={30} className='w-full h-full  border rounded-2xl  mr-1 bg-popover'>
            {/* question disp screen */}
            <ReactQuestionDispScreen question={question} submitClicked={submitClicked} />
          </ResizablePanel>
          <ResizableHandle className='hover:bg-primary' />


          <ResizablePanel defaultSize={70} className='rounded-2xl h-full '>
            {/* code editor screen */}
            <ReactCodeEditor />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>

  )
}

export default UICodingPage
