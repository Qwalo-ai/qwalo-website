import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What is a power dialer and how does it work?",
      answer: "A power dialer is an automated telephone dialing system that connects sales agents with prospects more efficiently. Unlike manual dialing, Qwalo automatically dials the next number on your list as soon as a call ends, significantly increasing talk time and productivity."
    },
    {
      question: "Is Qwalo TCPA Compliant?",
      answer: "Yes, Qwalo is built with compliance in mind. We provide tools and features to help ensure your outreach adheres to TCPA regulations, including DNC (Do Not Call) list management and call time restrictions."
    },
    {
      question: "How Does Qwalo Compare to Traditional Dialers?",
      answer: "Traditional dialers often have lag times or 'telemarketer delays.' Qwalo uses advanced AI to ensure instant connections with zero lag, providing a seamless experience for both the agent and the prospect. Plus, our AI transcription sets us apart."
    },
    {
      question: "Can I use Qwalo with my CRM?",
      answer: "Absolutely. Qwalo integrates seamlessly with major CRMs like Salesforce, HubSpot, Pipedrive, and Zoho. All call notes, recordings, and outcomes are automatically synced to your CRM in real-time."
    },
    {
      question: "What kind of support does Qwalo provide?",
      answer: "We offer 24/7 customer support via chat and email for all plans. Enterprise customers also receive a dedicated account manager and priority phone support to ensure your team's success."
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
