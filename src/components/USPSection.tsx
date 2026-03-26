import { motion } from "framer-motion";
import { Leaf, BarChart3, Shield, FileCheck2, Trophy } from "lucide-react";

const usps = [
  {
    icon: Leaf,
    title: "Decarbonization",
    desc: "Accelerates adoption of electric mobility to reduce urban emissions.",
    accent: "152 60% 36%",
  },
  {
    icon: BarChart3,
    title: "Fleet Analytics",
    desc: "Real-time insights on vehicle performance, utilization, and delivery efficiency.",
    accent: "160 50% 45%",
  },
  {
    icon: Shield,
    title: "Insurance Enabler",
    desc: "Integrated ecosystem enabling smart insurance coverage for fleets and drivers.",
    accent: "170 45% 40%",
  },
  {
    icon: FileCheck2,
    title: "Compliance Management",
    desc: "Automated compliance for government regulations, documentation, and fleet operations.",
    accent: "145 55% 38%",
  },
  {
    icon: Trophy,
    title: "Rewards Platform",
    desc: "Gamified rewards system encouraging eco-friendly driving and operational efficiency.",
    accent: "140 50% 42%",
  },
];

const USPSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary mb-3 block">Key Differentiators</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            What makes Kho Kho{" "}
            <span className="gradient-text">unique</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`relative p-8 rounded-2xl border border-border bg-card hover:eco-shadow-lg transition-all duration-300 ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: `hsl(${item.accent} / 0.1)` }}
              >
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
