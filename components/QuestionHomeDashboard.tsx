import { BASE_URL } from '@/lib/utils';
import axios from 'axios';
import { Lock } from 'lucide-react';
import React from 'react';
import AlgoCodingPage from './AlgoCodingPage';
import { Button } from './ui/button';
import Link from 'next/link';
import UICodingPage from './UICodingPage';

const QuestionHomeDashboard = () => {
  const [rotation, setRotation] = React.useState(15);
  const editorRef = React.useRef<HTMLDivElement>(null);
  const [selectedTab, setSelectedTab] = React.useState("UI coding");
  const [featuredQuestions, setFeaturedQuestions] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  // Get featured questions
  React.useEffect(() => {
    axios.get(`/api/featured`)
      .then(res => {
        setFeaturedQuestions(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

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

  if (loading) {
    return <div className="text-center py-10">Loading questions...</div>;
  }

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
        <div className='border my-10 w-full h-[70vh] lg:h-[90vh] overflow-y-scroll relative rounded-xl'>
          {/* Top bar */}
          <div className='flex items-center px-2 sticky top-0 py-2 dark:bg-black bg-white z-[100]'>
            <div className='w-fit flex items-center gap-1'>
              <div className='w-4 h-4 rounded-full bg-muted' />
              <div className='w-4 h-4 rounded-full bg-muted' />
              <div className='w-4 h-4 rounded-full bg-muted' />
            </div>
            <div className='flex items-center justify-center w-full'>
              <div className='bg-muted py-1 px-5 rounded-lg lg:w-[30vw] justify-center flex items-center text-xs gap-2'>
                <Lock width={12} height={12} />
                <span className='text-muted-foreground'>reactready.vercel.app</span>
              </div>
            </div>
          </div>
  
          {/* Editor */}
          {
            featuredQuestions && <div className="w-full">
            {
              index === 0 ? <UICodingPage  params={{slug:featuredQuestions[index].id}}/> :
            <AlgoCodingPage renderingInHomepage={true} params={{slug:featuredQuestions[index].id}} />
            }
          </div>
  
          }
          {/* Bottom CTA */}
          <div className='w-full flex sticky bottom-0 justify-center bg-primary'>
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
