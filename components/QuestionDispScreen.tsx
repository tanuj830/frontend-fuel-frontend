import { BASE_URL } from '@/lib/utils'
import axios from 'axios'
import { Captions, Clock3, Flame, Lightbulb, NotebookText } from 'lucide-react'
import React, { useEffect } from 'react'
import SubmissonTable from './SubmissonTable'
import { Badge } from './ui/badge'
import { useCategories } from '@/hooks/useCategories'
import DisplayTags from './DisplayTags'

const QuestionDispScreen = ({ question, submitClicked }: any) => {
    const [window, setWindow] = React.useState(() =>  "description");
    // const [window, setWindow] = React.useState("description");
    const [submissions, setSubmissions] = React.useState<any>([]);
    
    const {categories, loading} = useCategories()

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
                        <Flame width={18} height={18} />
                        <span className={`capitalize font-semibold ${question?.difficulty === "easy" ? "text-green-600" : question?.difficulty === "medium" ? "text-yellow-600" : "text-red-600"}`}>
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
                    <div className='text-secondary-foreground' id='disp' dangerouslySetInnerHTML={{ __html: question?.text }} />
                ) : window === "solution" ? (
                    <div className='text-secondary-foreground' id='disp' dangerouslySetInnerHTML={{ __html: question?.solution_code }} />
                ) : (
                    <div className='flex p-5 bg-muted min-w-[46vw] h-[50vh]'>
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
    );


    

    // function fetchSubmisson (){
    //     const savedUser = localStorage.getItem("user");

    //     if (savedUser) {
    //         const userData = JSON.parse(savedUser);
    //         setUser(userData); // Store user data in state

    //         // Fetch submissions based on user id
    //         axios.post(`${BASE_URL}/api/questions/submissons/${userData.id}`, question)
    //             .then(res => setSubmissions(res.data))
    //             .catch(err => console.log(err));
    //     }
    // }
};

export default QuestionDispScreen;
