import { motion } from "framer-motion";

const impacts = [
  { label: "Cleaner Cities", value: <>Zero<br />Emission</> },
  { label: "Smarter Logistics", value: <>AI-<br />Powered</> },
  { label: "Lower Costs", value: <>Up to<br />15%</> },
  { label: "Sustainable Mobility", value: <>100%<br />Electric</> },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">Impact</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Driving measurable{" "}
            <span className="gradient-text">change</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {impacts.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-8 rounded-2xl gradient-primary eco-shadow-lg"
            >
              <p className="font-display text-2xl md:text-3xl font-bold text-white mb-1">{item.value}</p>
              <p className="text-white/70 text-sm font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
