
import { AccordionDemo } from "@/components/Accordion";
import Home from "@/components/Home";
import Head from "next/head";
export default function App() {

  return (
    <>
    <Head>
        <title>GreatReact | Practice UI & Coding Questions</title>
        <meta name="description" content="Practice UI and algorithmic coding questions with live playgrounds. Powered by GreatReact." />
        <meta name="keywords" content="React, UI coding, Algo coding, JavaScript questions, frontend interview prep" />
        <meta property="og:title" content="GreatReact | UI & Algorithmic Coding Questions" />
        <meta property="og:description" content="A platform to solve and build UI coding challenges and algorithmic problems." />
        <meta property="og:url" content="https://greatreact.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.svg" />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
    <div className="w-full">
<Home/>
<div className="lg:px-[12vw] px-6">
<AccordionDemo/>
</div>
    </div>
    </>
  );
}
