import { supabase } from '@/lib/supabaseClient';
import React, { useEffect } from 'react'

const FeedbackHeroSection = () => {
    const [feedbacks, setFeedbacks] = React.useState([])
    
    const fetchFeedbacks =async  () => {
        const { data, error }: any = await supabase
                    .from('feedbacks')
                    .select('*');
                if (error) {
                    console.error('Error fetching feedbacks:', error);
                } else {
                    setFeedbacks(data);
                }
    }

    useEffect(()=>{
            fetchFeedbacks()
    }, [])

  return (
    <div className='flex lg:flex-row flex-col items-start lg:items-center mt-3 lg:mt-0 h-full'>
    <div className='flex relative items-center'>
      {
        feedbacks?.map((feedback:any)=>(
            <div className=''>
                <img src={feedback.image} className='w-9 h-9 rounded-full object-cover' alt="" />
            </div>
        ))
      }
      </div>
      <div className='lg:ml-3'>
        <small className='leading-0.5 text-muted-foreground'>Backed by real developer feedback</small>

      </div>
    </div>
  )
}

export default FeedbackHeroSection

