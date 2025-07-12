"use client"
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Lock } from 'lucide-react';
import axios from 'axios';
import { BASE_URL } from '@/lib/utils';
import ReactQuestionDispScreen from './ReactQuestionDispScreen';
import AlgoCodingPage from './AlgoCodingPage';
import { Button } from './ui/button';
import QuestionHomeDashboard from './QuestionHomeDashboard';
import { motion } from "framer-motion";
import AnimatedHeading from './AnimatedHeading';
import { useQuestion } from '@/hooks/useQuestion';
import { supabase } from '@/lib/supabaseClient';
import Navbar from './Navbar';
import CheckoutButton from './payments/CheckoutButton';
import FeedbackHeroSection from './home/FeedbackHeroSection';

const Home = () => {
  const [questions, setQuestions] = React.useState<any[]>([]);
  const [layout, setLayout] = React.useState("")

  // fetch questions
  useEffect(() => {
    const fetchQuestions = async () => {
      const { data, error }: any = await supabase
        .from('questions')
        .select('*'); // specify columns or use * for all

      if (error) {
        console.error('Error fetching questions:', error);
      } else {
        setQuestions(data);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <>
      <Navbar layout={layout} setLayout={setLayout} />
      <div className='p-6 mt-24'>
        <div className='flex flex-col gap-8 lg:px-[10vw] lg:pt-10 lg:w-[60vw] transition-all ease-in duration-3000'>
          <div className='flex flex-col gap-3'>
            <div className='flex gap-3 items-center bg-muted w-fit rounded-full px-2'>
              <span className='py-0.5 px-2 gradient text-[10px] rounded-full text-primary-foreground'>New</span>
              <Link href="/questions" className='flex gap-1 items-center text-xs'>
                <span>React questions</span> <ArrowRight width={15} />
              </Link>
            </div>
            <AnimatedHeading sentence={"Crack frontend interviews with real code"} />
          </div>
          <p className='text-lg md:text-xl text-muted-foreground font-medium'>
            Don’t just prep. <span className='text-white'>DOMinate by practicing real-world UI challenges and DSA problems</span> — all in one place. No boring videos. Just code.
          </p>
          <div className='flex flex-col lg:flex-row gap-3 lg:gap-10 items-start '>

            <div className='w-fit flex flex-col gap-2 '>
              <Link
                href="/questions"
                className='gradient text-nowrap w-fit text-primary-foreground flex items-center py-2 px-5 rounded-full  font-semibold gap-2'
              >
                <span>Get started now</span><ArrowRight width={16} />
              </Link>
              {questions.length > 0 ? (
                <small className='text-xs text-muted-foreground ml-2 mt-2'>{questions.length}+ questions are free to do</small>
              ) : (
                <div className='w-full h-3 animate-pulse bg-muted rounded-full' />
              )}
            </div>
            <FeedbackHeroSection />
          </div>
        </div>
        <div className='mt-10'>
          <QuestionHomeDashboard />
        </div>
      </div>
    </>
  );
};

export default Home;
