import { motion } from "framer-motion";
import { TrendingUp, Route, Fuel, ShieldCheck, ShoppingCart } from "lucide-react";

const challenges = [
  {
    icon: ShoppingCart,
    title: "Convenience Economy",
    desc: "Rapid rise in on-demand delivery expectations driving need for faster, more reliable hyperlocal logistics.",
    num: "01",
  },
  {
    icon: TrendingUp,
    title: "Urban Exponential Growth",
    desc: "Cities are expanding rapidly, increasing last-mile delivery demand exponentially — outpacing current infrastructure.",
    num: "02",
  },
  {
    icon: Fuel,
    title: "Vehicular Pollution",
    desc: "Traditional fuel-based delivery fleets contribute significantly to urban carbon emissions and air quality degradation.",
    num: "03",
  },
  {
    icon: ShieldCheck,
    title: "Government Compliances",
    desc: "Increasing regulations around emissions, fleet management, driver safety, insurance, and urban delivery permits.",
    num: "04",
  },
  {
    icon: Route,
    title: "Logistics Challenges",
    desc: "Inefficient fleet utilization, fragmented ops, route inefficiencies, and rising delivery costs erode margins.",
    num: "05",
  },
];

const ChallengeSection = () => {
  return (
    <section id="challenge" className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">Business Opportunity</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Urban logistics is under<br />
            <span className="gradient-text">exponential pressure</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Five converging forces are reshaping the Indian logistics landscape — and creating a massive opportunity.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {challenges.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group relative p-7 rounded-2xl bg-card border border-border card-hover ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <span className="font-display text-5xl font-bold text-border absolute top-5 right-6 leading-none select-none">{item.num}</span>
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5 relative z-10">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2 relative z-10">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
