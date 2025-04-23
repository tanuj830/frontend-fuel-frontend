"use client";

import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import axios from 'axios';
import CodeEditor from '@/components/CodeEditor';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import QuestionDispScreen from '@/components/QuestionDispScreen';
import TestCases from '@/components/TestCases';
import { BASE_URL } from '@/lib/utils';
import withAuth from "@/lib/withAuth";


const page = () => {

  const [question, setQuestion] = React.useState({} as any)
  const [code, setCode] = React.useState("")

  const params = useParams()

  useEffect(() => {
    // axios.get(`http://localhost:8080/api/questions/`+params.slug).then(res => {
      axios.get(`${BASE_URL}/api/questions/`+params.slug).then(res => {
      if (res.data){
        console.log(res.data, "222")
        setQuestion(res.data)

      } 

      else alert("No question found...try solving other question")
    })
  }, [params.slug])


  const router = useRouter()
 const verifyUser = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/users/verify`, {
      withCredentials: true,
    });

    if (!res.data || !res.data.username) {
      router.push('/sign-in');
    }
  } catch (err) {
    router.push('/sign-in');
  }
};

useEffect(()=>{
  verifyUser()
}, [])

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

          <CodeEditor quest={question} code={code} setCode={setCode} />
</div>

  <div className='pb-20'>
        <TestCases question={question} setQuestion={setQuestion} code={code} />
    </div>      
      </div>

{/* pc view */}
<div className='hidden lg:inline-block w-[100%] overflow-hidden'>

      <ResizablePanelGroup
        direction="horizontal"
        className=" rounded-lg border"
        >
        <ResizablePanel defaultSize={60} className='w-full h-full'>
          {/* question disp screen */}
          <QuestionDispScreen question={question} />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={40}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              {/* code editor screen */}
              <CodeEditor quest={question} code={code} setCode={setCode}/>
            </ResizablePanel>
            <ResizableHandle className='' />
            <ResizablePanel defaultSize={10}>
              <TestCases question={question} setQuestion={setQuestion} code={code}/>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
        </div>
    </div>
  )
}

export default withAuth(page)
