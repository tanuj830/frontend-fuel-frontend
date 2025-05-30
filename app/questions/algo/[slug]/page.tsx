"use client";

import AlgoCodingPage from '@/components/AlgoCodingPage';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import { useUserSession } from '@/hooks/useUserSession';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

// app/questions/algo/[slug]/page.tsx

import { supabase } from '@/lib/supabaseClient';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const { data: question, error }: any = await supabase
    .from('questions')
    .select('title, short_description')
    .eq('id', slug)
    .single();

  if (error || !question) {
    return {
      title: 'Question Not Found | GreatReact',
      description: 'Explore algorithm coding questions on GreatReact.',
    };
  }

  return {
    title: `${question.title} | GreatReact`,
    description: question.short_description || 'Algorithm coding question on GreatReact.',
    openGraph: {
      title: question.title,
      description: question.short_description || '',
    },
    keywords: ['algorithms', 'coding questions', 'dsa', 'javascript', 'GreatReact'],
  };
}


const Page = () => {
  const params = useParams();
  const router = useRouter();

  const { user, loading } = useUserSession();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/sign-in");
    }
  }, [loading, user, router]);

  if (loading || !user) return <Loader />;

  return (
    <div className='mt-20'>
      <Navbar/>
      <AlgoCodingPage params={params} />
    </div>
  );
};

export default Page;
