import React, { useEffect } from 'react'
import { Button } from './ui/button'
import { Ban, Captions, Check, CircleCheck, Cross, EyeOff, FlaskConical, Flower, Play, TestTube, X } from 'lucide-react'
import axios from 'axios'
import XpPopupCard from './XPPopUpCard'
import { BASE_URL } from '@/lib/utils'
import { supabase } from '@/lib/supabaseClient'
import Loader from './Loader'
import { useUserSession } from '@/hooks/useUserSession'


const CodeEvaluate = ({renderingInHomepage,disableTestcaseHeight, question, code, setTestCaseWindowHeight, submitClicked, setSubmitClicked}:any) => {
  const [window, setWindow] = React.useState("Test code")
  const [testCaseClicked, setTestCaseClicked] = React.useState("initial") // initial, loading, passed, failed
  const [responseT, setResponseT] = React.useState([])// response for single testcases 
  const [response, setResponse] = React.useState([])// response for all testcases 
  const [showXpCard, setShowXpCard] = React.useState(false);
  const [pastSolution, setPastSolution] = React.useState({} as any);

  const getCurrentUser = async () => {
    const { user, loading } = useUserSession();
    if (loading) return <Loader/>;
  console.log(user, "usa")
    return user;
  };
  
  const user:any = getCurrentUser();

  const handleTestCode = () => {
    if(!disableTestcaseHeight)
setTestCaseWindowHeight(50)
    setWindow("Test code")
    setTestCaseClicked("loading")
    const data = {
      code,
      testCases: [question?.test_cases[0]]
    }
    axios.post("http://localhost:8000/run/js", data).then(res=>{setResponseT(res.data.results); res.data.results[0].passed == true ? setTestCaseClicked("passed"): setTestCaseClicked("failed")}).catch(err=>console.log(err))
    // axios.post("https://codeexecutor.onrender.com/run", data).then(res=>{setResponseT(res.data.results); res.data.results[0].passed == true ? setTestCaseClicked("passed"): setTestCaseClicked("failed")}).catch(err=>console.log(err))

  }

  const handleSubmit = () => {
    if(!disableTestcaseHeight)
    setTestCaseWindowHeight(50)
    setWindow("Submit")
    setSubmitClicked("loading")
    const data = {
      code,
      testCases: question.test_cases
    }

    // axios.post("http://localhost:8000/run", data).then(res=>{
    axios.post("https://codeexecutor.onrender.com/run", data).then(res=>{
      res.data.results?.length > 0 ? setSubmitClicked("showResults"): setSubmitClicked("failed")
      setResponse(res.data.results)
      let allCasesPassed = true
      res.data.results.map((res:any)=>{if(res.passed == false) allCasesPassed = false})
        if(allCasesPassed){

          if(user){

            const { data, error }:any = supabase
            .from('submissions')
            .insert([
              {
                user_id: user?.id,
                question_id: question?.id,
                code,
                is_correct: true,
                runtime: 0.234,
                memory: 15.2
              }
            ])
        
          if (error) {
            console.error('Insert error:', error)
          } else {
            console.log('Submission inserted:', data)
            setShowXpCard(true)
          }

            
      }
    }
  }
    ).catch(err=>console.log(err))

  }

  const handleCompleted = () => {
    const request = {
      userId: user.id,
      questionId: question.id,
      solved: pastSolution.solved ? false : true,
    };
  };

  return (
    <div className='flex flex-col  min-w-[25vw] justify-between '>
      {
        showXpCard && <XpPopupCard question={question} xp={20} onClose={() => setShowXpCard(false)}/>
      }
        <div className='p-5'>
        <div className='flex items-center gap-7'>
                <button className={`text-xs flex items-center gap-1 text-muted-foreground cursor-pointer  ${window === "Test code" ? 'text-primary dark:text-white': 'hover:text-primary'}`} onClick={() => setWindow("Test code")}>
                    <TestTube width={19} height={19} /><span>
                        Test code
                    </span>
                </button>
                <button className={`text-xs flex items-center gap-2 text-muted-foreground cursor-pointer  ${window === "Submit" ? 'text-primary dark:text-white': 'hover:text-primary'}`} onClick={() => setWindow("Submit")}>
                    <Captions width={19} height={19} /><span>
                        Submit
                    </span>
                </button>

            </div>
            {
              window === "Test code" ?
              <div className='mt-4 text-xs'>
                {/* Test code */}
                {
                          testCaseClicked ==="passed" || testCaseClicked==="failed" ? responseT?.map((res:any, testCaseNumber) => (
                            <div className='flex items-center gap-3 py-3 border-b font-mono lowercase' key={testCaseNumber}>
                              {
                                res.passed ? 
                                <Check className='text-green-600 font-extrabold' width={14} height={14}/>
                               : <X className='text-red-500 font-extrabold' width={14} height={14}/>
                              }
                              <span className='flex items-center gap-2'>
                                <span className=''>{question.title}</span> <small>{'>'}</small> Testcase {testCaseNumber+1} <small>{'>'}</small> <span>{res.passed ? <span className='text-green-600'>Passed</span> : <span className='text-red-500'>Failed</span>}</span>
                              </span>
                            </div>
                          )): testCaseClicked === "loading" ? 
                          <div className='flex items-center gap-3 py-3 border-b font-mono lowercase '>
                            <Flower className='text-primary font-extrabold animate-spin' width={14} height={14}/>
                          <span className='flex items-center gap-2'>
                            <span className='animate-pulse'>please wait: Evaluating your code</span>
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
              <div className='mt-4 text-xs overflow-y-auto'>
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
                  
                    submitClicked == "showResults" ? //showResults will show all test casesss
                      <div className='overflow-y-auto  max-h-[100vh] mt-2'> 
                        {
                          response.map((res:any, testCaseNumber) => (
                            <div className='flex items-center gap-3 py-3 border-b font-mono lowercase' key={testCaseNumber}>
                              {
                                res.passed ? 
                                <Check className='text-green-600 font-extrabold' width={14} height={14}/>
                               : <X className='text-red-500 font-extrabold' width={14} height={14}/>
                              }
                              <span className='flex items-center gap-2'>
                                <span className=''>{question.title}</span> <small>{'>'}</small> Testcase {testCaseNumber+1} <small>{'>'}</small> <span>{res.passed ? <span className='text-green-600'>Passed</span> : <span className='text-red-500'>Failed</span>}</span>
                              </span>
                            </div>
                          ))
                        }
                      </div>

                  
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
                : <div className='flex items-center gap-3 py-3 border-b font-mono lowercase '>
                <Flower className='text-primary font-extrabold animate-spin' width={14} height={14}/>
              <span className='flex items-center gap-2'>
                <span className='animate-pulse'>Please wait: running your code against hidden test cases</span>
              </span>
            </div>
            }
              </div>
            }
        </div>
     {
      !renderingInHomepage &&  <div className='flex items-center gap-3 fixed bottom-1 lg:bottom-0 right-1 lg:right-8 '>
      <button className={`bg-muted rounded-lg py-1 px-2 flex items-center gap-2 text-xs cursor-pointer ${pastSolution?.solved && 'bg-primary'}`} onClick={handleCompleted}> <Check width={16} height={16} />Mark as completed</button>
      <button className='bg-muted rounded-lg py-1 px-2 flex items-center gap-2 text-xs cursor-pointer' onClick={handleTestCode}> <Play width={16} height={16}/>Run</button>
      <button className='bg-primary text-primary-foreground rounded-lg py-1 px-2 flex items-center gap-2 text-xs cursor-pointer' onClick={handleSubmit}>Submit</button>
    </div>
     }
    </div>
  )

}
export default CodeEvaluate
