import { motion } from "framer-motion";
import { ArrowDown, Leaf, Zap, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero px-6 pt-20">
      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(hsl(150 100% 80%) 1px, transparent 1px), linear-gradient(90deg, hsl(150 100% 80%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Glow orbs */}
      <motion.div
        className="absolute top-1/4 right-[20%] w-96 h-96 rounded-full"
        style={{ background: 'radial-gradient(circle, hsl(152 65% 40% / 0.15), transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-[15%] w-72 h-72 rounded-full"
        style={{ background: 'radial-gradient(circle, hsl(38 95% 52% / 0.08), transparent 70%)' }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
        >
          <Leaf className="w-4 h-4 text-green-400" />
          <span className="text-sm font-medium text-white/70">Logistics 5.0 · Hyperlocal Eco-Mobility Platform</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
        >
          <span className="text-white">Kho</span>{" "}
          <span className="gradient-text-light">Kho</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-4"
        >
          Next-generation <span className="text-white font-semibold">Hyperlocal Logistics</span> platform powering sustainable last-mile delivery across India.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10"
        >
          Electric mobility · Fleet analytics · Compliance automation · Insurance enablement
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="#solution"
            className="px-8 py-3.5 rounded-xl gradient-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity eco-shadow"
          >
            Explore Platform
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl border border-white/20 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Hero stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16"
        >
          {[
            { icon: Zap, value: "100% Electric", label: "Fleet Powered" },
            { icon: TrendingUp, value: "Up to 15%", label: "Cost Reduction" },
            { icon: Leaf, value: "Zero Emission", label: "Urban Delivery" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-white font-display font-bold text-lg leading-tight">{stat.value}</p>
                <p className="text-white/50 text-xs">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ArrowDown className="w-5 h-5 text-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
