import { ArrowRight, BadgeCheck, Flame } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
const { htmlToText } = require('html-to-text');

interface ChallengeInterface {
    id: string;
    title: string;
    category: string;
    description: string;
    difficulty: 'easy' | 'medium' | 'hard';
    tags: string[];
    starterCode: string;
    solutionCode: string;
    createdAt: string;
}

interface QuestionsPlaygroundProps {
    questions: ChallengeInterface[];
}

const DisplayQuestions: React.FC<QuestionsPlaygroundProps> = ({ questions }) => {

    return (
        <div className='flex flex-col'>
            {

                questions.map(question => (
                    <Link href={question.category === "Algo coding" ? "/questions/algo/" + question.id : question.category === "UI coding" ? "/questions/user-interface/" + question.id : "/questions/javascript/" + question.id} key={question.id}
                        className='w-full border flex items-center gap-5 p-5 bg-muted rounded-lg hover:border hover:border-primary'>
                        <div>
                            <button className='text-muted-foreground hover:text-green-600'><BadgeCheck width={30} height={30} /></button>
                        </div>
                        <div className='min-w-[85%] max-w-[85%]'>
                            <h6>{question.title}</h6>
                            <p className='truncate text-muted-foreground text-sm py-3'>{htmlToText(question.description)}</p>
                            <div className='flex items-center text-xs text-muted-foreground gap-8 mt-2'>
                                <span>{question.category}</span>
                                <div className='flex items-center gap-1'>
                                    <Flame width={21} height={21} />
                                    {
                                        question.difficulty === "easy" ? <span className='capitalize text-green-600 font-semibold'>{question.difficulty}</span> :
                                            question.difficulty === "medium" ? <span className='capitalize text-yellow-600 font-semibold'>{question.difficulty}</span> :
                                                <span className='capitalize text-red-600 font-semibold'>{question.difficulty}</span>
                                    }
                                </div>
                                <div className='flex gap-1 items-center'>
                                    {
                                        question?.tags?.map((tag:any) => (<span key={tag.name} className='border p-1 rounded-lg'>{tag.name}</span>))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='  w-full'>
                            <span className='text-muted-foreground hover:text-primary'><ArrowRight width={30} height={30} /></span>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default DisplayQuestions
