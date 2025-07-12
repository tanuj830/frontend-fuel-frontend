import { motion } from "framer-motion";




export default function AnimatedHeading({sentence}:any) {
    const words = sentence.split(" ");
    
    const container = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.2, // delay between words
        },
      },
    };
    
    const wordAnimation = {
      hidden: {
        opacity: 0,
        y: 20,
        filter: "blur(8px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    };
  return (
    <motion.h4
      className="text-5xl lg:text-6xl font-semibold flex flex-wrap gap-x-2 break-all"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word:string, index:number) => (
        <motion.span key={index} variants={wordAnimation}>
          {word}
        </motion.span>
      ))}
    </motion.h4>
  );
}
