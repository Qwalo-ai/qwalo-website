import { Card } from "@/components/ui/card";

const personas = [
  {
    title: "For Product Managers",
    description: "Validate Features and User Needs at the Speed of Your Sprint.",
  },
  {
    title: "For Marketers",
    description: "Understand your real customer in every language they speak.",
  },
  {
    title: "For UX & Research",
    description: "Run in-depth interviews at scale without manual moderation bottlenecks.",
  },
  {
    title: "For Startups",
    description: "Launch and validate product ideas quickly with traceable voice evidence.",
  },
];

export function Solutions() {
  return (
    <section className="py-20 px-4 bg-gray-50/60">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-10 tracking-tight">Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personas.map((persona) => (
            <Card key={persona.title} className="p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{persona.title}</h3>
              <p className="text-gray-600 text-sm">{persona.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
