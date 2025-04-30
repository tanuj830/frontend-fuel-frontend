"use client"
import React from 'react';
import Image from 'next/image';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { ArrowRight, Lock } from 'lucide-react';
import { Button } from './ui/button';
import axios from 'axios';
import { BASE_URL } from '@/lib/utils';
import QuestionsPlayground from './QuestionsPlayground';
import ReactQuestionDispScreen from './ReactQuestionDispScreen';

const Home = () => {
  const [questions, setQuestions] = React.useState([])

  React.useEffect(()=>{
    axios.get(`${BASE_URL}/api/questions`).then(res=>setQuestions(res.data)).catch(err=>console.log(err))
  },[])
  
  return (
    <div className='p-6 mt-5'>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-3'>
          <div className='flex gap-3 items-center'>
            <span className='py-1 px-2 bg-primary text-xs rounded-md'>New</span>
            <Link href="/questions" className='flex gap-1 items-center text-sm'><span>React questions</span> <ArrowRight width={15} /></Link>
          </div>
          <div>
            <h4 className='text-4xl font-semibold'>Grow with insights from seasoned developers</h4>
          </div>
        </div>
        <div>
          <p>Learn from experienced developers and colleagues, and master the skills you need to succeed.</p>
        </div>
        <div className='w-fit flex flex-col gap-2'>
          <Button><span>Get started now</span><ArrowRight width={16} /> </Button>
          {
            questions?.length > 0 ? <small>{questions?.length}+ questions are free to do</small>
            : <div className='w-full h-3 animate-pulse bg-muted rounded-full'/>
          }
        </div>
      </div>
      <div className='border  my-10 w-full h-[70vh] overflow-y-scroll relative rounded-xl'>
        <div className='flex items-center px-2 sticky top-0 py-2 dark:bg-black bg-white'>
          <div className='w-fit flex items-center gap-1'>
            <div className='w-4 h-4 rounded-full bg-muted'/>
            <div className='w-4 h-4 rounded-full bg-muted'/>
            <div className='w-4 h-4 rounded-full bg-muted'/>
          </div>
          <div className='flex items-center justify-center w-full'>
            <div className='bg-muted py-1 px-5 rounded-lg flex items-center text-xs gap-2'>
            <Lock width={12} height={12}/>
            <span className='text-muted-foreground'>reactready.vercel.app</span>
            </div>
          </div>
        </div>
        {
          questions?.length > 0 &&
        <ReactQuestionDispScreen question={questions[0]}/>
        }
        <div className='w-full flex sticky bottom-0 justify-center bg-primary text-primary-foreground'>

        <Link href={"/questions"} className=' text-xs py-1'>Click here to try out the actual workspace</Link>
        </div>
      </div>
    </div>
  );
}


export default Home;