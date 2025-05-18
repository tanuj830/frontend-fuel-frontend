import { BASE_URL } from '@/lib/utils';
import axios from 'axios';
import { Lock } from 'lucide-react';
import React, { useEffect } from 'react';
import AlgoCodingPage from './AlgoCodingPage';
import { Button } from './ui/button';
import Link from 'next/link';
import UICodingPage from './UICodingPage';
import { supabase } from '@/lib/supabaseClient';
import { useQuestionsByCategories } from '@/hooks/useQuestionsByCategories';
import Loader from './Loader';

const QuestionHomeDashboard = () => {
  const [rotation, setRotation] = React.useState(15);
  const editorRef = React.useRef<HTMLDivElement>(null);
  const [selectedTab, setSelectedTab] = React.useState("UI coding");
  const [featuredQuestions, setFeaturedQuestions] = React.useState<any[]>([]);
  const [load, setLoading] = React.useState(true);

  // Get featured questions
const {questions, loading, error}:any = useQuestionsByCategories()
  

useEffect(()=>{
  if(error)console.log("error while fetching")
    else if(questions){
  let ui = {}
  let algo = {}
  let js = {}
  
  questions.map((question:any)=>{
    if (question?.categories && question.categories.name === "UI coding") ui = question;
      if (question?.categories && question.categories.name === "Algo coding") algo = question;
      if (question?.categories && question.categories.name === "JS functions") js = question;
 
  })
  const arr = []
  arr.push(ui)
  arr.push(algo)
  arr.push(js)
  setFeaturedQuestions(arr)
}
},[questions])


// Scroll rotation effect
React.useEffect(() => {
  const handleScroll = () => {
    if (!editorRef.current) return;
    
    const rect = editorRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const visible = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);
    const angle = 30 - 30 * visible;
    
    setRotation(angle);
  };
  
  window.addEventListener('scroll', handleScroll);
  handleScroll();
  
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

 if(loading)return <Loader/>
 
  if (featuredQuestions.length < 3) {
    return <div className="text-center text-red-500 py-10">Not enough featured questions available.</div>;
  }

  const renderEditor = (index: number) => {
    const isLargeScreen = typeof window !== 'undefined' && window.innerWidth >= 1024;
  
    return (
      <div
        className='lg:px-10'
        ref={editorRef}
        style={{
          transform: isLargeScreen ? `perspective(1000px) rotateX(${rotation}deg)` : 'none',
          transition: 'transform 0.3s ease-out',
          overflow: 'hidden',
        }}
      >
        <div className='border my-10 w-full h-[70vh] lg:h-[80vh] overflow-y-scroll relative rounded-xl'>
          {/* Top bar */}
          <div className='flex items-center px-2 sticky top-0 py-2 dark:bg-black bg-white z-[100]'>
            <div className='w-fit flex items-center gap-1'>
              <div className='w-4 h-4 rounded-full bg-muted' />
              <div className='w-4 h-4 rounded-full bg-muted' />
              <div className='w-4 h-4 rounded-full bg-muted' />
            </div>
            <div className='flex items-center justify-center w-full'>
              <div className='bg-muted py-1 px-5 rounded-lg w-[55vw] lg:w-[30vw] justify-center flex items-center text-xs gap-2'>
                <Lock width={12} height={12} />
                <span className='text-muted-foreground'>greatreact.com</span>
              </div>
            </div>
          </div>
  
          {/* Editor */}
          {
            featuredQuestions && <div className="w-full">
            {
              index === 0 ? <UICodingPage height={"[70vh]"}  params={{slug:featuredQuestions[index].id}}/> :
            <AlgoCodingPage height={"[70vh]"} renderingInHomepage={true} params={{slug:featuredQuestions[index].id}} />
            }
          </div>
  
          }
          {/* Bottom CTA */}
          <div className='w-full flex sticky bottom-0 justify-center bg-primary text-primary-foreground'>
            {
              index === 0 ?
            <Link href={`/questions/user-interface/${featuredQuestions[index].id}`} className='text-xs py-1 z-[100]'>
              Click here to try out the actual workspace
            </Link>
              :
            <Link href={`/questions/algo/${featuredQuestions[index].id}`} className='text-xs py-1 z-[100]'>
              Click here to try out the actual workspace
            </Link>
            }
          </div>
        </div>
      </div>
    );
  };
  

  return (
    <div>
      {selectedTab === "UI coding" && renderEditor(0)}
      {selectedTab === "Algo coding" && renderEditor(1)}
      {selectedTab === "JS functions" && renderEditor(2)}

      {/* Tab Buttons */}
      <div className='flex justify-center items-center'>
        <div className='flex items-center gap-2'>
          <Button className='rounded-lg text-xs' variant={selectedTab === "UI coding" ? 'outline' : 'ghost'} onClick={() => setSelectedTab("UI coding")}>UI coding</Button>
          <Button className='rounded-lg text-xs' variant={selectedTab === "Algo coding" ? 'outline' : 'ghost'} onClick={() => setSelectedTab("Algo coding")}>Algo coding</Button>
          <Button className='rounded-lg text-xs' variant={selectedTab === "JS functions" ? 'outline' : 'ghost'} onClick={() => setSelectedTab("JS functions")}>JS functions</Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionHomeDashboard;
