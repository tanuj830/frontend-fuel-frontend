import axios from 'axios'
import { Captions, Clock3, Flame, Lightbulb, NotebookText } from 'lucide-react'
import { Span } from 'next/dist/trace'
import React, { useEffect } from 'react'

const QuestionDispScreen = ({ question }: any) => {

    const [window, setWindow] = React.useState("description")
    const [user, setUser] = React.useState({} as any)
    const [submissons, setSubmissons] = React.useState([] as any)

    useEffect(()=>{
        const savedUser = localStorage.getItem("user")
        if(savedUser)setUser(JSON.parse(savedUser))
console.log(user.id)
        axios.post("http://localhost:8080/api/questions/submissons/"+user.id, question).then(res=>setSubmissons(res.data)).catch(err=>console.log(err))
    }, [window])
    return (
        <div className='p-5 lg:h-[83vh] min-w-[20vw]  overflow-auto'>

            {/* toggle window buttons */}
            <div className='flex items-center gap-5'>
                <button className={`text-xs flex items-center gap-2 text-muted-foreground cursor-pointer  ${window === "description" ? 'text-primary-foreground': 'hover:text-primary'}`} onClick={() => setWindow("description")}>
                    <NotebookText width={19} height={19} /><span>
                        Description
                    </span>
                </button>
                <button className={`text-xs flex items-center gap-2 text-muted-foreground cursor-pointer ${window === "solution" ? 'text-primary-foreground': 'hover:text-primary'}`} onClick={() => setWindow("solution")}>
                    <Lightbulb width={19} height={19} /><span>
                        Solution
                    </span>
                </button>
                <button className={`text-xs flex items-center gap-2 text-muted-foreground cursor-pointer ${window === "submission" ? 'text-primary-foreground': 'hover:text-primary'}`} onClick={() => setWindow("submission")}>
                    <Captions width={19} height={19} /><span>
                        Submission
                    </span>
                </button>
            </div>
            <div>
                <h1 className='text-2xl font-bold leading-16 py-3 '>{question.title}</h1>
            </div>
            <div className='text-xs text-muted-foreground  flex items-center flex-wrap gap-3 lg:gap-7 pb-6'>
                <div className='flex items-center gap-1'>
                    <img src="/image.png" className='w-8 h-8 scale-110 rounded-full object-cover' alt="author_image" />
                    <div className='flex flex-col'>
                        <span className='text-xs font-medium text-accent-foreground'>Tanuj Bhatt</span>
                        <span className='text-xs font-medium'>Amex, Infosys</span>

                    </div>
                </div>
                <div className='flex items-center gap-1 '>
                    {
                        question?.tags?.map((tag: any) => (<span key={question.id + tag}>{tag}</span>))
                    }
                </div>
                <div className='flex items-center gap-1' >
                    <Flame width={18} height={18} />
                    {
                        question?.difficulty === "easy" ? <span className='capitalize text-green-600 font-semibold'>{question?.difficulty}</span> :
                            question?.difficulty === "medium" ? <span className='capitalize text-yellow-600 font-semibold'>{question?.difficulty}</span> :
                                <span className='capitalize text-red-600 font-semibold'>{question?.difficulty}</span>
                    }
                </div>
                <div className='flex items-center gap-1'>
                    <Clock3 width={19} height={19} />
                    <span className='text-muted-foreground text-xs'>{question?.duration}mins</span>
                </div>
            </div>

            {
                window === "description" ?

                    <div className=''>
                        {/* show description */}
                        <div className='text-secondary-foreground' id='disp' dangerouslySetInnerHTML={{ __html: question?.description }} />
                    </div>
                    : window === "solution" ?
                    <div>
                            {/* show solution */}
                            <div className='text-secondary-foreground ' id='disp' dangerouslySetInnerHTML={{ __html: question?.solutionCode }} />
                        </div> :
                                <div className='flex  p-5 bg-muted min-w-[46vw] h-[50vh]'>
                            {/* show submissions */}
                        {
                            submissons ? 
                            <div className='flex flex-col  gap-3 text-sm w-full overflow-scroll'>
                            {
                                submissons.map((sub:any)=>(

                                <div className='flex  justify-between w-full gap-10 border-b'>
                            <div className='font-semibold text-green-500'>
                                        ACCEPTED
                            </div>
                            <div className='text-nowrap '>
                                {question.title}
                            </div>
                            <div>
                                {Date.parse(sub.solvedOn)}
                            </div>
                            <div>
                                {}
                            </div>
</div>
))
}
                            </div>
                            : 
                            <div className='flex flex-col  text-muted-foreground text-center'>

                                <small>No submission found</small>
                                <small>To see your submission details first submit your code</small>
                                </div>
                        }
                        </div>
            }

        </div>
    )
}

export default QuestionDispScreen
