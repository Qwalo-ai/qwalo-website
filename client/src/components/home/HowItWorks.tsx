const steps = [
  {
    title: "Design & Launch",
    points: [
      "Define Your Goals: Fully customize your interview scripts, logic, and research objectives to match your project.",
      "Rapid Setup: Most studies can be configured and launched within minutes, eliminating long planning cycles.",
      "Invite Respondents: Simply share a link or invite your target audience to participate from any device."
    ]
  },
  {
    title: "AI-Powered Interviewing",
    points: [
      "Natural Conversations: Qwalo’s AI conducts natural, voice-based interviews that feel like a skilled human moderator.",
      "Dynamic Probing: The AI asks adaptive follow-up questions in real-time to dig deeper into why.",
      "Multilingual Reach: Conduct interviews in multiple Indian languages to capture authentic, regional nuances."
    ]
  },
  {
    title: "Analyze & Act",
    points: [
      "Instant Synthesis: Automatically transcribes, organizes, and identifies recurring themes across all interviews.",
      "Traceable Evidence: Every insight or summary is linked directly back to the original voice recording.",
      "Shareable Reports: Receive structured highlights and key themes your team can act on immediately."
    ]
  }
];

export function HowItWorks() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 tracking-tight">From Setup to Insights in Minutes</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div key={step.title} className="rounded-2xl border border-purple-100 bg-gradient-to-b from-purple-50/50 to-white p-6">
              <div className="text-sm font-semibold text-brand-purple mb-2">Step {idx + 1}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {step.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
