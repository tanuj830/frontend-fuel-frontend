"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import QuestionsPlayground from '@/components/QuestionsPlayground'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { BASE_URL } from '@/lib/utils';
import axios from 'axios'
import { ArrowDown01, ArrowRight, BadgeCheck, PanelTop, Search, Sheet, TestTube } from 'lucide-react'
import { supabase } from '@/lib/supabaseClient'
import Link from 'next/link'

const CheatSheetLayout = ({questions}:any) => {

    const [cheatsheets, setCheatsheets] = React.useState([] as any)
    const [cheatsheet, setCheatsheet] = React.useState({} as any)
    const [showCheatsheet, setShowCheatsheet] = React.useState(false)

    React.useEffect(() => {
        const fetchQuestion = async () => {
          const { data, error } = await supabase
            .from('cheatsheet')
            .select('*')

            if (error) {
                console.error('Error fetching questions:', error);
              } else {
                  setCheatsheets(data)
                }
        };

        fetchQuestion()
      }, []);


      const handleShowCheatsheet = (cheatsheetObj:any) => {
        
        setCheatsheet(cheatsheetObj);
        setShowCheatsheet(true)
        console.log(cheatsheetObj)
      }
  return (
    <>
    {
      showCheatsheet ?
      // displaying specific cheatsheet
      <div className='p-6 lg:p-14'>
      <div>
          <div>

          <h6 className='text-2xl lg:text-3xl font-bold leading-16'>{cheatsheet.title}</h6>
          <span className='leading-1 text-muted-foreground font-semibold text-sm lg:text-md'>{cheatsheet.description}</span>
          </div>
          <div className='mt-10 flex flex-col gap-10'>
              {
                  cheatsheet?.data.sections.map((question:any, ind:number)=>(
                      <div className='' key={ind}>
                          <div className='flex flex-row lg:gap-3 gap-1 text-nowrap lg:text-lg font-semibold'>
                              <span>{ind+1}. </span>
                              <span>{question.title}</span>
                          </div>
                          <div className='pt-2 lg:pt-4'>
                              <div id='disp' dangerouslySetInnerHTML={{__html:question.content}}/>
                          </div>

                      </div>
                  ))
              }
          </div>
      </div>
</div>
      :
      // displaying all cheatsheet
      <div className='p-6 lg:p-14'>
      <div>
          <h1 className='text-2xl lg:text-3xl font-bold leading-16'>Cheatsheets</h1>
          <span className='leading-1 text-muted-foreground font-semibold text-sm lg:text-md'>The largest question bank of {questions?.length}+ practice questions for front end interviews
          </span>
      </div>
      <div className='flex items-center flex-wrap  gap-5 my-5 text-muted-foreground text-sm w-full'>
          <div className='flex items-center w-fit gap-2 whitespace-nowrap'>
              <BadgeCheck />
              <span>Solved by developers</span>
          </div>
          <div className='flex items-center w-fit gap-2'>
              <TestTube />
              <span>Test cases</span>
          </div>
          <div className='flex items-center w-fit gap-2'>
              <PanelTop />
              <span>Code in browser</span>
          </div>
      </div>
      <Separator />
      <div className='lg:w-[72%] py-10 text-muted-foreground text-sm lg:text-md'>
          Save the trouble of searching the web for front end interview questions. We have 500+ practice questions in every framework, format, and topic, each with high quality answers and tests from big tech senior / staff engineers.
      </div>
      {/* cheatsheets playground for showing all cheatsheets */}
      <div className="flex flex-col">
{cheatsheets.map((cheatsheet:any) => (
  <div className='hover:bg-gradient-to-r from-orange-500 to-pink-600 p-[1.5px] rounded-lg lg:w-[50vw]' key={cheatsheet.id}>


  <div
  onClick={()=>handleShowCheatsheet(cheatsheet)}
    key={cheatsheet.id}
    className="w-full border flex items-center gap-3 lg:gap-5 p-3 lg:p-5 bg-muted rounded-lg hover:border hover:border-"
  >
    <div>
      <button className="text-muted-foreground">
        <Sheet width={30} height={30} />
      </button>
    </div>
    <div className="min-w-[73%] max-w-[73%] lg:min-w-[85%] lg:max-w-[85%]">
      <h6>{cheatsheet.title}</h6>
      <p className="truncate text-muted-foreground text-sm pt-2 lg:py-3">
        {cheatsheet.description}
      </p>
      {/* <div className="flex lg:items-center flex-col lg:flex-row text-xs text-muted-foreground gap-3 lg:gap-7 mt-2">
        <div className="flex items-center gap-7">
          <div>

          {categoryLoading ? (
            <span>Loading category...</span>
          ) : (
            <span className="whitespace-nowrap">{categories[question.category_id] || 'Unknown'}</span>
          )}
          </div>
          <div className='flex gap-2 items-center'>

          <Flame width={21} height={21} />
          {question.difficulty === 'easy' ? (
            <span className="capitalize text-green-600 font-semibold">{question.difficulty}</span>
          ) : question.difficulty === 'medium' ? (
            <span className="capitalize text-yellow-600 font-semibold">{question.difficulty}</span>
          ) : (
            <span className="capitalize text-red-600 font-semibold">{question.difficulty}</span>
          )}
          </div>
        </div>
       <DisplayTags question={question}/>
      </div> */}
    </div>
    <div className="w-full">
      <span className="text-muted-foreground hover:text-primary">
        <ArrowRight width={30} height={30} />
      </span>
    </div>
  </div>
    </div>
))}
</div>

      </div>
    }
    </>
  )
}

export default CheatSheetLayout










// <div className="overflow-hidden space-y-8">
// {cheatsheets[0]?.data?.sections?.map((section:any, index:number) => (
//   <div key={index} className="bg-muted p-4 rounded-xl shadow-md">
//     <h2 className="text-xl font-semibold mb-3">{section.title}</h2>

//     {section.contentType === 'text' && (
//       <p className="text-muted-foreground">{section.content}</p>
//     )}

//     {section.contentType === 'code' && (
//       <div id='disp'>

//       <pre  className=" text-sm rounded p-4 overflow-x-auto">
//         <code>{section.content}</code>
//       </pre>
//       </div>
//     )}

//     {section.contentType === 'list' && (
//       <ul className="list-disc pl-6 text-muted-foreground space-y-1">
//         {section.content.map((item:any, idx:any) => (
//           <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
//         ))}
//       </ul>
//     )}

//     {section.contentType === 'table' && (
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-300 text-left">
//           <thead>
//             <tr>
//               {section.columns.map((col:any, i:any) => (
//                 <th key={i} className="px-4 py-2 bg-muted/25 border">
//                   {col}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {section.content.map((row:any, i:any) => (
//               <tr key={i}>
//                 {row.map((cell:any, j:any) => (
//                   <td key={j} className="px-4 py-2 border">
//                     <code>{cell}</code>
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     )}
//   </div>
// ))}
// </div>