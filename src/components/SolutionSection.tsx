import { motion } from "framer-motion";
import { Zap, Users, Truck, FileCheck, Shield, BarChart3, Trophy, Leaf } from "lucide-react";

const offerings = [
  {
    icon: Leaf,
    num: "01",
    title: "Decarbonization",
    desc: "Drive adoption of 100% electric delivery fleets to reduce urban carbon footprints and meet emission norms.",
  },
  {
    icon: Shield,
    num: "02",
    title: "Insurance Enabler",
    desc: "Integrated ecosystem enabling smart, data-driven insurance coverage for fleet owners, vehicles, and drivers.",
  },
  {
    icon: Trophy,
    num: "03",
    title: "Rewards Platform",
    desc: "Gamified incentives for eco-friendly driving, on-time deliveries, and efficient fleet operations.",
  },
  {
    icon: BarChart3,
    num: "04",
    title: "Fleet Analytics",
    desc: "Real-time insights on vehicle performance, utilization rates, delivery efficiency, and driver behavior.",
  },
  {
    icon: FileCheck,
    num: "05",
    title: "Compliance Management",
    desc: "Automated handling of government regulations, permits, documentation, and fleet compliance requirements.",
  },
];

const stakeholders = [
  { icon: Zap, label: "Electric Delivery Fleets" },
  { icon: Users, label: "Fleet Owners" },
  { icon: Truck, label: "Delivery Operators" },
  { icon: FileCheck, label: "Compliance Systems" },
  { icon: Shield, label: "Insurance Providers" },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">What We Offer</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hyperlocal Logistics<br />
            <span className="gradient-text">Eco-Mobility Platform</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            One intelligent platform connecting every stakeholder in the logistics ecosystem.
          </p>
        </motion.div>

        {/* 5 USPs grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.5 }}
              className="relative p-7 rounded-2xl bg-background border border-border card-hover overflow-hidden"
            >
              <span className="font-display text-6xl font-bold text-border/40 absolute -top-2 right-4 leading-none select-none">{item.num}</span>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stakeholder tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-medium text-muted-foreground mb-5 uppercase tracking-widest">Ecosystem Connected</p>
          <div className="flex flex-wrap justify-center gap-3">
            {stakeholders.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-background eco-shadow"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
