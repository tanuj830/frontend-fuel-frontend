import { BASE_URL, copyToClipboard } from '@/lib/utils'
import axios from 'axios'
import { Captions, CircleCheckBig, Clock3, Copy, Flame, Lightbulb, NotebookText, Sparkles } from 'lucide-react'
import React, { useEffect } from 'react'
import SubmissonTable from './SubmissonTable'
import { Badge } from './ui/badge'
import { useCategories } from '@/hooks/useCategories'
import DisplayTags from './DisplayTags'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


const ReactQuestionDispScreen = ({ question, submitClicked }: any) => {
    const [window, setWindow] = React.useState(() => localStorage.getItem("window") || "description");
    // const [user, setUser] = React.useState<any>(null);
    const [submissions, setSubmissions] = React.useState<any>([]);
    const [copied, setCopied] = React.useState(false)

    const handleCopy = (code:string) => {
      setCopied(true)
      copyToClipboard(code)
      setTimeout(()=>{setCopied(false)}, 3000)
    }


    const {categories, loading} = useCategories()

    // Effect to fetch user data from localStorage and then fetch submissions
    useEffect(() => {
    //    fetchSubmisson()
    }, [question, submitClicked]); 


    const handleWindowChange = (type: string) => {
        localStorage.setItem("window", type);
        setWindow(type);
    };

    return (
        <div className='px-5 lg:h-[83vh] min-w-[20vw] overflow-auto'>
            <div>
             {/* fixed header */}
             <div className='sticky top-0 bg-[#18181B] pt-5 pb-3 z-[100]'>
            {/* toggle window buttons */}
            <div className='flex items-center gap-5'>
                <button
                    className={`text-xs flex items-center gap-2 text-muted-foreground cursor-pointer ${window === "description" ? 'dark:text-primary-foreground text-primary font-semibold' : 'hover:text-primary'}`}
                    onClick={() => handleWindowChange("description")}
                >
                    <NotebookText width={19} height={19} />
                    <span>Description</span>
                </button>

                <button
                    className={`text-xs flex items-center gap-2 text-muted-foreground cursor-pointer ${window === "solution" ? 'dark:text-primary-foreground text-primary font-semibold' : 'hover:text-primary'}`}
                    onClick={() => handleWindowChange("solution")}
                >
                    <Lightbulb width={19} height={19} />
                    <span>Solution</span>
                </button>

                <button
                    className={`text-xs flex items-center gap-2 text-muted-foreground cursor-pointer ${window === "submisson" ? 'dark:text-primary-foreground text-primary font-semibold' : 'hover:text-primary'}`}
                    onClick={() => handleWindowChange("submisson")}
                >
                    <Captions width={19} height={19} />
                    <span>Submission</span>
                </button>
            </div>
            </div>
            <div className='mt-3'>
                <h1 className='text-xl lg:text-2xl font-bold pb-5 pt-2 '>{question?.title}</h1>

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
                            !loading ? <span className='gradient text-white px-2 py-1 rounded-lg text-xs font-semibold'>{categories[question?.category_id]}</span> : <span className='animate-pulse gradient text-white px-2 py-1 rounded-lg text-xs font-semibold'>Loading...</span>
                        }
                    </div>
                    <DisplayTags question={question}/>
                    <div className='flex items-center gap-1'>
                        <Flame width={18} height={18} />
                        <span className={`capitalize font-semibold ${question?.difficulty === "easy" ? "text-green-500" : question?.difficulty === "medium" ? "text-yellow-500" : "text-red-500"}`}>
                            {question?.difficulty ? <>{question?.difficulty}</>: <>hard</>}
                        </span>
                    </div>

                    <div className='flex items-center gap-1'>
                        <Clock3 width={19} height={19} />
                        <span className='text-muted-foreground text-xs'>{question?.duration ? <>{question?.duration}</>: <>0</>} mins</span>
                    </div>
                </div>
            </div>
       

            {
                window === "description" ? (
                    <>
                    <div className='pt-2' id='disp' dangerouslySetInnerHTML={{ __html: question?.description }} />
                    </>
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
                    <div className='flex p-5 bg-muted  h-[50vh]'>
                        {
                            submissions?.length > 0 ? (
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
         {/* question disp footer */}
         <div className='pt-5 flex items-center gap-5 mt-5 flex-wrap'>
        <div className='flex items-center gap-1 text-nowrap'>
                        <CircleCheckBig width={15} height={15} />
                        <span className='text-muted-foreground text-sm'>{question?.solved_by ? <>{question?.solved_by}</>: <>0</>} done</span>
                    </div>
        <div className='flex items-center gap-1 text-nowrap'>
                        <Sparkles width={15} height={15} />
                        <span className='text-muted-foreground text-sm'>{question?.skill_level ? <span className='capitalize'>{question?.skill_level}</span>: <>"Beginner"</>} skill required</span>
                    </div>
                    <div className='flex items-center gap-1 text-nowrap'>
                        <Clock3 width={15} height={15} />
                        <span className='text-muted-foreground text-sm'>{question?.duration ? <>{question?.duration}</>: <>0</>} mins</span>
                    </div>
        </div>
                    <div>
                    <Accordion type="single" collapsible className="w-full mt-2">
                <AccordionItem className="" value={`item-${1}`} >
          <AccordionTrigger className="text-sm hover:decoration-0">Hint</AccordionTrigger>
          <AccordionContent className="text-[17px] text-sm text-muted-foreground flex gap-2 items-center">
            {question?.hint}
          </AccordionContent>
        </AccordionItem>
                <AccordionItem className="" value={`item-${2}`} >
          <AccordionTrigger className="text-sm hover:decoration-0">Topics</AccordionTrigger>
          <AccordionContent className="text-[17px] text-sm text-muted-foreground flex gap-2 items-center">
            {question?.tags?.map((tag:any, ind:any)=>(<span key={tag+ind}>{tag}{ind < question?.tags?.length-1 && <>,</>}</span>))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
                    </div>
        </div>
    );
};

export default ReactQuestionDispScreen;
