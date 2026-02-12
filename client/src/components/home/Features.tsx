import { Card } from "@/components/ui/card";
import { AudioWaveform, Languages, Lightbulb, SearchCheck } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <AudioWaveform className="w-6 h-6 text-brand-purple" />,
      title: "Dynamic Probing",
      description: "AI that asks adaptive follow-ups to dig deeper into why."
    },
    {
      icon: <Languages className="w-6 h-6 text-brand-purple" />,
      title: "Multilingual AI",
      description: "Support for multiple local languages for authentic insights."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-brand-purple" />,
      title: "Instant Themes",
      description: "Automatically identifies recurring patterns across large datasets."
    },
    {
      icon: <SearchCheck className="w-6 h-6 text-brand-purple" />,
      title: "Traceable Insights",
      description: "Every finding links back to the original voice evidence."
    }
  ];

  return (
    <section className="relative z-20 -mt-24 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-white/80 backdrop-blur-md border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center mb-4 group-hover:bg-brand-purple/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
