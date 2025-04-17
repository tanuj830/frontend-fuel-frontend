import React, { useEffect } from 'react'
import { Button } from './ui/button'
import { Ban, Captions, Check, CircleCheck, Cross, EyeOff, FlaskConical, Play, TestTube, X } from 'lucide-react'
import axios from 'axios'

const CodeEvaluate = ({question, setQuestion, code}:any) => {
  const [window, setWindow] = React.useState("Test code")
  const [testCaseClicked, setTestCaseClicked] = React.useState("initial") // initial, loading, passed, failed
  const [submitClicked, setSubmitClicked] = React.useState("initial") // initial, loading, showResults, failed
  const [response, setResponse] = React.useState([])// response for all testcases 
  
 

  const handleTestCode = () => {
    setWindow("Test code")
    setTestCaseClicked("loading")
    const data = {
      code,
      testCases: question.testCases
    }
    axios.post("https://codeexecutor.onrender.com/run-single", data).then(res=>res.data.result == true ? setTestCaseClicked("passed"): setTestCaseClicked("failed")).catch(err=>console.log(err))
  }
  const handleSubmit = () => {
    setWindow("Submit")
    setSubmitClicked("loading")
    const data = {
      code,
      testCases: question.testCases
    }
    axios.post("https://codeexecutor.onrender.com/run-all", data).then(res=>{
      res.data.results?.length > 0 ? setSubmitClicked("showResults"): setSubmitClicked("failed")
      setResponse(res.data.results)}
    ).catch(err=>console.log(err))

  }

  const handleCompleted = () => {
    const clonedQuestion = {...question}
    clonedQuestion.completed = true
    setQuestion(clonedQuestion)
  }
  console.log(testCaseClicked)
  return (
    <div className='flex flex-col justify-between'>
        <div className='p-5'>
        <div className='flex items-center gap-7'>
                <button className={`text-xs flex items-center gap-1 text-muted-foreground cursor-pointer  ${window === "Test code" ? 'text-primary-foreground': 'hover:text-primary'}`} onClick={() => setWindow("Test code")}>
                    <TestTube width={19} height={19} /><span>
                        Test code
                    </span>
                </button>
                <button className={`text-xs flex items-center gap-2 text-muted-foreground cursor-pointer  ${window === "Submit" ? 'text-primary-foreground': 'hover:text-primary'}`} onClick={() => setWindow("Submit")}>
                    <Captions width={19} height={19} /><span>
                        Submit
                    </span>
                </button>

            </div>
            {
              window === "Test code" ?
              <div className='mt-7 text-xs'>
                {/* Test code */}
                {
                  testCaseClicked == "passed" ?
                  <div className='flex items-center gap-3 bg-muted p-3 rounded-xl'>
                  <Check className='text-green-600 font-extrabold' width={19} height={19}/>
                  <span>
                    Test Case {'>'} input: {JSON.stringify(question.testCases[0].inputs)}
                  </span>
                </div>
               : testCaseClicked === "failed" ? <div className='flex items-center gap-3 bg-muted p-3 rounded-xl mt-2'>
                  <X className='text-red-600 font-extrabold' width={19} height={19}/>
                  <span>
                    Test Case {'>'} numbers = [1, 2, 3]
                  </span>
                </div>
               : testCaseClicked === "loading" ? <div className='flex items-center gap-3 bg-muted/75 p-5 rounded-xl mt-2 animate-pulse'>
                  <span className='bg-muted w-10 h-10 rounded-full'></span>
                  <span className='bg-muted w-full h-8 rounded-xl'>
                  </span>
                </div>:
                <div className='flex items-center justify-center gap-3 bg-muted p-4 rounded-xl mt-2'>
                  <div className='flex flex-col items-center gap-2'>
                <FlaskConical className=' font-extrabold' width={21} height={21}/>
                <div className='flex flex-col items-center'>

                <strong className='text-md font-semibold'>
                Test your code
                </strong>
                <span className='text-md text-muted-foreground'>
                Run your code with test case before submitting.
                </span>
                </div>
                  </div>
              </div>
                }
              </div>:
              <div className='mt-7 text-xs '>
                {/* Submit */}
                {
                  submitClicked == "initial" ?
                  <div className='flex items-center justify-center gap-3 bg-muted p-4 rounded-xl mt-2'>
                  <div className='flex flex-col items-center gap-2'>
                <CircleCheck className=' font-extrabold' width={21} height={21}/>
                <div className='flex flex-col items-center'>

                <strong className='text-md font-semibold'>
                Submit your code
                </strong>
                <span className='text-md text-muted-foreground'>
                Submit your code to check against all test cases.
</span>
                </div>
                  </div>
              </div>
                  :
                  submitClicked == "showResults" ? //showResults will show all test cases
                  <>
                  {
                    response.map((res:any)=>(
                      <div className='flex items-center gap-3 bg-muted p-3 rounded-xl mt-2' key={res.testCaseNumber}>
                        {
                          res.passed ? 
                          <Check className='text-green-600 font-extrabold' width={19} height={19}/>
                         : <X className='text-red-600 font-extrabold' width={19} height={19}/>
                        }
                  <span>
                    Test Case {res.testCaseNumber} {'>'} input : {JSON.stringify(res.inputs)}
                  </span>
                </div>
                    ))
                }
                  </>
                : submitClicked == "failed" ? 
                <div className='flex items-center justify-center gap-3 bg-muted p-4 rounded-xl mt-2'>
                <div className='flex flex-col items-center gap-2'>
              <Ban className=' font-extrabold text-red-600' width={21} height={21}/>
              <div className='flex flex-col items-center'>

              <strong className='text-md font-semibold'>
              Unexpected error
              </strong>
              <span className='text-md text-muted-foreground'>
              Something went wrong, try again after some time
</span>
              </div>
                </div>
            </div>
                :<div className='flex items-center gap-3 bg-muted/75 p-5 rounded-xl mt-2 animate-pulse'>
                <span className='bg-muted w-10 h-10 rounded-full'></span>
                <span className='bg-muted w-full h-8 rounded-xl'>
                </span>
              </div>
            }
              </div>
            }
        </div>
      <div className='flex items-center gap-3 fixed bottom-1 lg:bottom-0 right-1 lg:right-8 '>
        <button className={`bg-muted rounded-lg py-1 px-2 flex items-center gap-2 text-xs cursor-pointer ${question.completed && 'bg-primary'}`} > <Check width={16} height={16} onClick={()=>handleCompleted}/>Mark as completed</button>
        <button className='bg-muted rounded-lg py-1 px-2 flex items-center gap-2 text-xs cursor-pointer' onClick={handleTestCode}> <Play width={16} height={16}/>Run</button>
        <button className='bg-primary rounded-lg py-1 px-2 flex items-center gap-2 text-xs cursor-pointer' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default CodeEvaluate
