import { Captions, Clock3, Flame, Lightbulb, NotebookText } from 'lucide-react'
import { Span } from 'next/dist/trace'
import React from 'react'

const QuestionDispScreen = ({ question }: any) => {

    const [window, setWindow] = React.useState("description")
    return (
        <div className='p-5 lg:h-[90vh] overflow-auto'>

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
                                <div className='flex items-center justify-center bg-muted h-[50vh]'>
                            {/* show submissions */}
                        <div className='flex flex-col text-muted-foreground text-center'>

                                <small>No submission found</small>
                                <small>To see your submission details first submit your code</small>
                                </div>
                        </div>
            }

        </div>
    )
}

export default QuestionDispScreen
