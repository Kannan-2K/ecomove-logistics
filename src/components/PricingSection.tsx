import { motion } from "framer-motion";
import { MapPin, CreditCard, Plus, Clock, HardHat } from "lucide-react";

const pricingItems = [
  {
    icon: MapPin,
    category: "Transaction Fees",
    title: "Per KM Price",
    desc: "Pay only for what you use — transparent per-kilometre pricing with no hidden charges.",
    highlight: false,
  },
  {
    icon: CreditCard,
    category: "Subscription Fees",
    title: "Platform Subscription",
    desc: "Access the full Kho Kho platform — fleet management, analytics, compliance and more — under one subscription.",
    highlight: true,
  },
  {
    icon: Plus,
    category: "Addon Fees",
    title: "Add-on Services",
    desc: "Flexible add-ons for additional services tailored to your business needs.",
    highlight: false,
  },
  {
    icon: Clock,
    category: "Waiting Charges",
    title: "Waiting Time",
    desc: "Fair and transparent waiting charges for delays during pick-up or delivery.",
    highlight: false,
  },
  {
    icon: HardHat,
    category: "Helper Charges",
    title: "Helper Assistance",
    desc: "Additional staffing support for heavy or complex deliveries billed transparently.",
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">Pricing Model</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, transparent<br />
            <span className="gradient-text">pricing — no surprises</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Kho Kho uses a flexible multi-component pricing model so you only pay for what you actually need.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pricingItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.5 }}
              className={`relative p-7 rounded-2xl border card-hover overflow-hidden ${
                item.highlight
                  ? "gradient-primary text-white border-transparent eco-shadow-lg"
                  : "bg-background border-border"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${item.highlight ? "bg-white/15" : "bg-primary/8"}`}>
                <item.icon className={`w-6 h-6 ${item.highlight ? "text-white" : "text-primary"}`} />
              </div>
              <span className={`text-xs font-semibold uppercase tracking-widest mb-1 block ${item.highlight ? "text-white/70" : "text-primary"}`}>
                {item.category}
              </span>
              <h3 className={`font-display text-lg font-bold mb-2 ${item.highlight ? "text-white" : "text-foreground"}`}>{item.title}</h3>
              <p className={`text-sm leading-relaxed ${item.highlight ? "text-white/80" : "text-muted-foreground"}`}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground text-sm mb-4">Want a custom quote tailored to your fleet size?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity eco-shadow"
          >
            Get Custom Pricing
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
