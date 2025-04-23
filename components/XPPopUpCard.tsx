import React from 'react';
import { motion } from 'framer-motion';
import { Check, Coins, FolderClosed, X } from 'lucide-react';
import { Button } from './ui/button';

const XpPopupCard = ({ question, xp, onClose }:any) => {
  return (
    <motion.div
      className="fixed bottom-0 left-0 top-0 right-0 z-50 w-full h-full bg-muted/55"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col justify-center items-center text-center w-full h-full">
        <div className='flex flex-col min-h-72 min-w-96 bg-muted rounded-xl shadow-2xl gap-8 p-5'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>

        <Check className='bg-primary rounded-full p-1 font-extrabold' width={20} height={20}/>
            <h5 className='font-semibold text-md'>{question.title} Completed!</h5>
            </div>
            <button  className="cursor-pointer" onClick={onClose}><X/></button>
        </div>
    {/* <span className='text-yellow-400'><Coins width={100} height={100}/></span> */}
    <div className='flex items-center justify-center'>

    <img className='w-24 h-24' src="https://assets.leetcode.com/static_assets/public/images/coin.gif" alt="coins" />
    </div>
    <div>

        <h2 className="text-md font-medium pb-1">You've earned <span className="font-semibold">{xp} XP</span> 🎉</h2>
        <p className="text-muted-foreground text-xs"> Great job! Every step counts — keep leveling up!</p>
    </div>
     
            </div>
      </div>
    </motion.div>
  );
};

export default XpPopupCard;
