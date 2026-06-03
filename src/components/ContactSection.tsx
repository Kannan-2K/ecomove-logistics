import { motion } from "framer-motion";
import { MessageCircle, Globe, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 gradient-hero relative overflow-hidden">
      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(hsl(150 100% 80%) 1px, transparent 1px), linear-gradient(90deg, hsl(150 100% 80%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-green-400 mb-3 block">Get In Touch</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to transform<br />
            <span className="gradient-text-light">your logistics?</span>
          </h2>
          <p className="text-white/60 text-lg mb-12">
            Reach out to us today and let's discuss how Kho Kho can power your last-mile delivery operations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="https://wa.me/917200070823"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold hover:opacity-90 transition-opacity gold-shadow"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href="tel:+917200070823"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91 72000 70823
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-16 relative z-10"
      >
        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} Kho Kho · Hyperlocal Logistics Eco-Mobility Platform · India
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
