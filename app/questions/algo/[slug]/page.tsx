"use client";

import AlgoCodingPage from '@/components/AlgoCodingPage';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import { useQuestion } from '@/hooks/useQuestion';
import { useUserSession } from '@/hooks/useUserSession';
import Head from 'next/head';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Page = () => {
  const params:any = useParams();
  const router = useRouter();

  const { user, loading } = useUserSession();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/sign-in");
    }
  }, [loading, user, router]);

  if (loading || !user) return <Loader />;

  const { question, loading:questionLoading, error } = useQuestion(params.slug);
  useEffect(()=>{
    if(error)alert("Something went wrong...")

    },[params])


  return (
    <>
     <Head>
        <title>{question.title || 'Questions - MySite'}</title>
        <meta name="description" content={question.text || 'Browse questions on GreatReact'} />
        <meta property="og:title" content={question.title || 'Questions - GreatReact'} />
        <meta property="og:description" content={question.text || 'Browse questions on GreatReact'} />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
    <div className='mt-20'>
      <Navbar/>
      <AlgoCodingPage question={question} />
    </div>
    </>
  );
};

export default Page;
