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

const ConceptsLayout = ({questions}:any) => {
    const [conceptQuestions, setConceptQuestions] = React.useState([] as any)
    const [conceptQuest, setConceptQuestion] = React.useState({} as any)
    const [showConcept, setShowConcept] = React.useState(false)

    React.useEffect(() => {
        const fetchQuestion = async () => {
          const { data, error } = await supabase
            .from('concepts')
            .select('*')

            if (error) {
                console.error('Error fetching concepts:', error);
              } else {
                console.log(data)
                  setConceptQuestions(data)
                }
        };

        fetchQuestion()
      }, []);

      const handleShowConcept = (conceptObj:any) => {
        
        setConceptQuestion(conceptObj);
        setShowConcept(true)
        console.log(conceptObj)
      }
  return (
   <>
   {
    showConcept ? 
    // displaying specific concept
    <div className='p-6 lg:p-14'>
                <div>
                    <div>

                    <h6 className='text-2xl lg:text-3xl font-bold leading-16'>{conceptQuest.title}</h6>
                    <span className='leading-1 text-muted-foreground font-semibold text-sm lg:text-md'>{conceptQuest.description}</span>
                    </div>
                    <div className='mt-10 flex flex-col gap-10'>
                        {
                            conceptQuest?.data.map((question:any, ind:number)=>(
                                <div className='' key={ind}>
                                    <div className='flex flex-row lg:gap-3 gap-1 text-nowrap lg:text-lg font-semibold'>
                                        <span>Question {ind+1}:</span>
                                        <span>{question.question}</span>
                                    </div>
                                    <div className='pt-2 lg:pt-4'>
                                        <div id='disp' dangerouslySetInnerHTML={{__html:question.answer}}/>
                                    </div>
                                    <hr className='mt-10' />
                                </div>
                            ))
                        }
                    </div>
                </div>
    </div>
    : 
    // displaying all concepts
    <div className='p-6 lg:p-14'>
    <div>
        <h1 className='text-2xl lg:text-3xl font-bold leading-16'>Great Concepts</h1>
        <span className='leading-1 text-muted-foreground font-semibold text-sm lg:text-md'>Explore the largest repository of {questions?.length}+ essential front-end concepts and theoretical questions for acing interviews.</span>
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
    {/* questions playground for showing all questions */}
    <div className="flex flex-col">
{conceptQuestions.map((concept:any) => (
<div className='hover:bg-gradient-to-r from-orange-500 to-pink-600 p-[1.5px] rounded-lg lg:w-[50vw]' key={concept.id}>


<div
onClick={()=>handleShowConcept(concept)}
  key={concept.id}
  className="cursor-pointer w-full border flex items-center gap-3 lg:gap-5 p-3 lg:p-5 bg-muted rounded-lg hover:border hover:border-"
>
  <div>
    <button className="text-muted-foreground">
      <Sheet width={30} height={30} />
    </button>
  </div>
  <div className="min-w-[73%] max-w-[73%] lg:min-w-[85%] lg:max-w-[85%]">
    <h6>{concept.title}</h6>
    <p className="truncate text-muted-foreground text-sm pt-2 lg:py-3">
      {concept.description}
    </p>
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

export default ConceptsLayout
