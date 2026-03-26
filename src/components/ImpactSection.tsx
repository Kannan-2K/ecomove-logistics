import { motion } from "framer-motion";

const impacts = [
  { label: "Cleaner Cities", value: "Zero Emission" },
  { label: "Smarter Logistics", value: "AI-Powered" },
  { label: "Lower Costs", value: "Up to 40%" },
  { label: "Sustainable Mobility", value: "100% Electric" },
];

const ImpactSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary mb-3 block">Impact</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Driving measurable{" "}
            <span className="gradient-text">change</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-8 rounded-2xl gradient-primary eco-shadow-lg"
            >
              <p className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">{item.value}</p>
              <p className="text-primary-foreground/80 text-sm font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Kho Kho · Hyperlocal Logistics Eco-Mobility Platform
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
