"use client"

import AlgoCodingPage from '@/components/AlgoCodingPage';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import { useUserSession } from '@/hooks/useUserSession';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';


const AlgoCodingInitial = () => {
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
  
  export default AlgoCodingInitial;