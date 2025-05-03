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
            <div className='relative w-[25vw] min-h-[70vh] border-r hidden lg:inline-block'>
            <Sidebar layout={layout} setLayout={setLayout}/>
            </div>

            {/* render layouts */}
            {
                layout === "questions-layout" ? <QuestionsLayout questions={questions}/> : 
                layout === "dashboard-layout" ? <DashboardLayout questions={questions}/> : 
                layout === "uicoding-layout" ? <UICodingLayout/> : 
                layout === "algocoding-layout" ? <AlgoCodingLayout/> : 
                layout === "jscoding-layout" ? <JSCodingLayout/> : null
            }
        </div>
            </>
    )
}

export default Questions



// Remove "use client"; it's not needed for SSR pages
// import { supabase } from '@/lib/supabaseClient';
// import Sidebar from '@/components/Sidebar';
// import QuestionsLayout from '@/components/layouts/QuestionsLayout';
// import JSCodingLayout from '@/components/layouts/JSCodingLayout';
// import AlgoCodingLayout from '@/components/layouts/AlgoCodingLayout';
// import UICodingLayout from '@/components/layouts/UICodingLayout';
// import DashboardLayout from '@/components/layouts/DashboardLayout';
// import Navbar from '@/components/Navbar';
// import React, { useState } from 'react';

// export default function Questions({ initialQuestions }:any) {
//   const [questions, setQuestions] = useState(initialQuestions);
//   const [layout, setLayout] = useState("dashboard-layout");

//   return (
//     <>
//       <Navbar layout={layout} setLayout={setLayout} />
//       <div className='lg:flex'>
//         <div className='relative w-[25vw] min-h-[70vh] border-r hidden lg:inline-block'>
//           <Sidebar layout={layout} setLayout={setLayout} />
//         </div>

//         {/* Render layouts */}
//         {
//           layout === "questions-layout" ? <QuestionsLayout questions={questions} /> :
//           layout === "dashboard-layout" ? <DashboardLayout questions={questions} /> :
//           layout === "uicoding-layout" ? <UICodingLayout /> :
//           layout === "algocoding-layout" ? <AlgoCodingLayout /> :
//           layout === "jscoding-layout" ? <JSCodingLayout /> : null
//         }
//       </div>
//     </>
//   );
// }

// // 🔽 Fetching data on the server side
// export async function getServerSideProps() {
//   const { data, error } = await supabase
//     .from('questions')
//     .select('*');

//   if (error) {
//     console.error('Error fetching questions:', error);
//     return { props: { initialQuestions: [] } };
//   }

//   return {
//     props: {
//       initialQuestions: data,
//     },
//   };
// }
