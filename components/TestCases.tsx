import React, { useEffect } from 'react'
import { Button } from './ui/button'
import { Captions, Check, Cross, EyeOff, Play, TestTube, X } from 'lucide-react'

const CodeEvaluate = ({question, setQuestion}:any) => {
  const [window, setWindow] = React.useState("Run tests")
  
 

  const handleRunTests = () => {
    setWindow("Run tests")
    // checking any 2 test cases in frontend: just to verify code is runnable or not 
    
  }

  const handleCompleted = () => {
    const clonedQuestion = {...question}
    clonedQuestion.completed = true
    setQuestion(clonedQuestion)
  }

  return (
    <div className='flex flex-col justify-between'>
        <div className='p-5'>
        <div className='flex items-center gap-7'>
                <button className={`text-xs flex items-center gap-1 text-muted-foreground cursor-pointer  ${window === "Run tests" ? 'text-primary-foreground': 'hover:text-primary'}`} onClick={() => setWindow("Run tests")}>
                    <TestTube width={19} height={19} /><span>
                        Run tests
                    </span>
                </button>
                <button className={`text-xs flex items-center gap-2 text-muted-foreground cursor-pointer  ${window === "Submit" ? 'text-primary-foreground': 'hover:text-primary'}`} onClick={() => setWindow("Submit")}>
                    <Captions width={19} height={19} /><span>
                        Submit
                    </span>
                </button>

            </div>
            {
              window === "Run tests" ?
              <div className='mt-7 text-xs'>
                {/* Run tests */}
                <div className='flex items-center gap-3 bg-muted p-3 rounded-xl'>
                  <Check className='text-green-600 font-extrabold' width={19} height={19}/>
                  <span>
                    Test Case 1 {'>'} numbers = [1, 2, 3]
                  </span>
                </div>
                <div className='flex items-center gap-3 bg-muted p-3 rounded-xl mt-2'>
                  <X className='text-red-600 font-extrabold' width={19} height={19}/>
                  <span>
                    Test Case 2 {'>'} numbers = [1, 2, 3]
                  </span>
                </div>
              </div>:
              <div className='mt-3 text-xs '>
                {/* Submit */}
                <div className='flex items-center gap-3 bg-muted p-3 rounded-xl mt-2'>
                  <Check className='text-green-600 font-extrabold' width={19} height={19}/>
                  <span>
                    Test Case 1 {'>'} numbers = [1, 2, 3]
                  </span>
                </div>
                <div className='flex items-center gap-3 bg-muted p-3 rounded-xl mt-2'>
                  <Check className='text-green-600 font-extrabold' width={19} height={19}/>
                  <span>
                    Test Case 2 {'>'} numbers = [1, 2, 3]
                  </span>
                </div>
                <div className='flex items-center gap-3 bg-muted p-3 rounded-xl mt-2'>
                  <Check className='text-green-600 font-extrabold' width={19} height={19}/>
                  <span>
                    Test Case 3 {'>'} numbers = [1, 2, 3]
                  </span>
                </div>
                <div className='flex items-center gap-3 bg-muted p-3 rounded-xl mt-2'>
                  <X className='text-red-600 font-extrabold' width={19} height={19}/>
                  <span>
                    Test Case 4 {'>'} numbers = [1, 2, 3]
                  </span>
                </div>
              </div>
            }
        </div>
      <div className='flex items-center gap-3 fixed bottom-0 right-8 '>
        <button className={`bg-muted rounded-lg py-1 px-2 flex items-center gap-2 text-xs cursor-pointer ${question.completed && 'bg-primary'}`} > <Check width={16} height={16} onClick={()=>handleCompleted}/>Mark as completed</button>
        <button className='bg-muted rounded-lg py-1 px-2 flex items-center gap-2 text-xs cursor-pointer' onClick={handleRunTests}> <Play width={16} height={16}/>Run</button>
        <button className='bg-primary rounded-lg py-1 px-2 flex items-center gap-2 text-xs cursor-pointer' onClick={()=>setWindow("Submit")}>Submit</button>
      </div>
    </div>
  )
}

export default CodeEvaluate
