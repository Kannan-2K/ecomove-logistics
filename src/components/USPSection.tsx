import { motion } from "framer-motion";
import { Leaf, Layers, Tag, ShieldCheck } from "lucide-react";

const whyUs = [
  {
    icon: Leaf,
    title: "Carbon Neutral Economy",
    desc: "We're driving India's green logistics revolution — 100% electric fleet operations for zero-emission urban delivery.",
    color: "hsl(152 65% 30%)",
    bg: "hsl(152 65% 30% / 0.08)",
  },
  {
    icon: Layers,
    title: "Integrated Platform",
    desc: "A single unified platform managing fleet analytics, compliance, insurance, and rewards — no fragmented tools.",
    color: "hsl(200 75% 40%)",
    bg: "hsl(200 75% 40% / 0.08)",
  },
  {
    icon: Tag,
    title: "Competitive Pricing",
    desc: "Transparent, flexible pricing models designed for businesses of every size — from single operators to large enterprises.",
    color: "hsl(38 95% 48%)",
    bg: "hsl(38 95% 48% / 0.1)",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Reliability",
    desc: "Built for India's complex regulatory landscape with end-to-end compliance management, safety protocols, and certified operations.",
    color: "hsl(265 60% 50%)",
    bg: "hsl(265 60% 50% / 0.08)",
  },
];

const USPSection = () => {
  return (
    <section id="usp" className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">Why Choose Us</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Four reasons businesses<br />
            <span className="gradient-text">choose Kho Kho</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-5 p-7 rounded-2xl border border-border bg-card card-hover"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: item.bg }}
              >
                <item.icon className="w-7 h-7" style={{ color: item.color }} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
