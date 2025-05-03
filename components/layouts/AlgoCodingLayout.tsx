import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import QuestionsPlayground from '@/components/QuestionsPlayground'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { BASE_URL } from '@/lib/utils';
import axios from 'axios'
import { ArrowDown01, BadgeCheck, PanelTop, Search, TestTube } from 'lucide-react'
import { useQuestionsByCategories } from '@/hooks/useQuestionsByCategories'
import Loader from '../Loader'
const AlgoCodingLayout = () => {

  const {loading, algoQuestions}:any = useQuestionsByCategories()
  if(loading)return <Loader/>


  return (
    <div className='p-6 lg:p-14'>
            <div>

                <h1 className='text-2xl lg:text-3xl font-bold leading-7 lg:leading-16'>All algorithms based questions</h1>
                <span className='leading-1 text-muted-foreground font-semibold text-sm lg:text-md'>The largest question bank of {algoQuestions?.length}+ practice questions for front end interviews
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
            {/* questions playground for showing all questions */}
            <QuestionsPlayground questions={algoQuestions}/>
            </div>

  )
}

export default AlgoCodingLayout
