"use client";

import Navbar from '@/components/Navbar'
import QuestionsPlayground from '@/components/QuestionsPlayground'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import axios from 'axios'
import { ArrowDown01, BadgeCheck, PanelTop, Search, TestTube } from 'lucide-react'
import React, { useEffect } from 'react'


const Questions = () => {

    const [questions, setQuestions] = React.useState([])

    useEffect(() => {
        // axios.get("/api/challenges").then(res => setQuestions(res.data))
        axios.get("http://localhost:8080/api/questions").then(res => setQuestions(res.data))
    }, [])

    return (
        <div className='p-14'>
            <div>

                <h1 className='text-3xl font-bold leading-16'>All Practice Questions</h1>
                <span className='leading-1 text-muted-foreground font-semibold text-md'>The largest question bank of {questions?.length}+ practice questions for front end interviews
                </span>
            </div>
            <div className='flex items-center gap-8 my-5 text-muted-foreground text-sm'>
                <div className='flex items-center gap-2'>
                    <BadgeCheck />
                    <span>Solved by ex-interviewers</span>
                </div>
                <div className='flex items-center gap-2'>
                    <TestTube />
                    <span>Test cases</span>
                </div>
                <div className='flex items-center gap-2'>
                    <PanelTop />
                    <span>Code in browser</span>
                </div>
            </div>
            <Separator />
            <div className='w-[72%] py-10 text-muted-foreground'>
                Save the trouble of searching the web for front end interview questions. We have 500+ practice questions in every framework, format, and topic, each with high quality answers and tests from big tech senior / staff engineers.
            </div>
            {/* questions playground for showing all questions */}
            <QuestionsPlayground questions={questions}/>
        </div>
    )
}

export default Questions
