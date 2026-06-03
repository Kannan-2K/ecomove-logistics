import { motion } from "framer-motion";
import { Search, HandshakeIcon, ClipboardCheck, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Customer Discovery & Finalize Requirements",
    desc: "We start by deeply understanding your operations, fleet size, delivery patterns, and compliance needs to craft the right solution.",
  },
  {
    icon: HandshakeIcon,
    num: "02",
    title: "Finalize Pricing & Business Terms",
    desc: "Agree on transparent pricing, SLAs, and commercial terms tailored to your business model — no surprises.",
  },
  {
    icon: ClipboardCheck,
    num: "03",
    title: "Customer Onboarding Formalities",
    desc: "Smooth documentation, platform setup, and fleet integration handled by our dedicated onboarding team.",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Go Live",
    desc: "Launch your Kho Kho-powered logistics operations and start experiencing smarter, greener last-mile delivery.",
  },
];

const NextStepsSection = () => {
  return (
    <section id="steps" className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">Next Steps</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Getting started is<br />
            <span className="gradient-text">simple and fast</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Four steps from discovery to go-live — our team guides you every step of the way.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[calc(12.5%+2.5rem)] right-[calc(12.5%+2.5rem)] h-px bg-border" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative text-center"
              >
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center eco-shadow-lg mx-auto">
                    <step.icon className="w-9 h-9 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-xs font-display font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-2 px-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed px-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;
