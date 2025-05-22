"use client";
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
  const [user, setUser] = React.useState({} as any);
  const { user: sessionUser, loading }:any = useUserSession();
  
  useEffect(() => {
    if (!loading && sessionUser) {
      setUser(sessionUser);
    }
  }, [sessionUser, loading]);

  const handleTestCode = () => {
    if(!disableTestcaseHeight)
setTestCaseWindowHeight(50)
    setWindow("Test code")
    setTestCaseClicked("loading")
    const data = {
      code,
      testCases: [question?.test_cases[0]]
    }

    if(question.category_id === "52f876e3-de64-46d4-b9e3-91c83e12a518") {// algo coding  codeexecutor.onrender.com
      axios.post("https://codeexecutor.onrender.com/run", data).then(res=>{setResponseT(res.data.results); res.data.results[0].passed == true ? setTestCaseClicked("passed"): setTestCaseClicked("failed")}).catch(err=>console.log(err))

   }

   else if(question.category_id === "2ba2cdee-70e8-42bb-8fdd-6a7bb04367a0"){ // js functions
      axios.post("https://codeexecutor.onrender.com/run-js-function", data).then(res=>{setResponseT(res.data.results); res.data.results[0].passed == true ? setTestCaseClicked("passed"): setTestCaseClicked("failed")}).catch(err=>console.log(err))

   }
  }


  const handleSubmit = async () => {
    if (!disableTestcaseHeight) setTestCaseWindowHeight(50);
    setWindow("Submit");
    setSubmitClicked("loading");
  
    const data = {
      code,
      testCases: question.test_cases,
    };
  
    try {
      let res:any = undefined
      console.log(question, "objectss")
      
      if(question.category_id === "52f876e3-de64-46d4-b9e3-91c83e12a518") {// algo coding  codeexecutor.onrender.com
         res = await axios.post("https://codeexecutor.onrender.com/run", data);
      }

      else if(question.category_id === "2ba2cdee-70e8-42bb-8fdd-6a7bb04367a0"){ // js functions
         res = await axios.post("https://codeexecutor.onrender.com/run-js-function", data);
      }

      const results = res.data.results;
      setResponse(results);
  
      if (results?.length > 0) {
        setSubmitClicked("showResults");
      } else {
        setSubmitClicked("failed");
      }
  
      let allCasesPassed = true;
      results.forEach((res: any) => {
        if (res.passed === false) allCasesPassed = false;
      });
  
      if (allCasesPassed && user) {
        const { data: insertData, error } = await supabase.from("submissions")
        .upsert(
          [
            {
              user_id: user.id,
              question_id: question?.id,
              code,
              submitted_at: new Date().toISOString(),
              is_correct: true,
              runtime: 0.234, // Replace with real values if available
              memory: 15.2,
            },
          ],
          {
            onConflict: ['user_id,question_id'] as any // Define fields to check for conflicts
          }
        );
  
        if (error) {
          console.error("Insert error:", error);
        } else {
          console.log("Submission inserted:", insertData);
          setShowXpCard(true);
        }
      }
    } catch (err) {
      console.log("Submission error:", err);
    }
  };


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
                              <span className='flex items-center gap-2 text-nowrap'>
                                <span className='text-nowrap'>{question.title}</span> <small>{'>'}</small> Testcase {testCaseNumber+1} <small>{'>'}</small> <span>{res.passed ? <span className='text-green-600'>Passed</span> : <span className='text-red-500'>Failed</span>}</span>
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
                              <span className='flex items-center gap-2 text-nowrap'>
                                <span className='text-nowrap'>{question.title}</span> <small>{'>'}</small> Testcase {testCaseNumber+1} <small>{'>'}</small> <span>{res.passed ? <span className='text-green-600'>Passed</span> : <span className='text-red-500'>Failed</span>}</span>
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
      <button className={`bg-muted rounded-lg py-1 px-2 flex items-center gap-2 text-xs cursor-pointer ${pastSolution?.solved && 'gradient'}`} onClick={handleCompleted}> <Check width={16} height={16} />Mark as completed</button>
      <button className='bg-muted rounded-lg py-1 px-2 flex items-center gap-2 text-xs cursor-pointer' onClick={handleTestCode}> <Play width={16} height={16}/>Run</button>
      <button className='gradient text-primary-foreground rounded-lg py-1 px-2 flex items-center gap-2 text-xs cursor-pointer' onClick={handleSubmit}>Submit</button>
    </div>
     }
    </div>
  )

}
export default CodeEvaluate
