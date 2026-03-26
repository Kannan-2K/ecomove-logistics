import { motion } from "framer-motion";
import { TrendingUp, Route, Fuel, ShieldCheck } from "lucide-react";

const challenges = [
  {
    icon: TrendingUp,
    title: "Urban Exponential Growth",
    desc: "Cities are expanding rapidly, increasing last-mile delivery demand exponentially.",
  },
  {
    icon: Route,
    title: "Logistics Bottlenecks",
    desc: "Inefficient fleet utilization, fragmented operations, and rising delivery costs.",
  },
  {
    icon: Fuel,
    title: "Vehicular Pollution",
    desc: "Traditional fuel-based delivery fleets contribute significantly to urban emissions.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Complexity",
    desc: "Increasing regulations around emissions, fleet management, insurance, and safety.",
  },
];

const ChallengeSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary mb-3 block">The Challenge</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Urban logistics is under<br />
            <span className="gradient-text">exponential pressure</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:eco-shadow transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
