import React, { useEffect } from 'react'
import { Button } from './ui/button'
import { Ban, Captions, Check, CircleCheck, Cross, EyeOff, FlaskConical, Play, TestTube, X } from 'lucide-react'
import axios from 'axios'
import XpPopupCard from './XPPopUpCard'
import { BASE_URL } from '@/lib/utils'
import { useAuth } from './AuthContext'

const CodeEvaluate = ({renderingInHomepage, question, setQuestion, code, setTestCaseWindowHeight, submitClicked, setSubmitClicked}:any) => {
  const [window, setWindow] = React.useState("Test code")
  const [testCaseClicked, setTestCaseClicked] = React.useState("initial") // initial, loading, passed, failed
  const [response, setResponse] = React.useState([])// response for all testcases 
  const [showXpCard, setShowXpCard] = React.useState(false);
  const [pastSolution, setPastSolution] = React.useState({} as any);
  
 const user = useAuth()

  const handleTestCode = () => {
    setWindow("Test code")
    setTestCaseClicked("loading")
    const data = {
      code,
      testCases: [question.testCases[0]]
    }
    axios.post("https://codeexecutor.onrender.com/run", data).then(res=>res.data.results[0].passed == true ? setTestCaseClicked("passed"): setTestCaseClicked("failed")).catch(err=>console.log(err))
  }


  const handleSubmit = () => {
    setTestCaseWindowHeight(50)
    setWindow("Submit")
    setSubmitClicked("loading")
    const data = {
      code,
      testCases: question.testCases
    }
    // axios.post("https://codeexecutor.onrender.com/run-all", data).then(res=>{
    axios.post("https://codeexecutor.onrender.com/run", data).then(res=>{
      res.data.results?.length > 0 ? setSubmitClicked("showResults"): setSubmitClicked("failed")
      setResponse(res.data.results)
      let allCasesPassed = true
      res.data.results.map((res:any)=>{if(res.passed == false) allCasesPassed = false})
        if(allCasesPassed){
          const user = localStorage.getItem("user")
          if(user){

            axios.post(`${BASE_URL}/api/questions/submit`, {user:JSON.parse(user), question, code}).then(res=>{
              // console.log(res.data, "109")
            })
            setShowXpCard(true)
            }
      }
    }
    ).catch(err=>console.log(err))

  }

  const handleCompleted = () => {
    const request = {
      userId: user.user.id,
      questionId: question.id,
      solved: pastSolution.solved ? false : true,
    };
  
    axios
      .put("http://localhost:8080/api/solved-by-user/update", request)
      .then(() => fetchSolution()) // Fetch the updated solution after marking as completed
      .catch((err) => console.log(err));
  };

  useEffect(()=>{fetchSolution()},[question, user])

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
              <div className='mt-7 text-xs overflow-y-auto'>
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
                            <div className='flex items-center gap-3 bg-muted p-3 rounded-xl mt-2' key={testCaseNumber}>
                              {
                                res.passed ? 
                                <Check className='text-green-600 font-extrabold' width={19} height={19}/>
                               : <X className='text-red-600 font-extrabold' width={19} height={19}/>
                              }
                              <span>
                                Test Case {res.testCaseNumber} {'>'} input : {JSON.stringify(question.testCases[testCaseNumber].inputs)}
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
                :<div className='flex items-center gap-3 bg-muted/75 p-5 rounded-xl mt-2 animate-pulse'>
                <span className='bg-muted w-10 h-10 rounded-full'></span>
                <span className='bg-muted w-full h-8 rounded-xl'>
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


function fetchSolution(){
  const request:any = {
    userId: user.user.id,
    questionId:question.id,


  }

  axios.get(`http://localhost:8080/api/solved-by-user/get?userId=${user.user.id}&questionId=${question.id}`, request).then(res=>setPastSolution(res.data)).catch(err=>console.log(err))
  // axios.get(`${BASE_URL}/api/solved-by-user/get?userId=${user.user.id}&questionId=${question.id}`, request).then(res=>setPastSolution(res.data)).catch(err=>console.log(err))
    
}
}

export default CodeEvaluate
