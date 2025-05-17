"use client";


import React, { useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient';
import Sidebar from '@/components/Sidebar';
import QuestionsLayout from '@/components/layouts/QuestionsLayout';
import JSCodingLayout from '@/components/layouts/JSCodingLayout';
import AlgoCodingLayout from '@/components/layouts/AlgoCodingLayout';
import UICodingLayout from '@/components/layouts/UICodingLayout';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import Navbar from '@/components/Navbar';
// import Sidebar from '@/components/Sidebar';


const Questions = () => {

    const [questions, setQuestions] = React.useState([])
    const [layout, setLayout] = React.useState("dashboard-layout")

    useEffect(() => {
        const fetchQuestions = async () => {
            const { data, error }:any = await supabase
              .from('questions')
              .select('*'); // specify columns or use * for all
      
            if (error) {
              console.error('Error fetching questions:', error);
            } else {
                console.log(data)
              setQuestions(data);
            }
          };
      
          fetchQuestions();
    }, [])

    return (
        <>
          <Navbar  layout={layout} setLayout={setLayout}/>
        <div className='lg:flex'>
            <div className='relative  min-w-[20vw] max-w-[20vw] w-[20vw] min-h-[70vh] border-r hidden lg:inline-block'>
            <Sidebar layout={layout} setLayout={setLayout}/>
            </div>

            {/* render layouts */}
            <div className='mt-20'>

            {
              layout === "questions-layout" ? <QuestionsLayout questions={questions}/> : 
              layout === "dashboard-layout" ? <DashboardLayout questions={questions}/> : 
              layout === "uicoding-layout" ? <UICodingLayout/> : 
              layout === "algocoding-layout" ? <AlgoCodingLayout/> : 
              layout === "jscoding-layout" ? <JSCodingLayout/> : null
            }
            </div>
        </div>
            </>
    )
}

export default Questions