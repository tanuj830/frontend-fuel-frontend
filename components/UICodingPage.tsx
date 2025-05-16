"use client";

import React, { useState } from 'react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import QuestionDispScreen from '@/components/QuestionDispScreen';
import ReactCodeEditor from '@/components/ReactCodeEditor';
import ReactQuestionDispScreen from '@/components/ReactQuestionDispScreen';
import { useQuestion } from '@/hooks/useQuestion';
import Loader from './Loader';

const UICodingPage = ({ params }: any) => {
  const { question, loading, error } = useQuestion(params.slug);
  const [submitClicked, setSubmitClicked] = useState("initial");

  if (loading) return <Loader/>;
  if (error || !question) return <div>Question not found</div>;

  return (
    <div className='w-full  lg:p-6 bg-muted relative'>
    {/* mobile view */}
    <div className="flex flex-col  gap-5 lg:hidden ">
      <div>
        <QuestionDispScreen question={question} />
      </div>
      <div className='min-h-[50vh]'>
        <ReactCodeEditor  question={question}/>
      </div>
    </div>
    {/* pc view */}
    <div className='hidden lg:inline-block w-[100%] '>
      <ResizablePanelGroup
        direction="horizontal"
        className=" ">
        <ResizablePanel defaultSize={30} className='w-full h-full  border rounded-2xl  mr-1 bg-popover'>
          <ReactQuestionDispScreen question={question} submitClicked={submitClicked} />
        </ResizablePanel>
        <ResizableHandle className='hover:bg-primary' />
        <ResizablePanel defaultSize={70} className='rounded-2xl h-full '>
          <ReactCodeEditor question={question} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  </div>
  );
};

export default UICodingPage;
