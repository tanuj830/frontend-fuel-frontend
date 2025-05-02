import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  const accordionData = [
    {
      "title": "What is this platform about?",
      "description": "This platform helps you prepare for frontend interviews through real-world challenges, curated resources, and guidance from experienced developers and peers."
    },
    {
      "title": "Who is this platform for?",
      "description": "Whether you're a beginner aiming for your first job or an experienced dev targeting top companies, our platform is designed to level up your frontend interview skills."
    },
    {
      "title": "How is this platform different from others?",
      "description": "Unlike generic prep sites, we focus purely on frontend roles, with help from real developers—not recruiters—who've faced and cleared the same challenges."
    },
    {
      "title": "Do I need to pay to access the content?",
      "description": "We offer both free and premium content. Free users can access core lessons and challenges, while premium users get advanced problems, mock interviews, and mentor support."
    },
    {
      "title": "What kind of topics are covered?",
      "description": "We cover HTML, CSS, JavaScript, React, System Design for Frontend, UI Challenges, Performance Optimization, Coding Rounds, and Behavioral Questions."
    },
    {
      "title": "Is there a community or support group?",
      "description": "Yes! Join our active community of developers, where you can ask questions, get feedback, and find mock interview partners."
    },
    {
      "title": "Can I practice with real frontend challenges?",
      "description": "Absolutely. Our library includes hands-on UI tasks, real-world coding challenges, and take-home-style projects with solution walkthroughs."
    },
    {
      "title": "Do you offer mock interviews?",
      "description": "Yes — premium members can schedule mock interviews with experienced frontend developers for feedback and improvement."
    },
    {
      "title": "Will I get feedback on my solutions?",
      "description": "Yes, you can submit solutions for peer or mentor feedback, depending on your plan."
    },
    {
      "title": "How can I track my progress?",
      "description": "Your dashboard shows challenge completions, topic mastery, and readiness score based on your activity."
    }
  ]
  
  export function AccordionDemo() {

    return (
        <div>
<div className="text-4xl lg:text-5xl mt-32 mb-5 font-semibold">
    <div>Your commonly asked <br /> questions, answered</div>
</div>
      <Accordion type="single" collapsible className="w-full">
        {
            accordionData.map((data, ind)=>(
                <AccordionItem className="py-4" value={`item-${ind+1}`} key={data.title}>
          <AccordionTrigger className="text-lg lg:text-xl hover:decoration-0">{data.title}</AccordionTrigger>
          <AccordionContent className="text-[17px] lg:text-lg text-muted-foreground">
            {data.description}
          </AccordionContent>
        </AccordionItem>
            ))
        }
      </Accordion>
        </div>
    )
  }
  