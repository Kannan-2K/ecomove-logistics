import { motion } from "framer-motion";
import { Zap, Users, Truck, FileCheck, Shield } from "lucide-react";

const connections = [
  { icon: Zap, label: "Electric Delivery Fleets" },
  { icon: Users, label: "Fleet Owners" },
  { icon: Truck, label: "Delivery Operators" },
  { icon: FileCheck, label: "Compliance Systems" },
  { icon: Shield, label: "Insurance Providers" },
];

const SolutionSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary mb-3 block">Our Solution</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            One intelligent platform,<br />
            <span className="gradient-text">entire ecosystem connected</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kho Kho delivers a Logistics 5.0 ecosystem managed through a single intelligent platform.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {connections.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-background border border-border eco-shadow"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground text-sm">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
