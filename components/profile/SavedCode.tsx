
// import React, { useEffect } from 'react'
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { supabase } from '@/lib/supabaseClient';
// import { useUserSession } from '@/hooks/useUserSession';
// import { useQuestion } from '@/hooks/useQuestion';



// const SavedCode = () => {

//   const [submissons, setSubmissions]  = React.useState([] as any)
//   const [questions, setQuestions]  = React.useState([] as any)

//   const {user, loading}:any = useUserSession()

//   useEffect(()=>{

//     const fetchSubmissons = async () =>{ 
//       const subs = await getUserSubmissions(user?.id)
//       setSubmissions(subs)
//       // console.log(subs, "randd")
//       const response:any = []
//       subs.forEach((submisson:any) => {
//         const { question, loading, error } = useQuestion(submisson.question_id);
//         if(question)response.push(question)
//           console.log(submisson.question_id, "randd")
//       });
//     setQuestions(response)
//     }
//     fetchSubmissons()
//   },[user])
// console.log(questions, "rand")
//   return (
//     <div>
//       <div>Saved Code</div>
//       <p>Manage your automatically saved code from the editor locally stored on this device.</p>

//       <div>
//       <Table>
//   {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
//   {/* <TableHeader>
//     <TableRow>
//       <TableHead className="w-[100px]">Invoice</TableHead>
//       <TableHead>Status</TableHead>
//       <TableHead>Method</TableHead>
//       <TableHead className="text-right">Amount</TableHead>
//     </TableRow>
//   </TableHeader> */}
//   <TableBody>
//     <TableRow>
//       <TableCell className="font-medium">INV001</TableCell>
//       <TableCell>Paid</TableCell>
//       <TableCell>Credit Card</TableCell>

//     </TableRow>
//   </TableBody>
// </Table>

//       </div>
//     </div>
//   )
// }

// const getUserSubmissions = async (userId: string) => {
//   const { data, error } = await supabase
//     .from('submissions')
//     .select('*')
//     .eq('user_id', userId);

//   if (error) {
//     console.error('Error fetching submissions:', error.message);
//     return [];
//   }

//   return data;
// };

// export default SavedCode
'use client'
import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { supabase } from '@/lib/supabaseClient';
import { useUserSession } from '@/hooks/useUserSession';
import DisplayTags from '../DisplayTags';
import { X } from 'lucide-react';

const SavedCode = () => {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [questions, setQuestions] = useState<Record<string, any>>({});
  const [showModel, setShowModel] = useState<any>(null); // selected question

  const { user } = useUserSession();

  useEffect(() => {
    const fetchSubmissionsAndQuestions = async () => {
      if (!user?.id) return;

      // Fetch submissions
      const { data: subs, error: subsError } = await supabase
        .from('submissions')
        .select('*')
        .eq('user_id', user.id);

      if (subsError) {
        console.error('Error fetching submissions:', subsError.message);
        return;
      }

      setSubmissions(subs);

      // Extract unique question IDs
      const questionIds = [...new Set(subs.map((s: any) => s.question_id))];

      // Fetch all questions in one go
      const { data: questionsData, error: questionsError } = await supabase
        .from('questions')
        .select('*')
        .in('id', questionIds);

      if (questionsError) {
        console.error('Error fetching questions:', questionsError.message);
        return;
      }

      // Map questions by ID
      const questionMap: Record<string, any> = {};
      questionsData.forEach((q: any) => {
        questionMap[q.id] = q;
      });

      setQuestions(questionMap);
    };

    fetchSubmissionsAndQuestions();
  }, [user]);

  
  return (
    <div className='relative'>
      {/* modal */}
      {
        showModel != null &&  <div className='h-full w-full fixed top-0 bottom-0 z-[1000] left-0 right-0 flex justify-center items-center bg-muted/35 backdrop-blur-sm'>
        <div className='bg-muted rounded-xl border shadow-2xl p-3 flex flex-col gap-5'>
          <div className='text-lg font-semibold flex justify-between items-center'>
            <span>{questions[showModel.question_id]?.title}</span>
            <button onClick={()=>setShowModel(null)}><X width={15} height={15}/></button>
          </div>
          <pre  className='bg-[#282A36] p-5 rounded-xl text-sm'>
<code>
          {showModel?.code}
</code>
          </pre>
        </div>
        {/* <button onClick={()=>setShowModel(null)}>close</button> */}
    </div>
      }
      <div className="text-2xl font-bold mb-2">Saved Code</div>
      <p className="mb-4">Manage your automatically saved code from the editor.</p>

      <Table className='bg-muted rounded-xl'>
        <TableBody>
          {submissions.map((sub: any) => (
            <TableRow className='cursor-pointer' onClick={()=>setShowModel(sub)} key={sub.id}>
              <TableCell className="font-medium py-3 px-3">
                {questions[sub.question_id]?.title || 'Unknown Question'}
              </TableCell>
              <TableCell className=' py-3 px-3'>{questions[sub.question_id]?.difficulty === "easy" ? <span className='text-green-400 text-xs'>Easy</span> 
              : questions[sub.question_id]?.difficulty === "medium" ?  <span className='text-yellow-400 text-xs'>Medium</span> 
              :  <span className='text-red-400 text-xs'>Hard</span> 
              }</TableCell>
              
              <TableCell className=' py-3 px-3'><DisplayTags question={questions[sub.question_id]}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SavedCode;
