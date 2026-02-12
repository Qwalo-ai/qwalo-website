import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What is Qwalo?",
      answer: "Qwalo is an AI-powered qualitative research platform that helps teams conduct in-depth user research through voice-based interviews. It enables marketers, product managers, and research teams to test ideas, validate products, and gather rich consumer insights—faster and at scale."
    },
    {
      question: "Which languages does Qwalo support?",
      answer: "Qwalo is built with India in mind. The platform supports multiple Indian languages, allowing you to conduct research in respondents’ native languages for more authentic and accurate insights. Language support will continue to expand over time."
    },
    {
      question: "How does AI voice-based interviewing work?",
      answer: "Qwalo uses AI to conduct natural, conversational interviews with respondents via voice. The AI asks adaptive follow-up questions based on responses, just like a skilled human interviewer, helping uncover deeper insights without requiring live moderation."
    },
    {
      question: "Who is Qwalo built for?",
      answer: (
        <div className="space-y-2">
          <p>Qwalo is designed for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Marketing and brand teams conducting consumer research</li>
            <li>Product managers validating features or concepts</li>
            <li>UX and research teams gathering user feedback</li>
            <li>Startups and enterprises looking to scale qualitative insights quickly</li>
          </ul>
          <p>If your team needs faster, deeper customer understanding, Qwalo fits right in.</p>
        </div>
      )
    },
    {
      question: "What types of research can I run on Qwalo?",
      answer: (
        <div className="space-y-2">
          <p>You can use Qwalo for a wide range of qualitative studies, including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Concept and idea testing</li>
            <li>Product feedback and usability research</li>
            <li>Brand perception and messaging studies</li>
            <li>Customer discovery and needs assessment</li>
            <li>Post-launch feedback and market validation</li>
          </ul>
        </div>
      )
    },
    {
      question: "How is Qwalo different from surveys or traditional interviews?",
      answer: "Unlike surveys, Qwalo captures why, not just what. And unlike traditional interviews, it doesn’t require scheduling, moderators, or long turnaround times. You get the depth of qualitative interviews with the speed and scalability of AI."
    },
    {
      question: "How do I get insights from the interviews?",
      answer: "Qwalo automatically transcribes, analyzes, and organizes interviews. You receive structured insights, key themes, and highlights—making it easy to share findings and act on them without manually reviewing hours of recordings."
    },
    {
      question: "Is Qwalo suitable for enterprise teams?",
      answer: "Yes. Qwalo is built as a secure, scalable B2B SaaS platform. It can support large research volumes, multiple teams, and complex studies while maintaining data privacy and consistency across projects."
    },
    {
      question: "Do I need research expertise to use Qwalo?",
      answer: "Not at all. Qwalo is designed to be intuitive and easy to use. Whether you’re a seasoned researcher or running your first study, the platform guides you through setup, execution, and analysis."
    }
  ];

  return (
    <section className="bg-white py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 tracking-tight">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100">
              <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-brand-purple hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
