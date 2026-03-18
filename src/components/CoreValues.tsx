import { Target, Eye, Users, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide a unified platform for monitoring, assessing, and improving government projects and initiatives across India.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become the most trusted and comprehensive analytics platform for evidence-based governance in India.",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "A dedicated team of professionals working together to drive excellence in government project management.",
  },
  {
    icon: Shield,
    title: "Our Commitment",
    description:
      "Committed to transparency, accuracy, and timely delivery of insights for better decision-making.",
  },
];

const CoreValues = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-10">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--gov-green)/0.2)] flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-gov-green" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
