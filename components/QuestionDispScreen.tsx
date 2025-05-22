import { BASE_URL, copyToClipboard } from '@/lib/utils'
import axios from 'axios'
import { Captions, Clock3, Copy, Flame, Lightbulb, NotebookText } from 'lucide-react'
import React, { useEffect } from 'react'
import SubmissonTable from './SubmissonTable'
import { Badge } from './ui/badge'
import { useCategories } from '@/hooks/useCategories'
import DisplayTags from './DisplayTags'
import { supabase } from '@/lib/supabaseClient'
import { useUserSession } from '@/hooks/useUserSession'

const QuestionDispScreen = ({ question, submitClicked }: any) => {
    const [window, setWindow] = React.useState(() =>  "description");
    // const [window, setWindow] = React.useState("description");
    const [submissions, setSubmissions] = React.useState<any>({});
    
    const {categories, loading} = useCategories()

    const [user, setUser] = React.useState({} as any);
    const { user: sessionUser, loading:loadingUser }:any = useUserSession();
    const [copied, setCopied] = React.useState(false)

  const handleCopy = (code:string) => {
    setCopied(true)
    copyToClipboard(code)
    setTimeout(()=>{setCopied(false)}, 3000)
  }


  useEffect(() => {
    if (!loading && sessionUser) {
      setUser(sessionUser);
    }
  }, [sessionUser, loading]);

    useEffect(() => {
        const fetchSubmissions = async () => {
          if (user?.id && question?.id) {
            const submissions = await getSubmissionsByUserAndQuestion(user.id, question.id);
            setSubmissions(submissions[0]); // Set latest submission or empty object
          }
        };
      
        fetchSubmissions();
      }, [user?.id, question?.id, submitClicked]);

    React.useEffect(() => {
        const storedWindow = localStorage.getItem("window");
        if (storedWindow) {
          setWindow(storedWindow);
        }
      }, []);


    const handleWindowChange = (type: string) => {
        localStorage.setItem("window", type);
        setWindow(type);
    };

    return (
        <div className='p-5 lg:h-[83vh] min-w-[20vw] overflow-auto'>
            {/* toggle window buttons */}
            <div className='flex items-center gap-5'>
                <button
                    className={`text-xs flex items-center gap-2 text-muted-foreground cursor-pointer ${window === "description" ? 'text-primary dark:text-white' : 'hover:text-primary'}`}
                    onClick={() => handleWindowChange("description")}
                >
                    <NotebookText width={19} height={19} />
                    <span>Description</span>
                </button>

                <button
                    className={`text-xs flex items-center gap-2 text-muted-foreground cursor-pointer ${window === "solution" ? 'text-primary dark:text-white' : 'hover:text-primary'}`}
                    onClick={() => handleWindowChange("solution")}
                >
                    <Lightbulb width={19} height={19} />
                    <span>Solution</span>
                </button>

                <button
                    className={`text-xs flex items-center gap-2 text-muted-foreground cursor-pointer ${window === "submisson" ? 'text-primary dark:text-white' : 'hover:text-primary'}`}
                    onClick={() => handleWindowChange("submisson")}
                >
                    <Captions width={19} height={19} />
                    <span>Submission</span>
                </button>
            </div>

            <div>
                <h1 className='text-xl lg:text-2xl font-bold leading-9 lg:leading-16 py-3 '>{question?.title}</h1>

                <div className='text-xs text-muted-foreground flex items-center flex-wrap gap-5 lg:gap-7 pb-6'>
                    <div className='flex items-center gap-1'>
                        <img src="/image.png" className='w-8 h-8 scale-110 rounded-full object-cover' alt="author_image" />
                        <div className='flex flex-col'>
                            <span className='text-xs font-medium text-accent-foreground'>Tanuj Bhatt</span>
                            <span className='text-xs font-medium'>Amex, Infosys</span>
                        </div>
                    </div>

                    <div className='flex items-center gap-1'>
                        {
                            !loading ? <Badge>{categories[question?.category_id]}</Badge> : <Badge className='animate-pulse '>Loading...</Badge>
                        }
                    </div>
                        <DisplayTags question={question}/>
                    <div className='flex items-center gap-1'>
                        <Flame width={15} height={15} />
                        <span className={`capitalize font-semibold ${question?.difficulty === "easy" ? "text-green-600" : question?.difficulty === "medium" ? "text-yellow-600" : "text-red-600"}`}>
                            {question?.difficulty ? <>{question?.difficulty}</>: <>hard</>}
                        </span>
                    </div>

                    <div className='flex items-center gap-1'>
                        <Clock3 width={15} height={15} />
                        <span className='text-muted-foreground text-xs'>{question?.duration ? <>{question?.duration}</>: <>0</>} mins</span>
                    </div>
                </div>
            </div>

            {
                window === "description" ? (
                    <div className='text-secondary-foreground' id='disp' dangerouslySetInnerHTML={{ __html: question?.description }} />
                ) : window === "solution" ? (
                    <div className='relative'>
                     {
            copied && <span className='absolute -top-5 right-2 text-xs gradient text-primary-foreground px-3 py-1 rounded-full'>Copied</span>
          }
          <button className='absolute top-5 right-5  hover:text-muted-foreground/50 cursor-pointer' onClick={()=>handleCopy(question?.solution_code)}>
              <Copy width={15} height={15}/>
          </button>
          <div id='disp'>

                    <pre>
                        <code>
                            {question?.solution_code}
                        </code>
                    </pre>
          </div>
                    </div>
                ) : (
                    <div className='flex  bg-mute min-w-[46vw] h-[50vh]'>
                        {
                            submissions != undefined ? (
                                <SubmissonTable question={question} submissons={submissions} />
                            ) : (
                                <div className='flex flex-col justify-center items-center w-full text-muted-foreground text-center'>
                                    <small>No submission found</small>
                                    <small>To see your submission details first submit your code</small>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    );


   
    
};

const getSubmissionsByUserAndQuestion = async (userId: string, questionId: string) => {
    const { data, error } = await supabase
      .from('submissions')
      .select('*')
      .eq('user_id', userId)
      .eq('question_id', questionId)
    //   .order('created_at', { ascending: false }); // Optional: Get latest submissions first
  
    if (error) {
      console.error('Error fetching submissions:', error);
      return [];
    }
  
    return data;
  };
export default QuestionDispScreen;
