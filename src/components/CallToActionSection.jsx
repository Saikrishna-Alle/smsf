import { motion } from 'framer-motion';

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-700 dark:via-purple-700 dark:to-pink-700 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [180, 360, 180],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/5 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold border border-white/30"
          >
            <span className="mr-2">🚀</span>
            Ready to Transform Your Institution?
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Start Your
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Digital Transformation
            </span>
            Today
          </motion.h2>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Join thousands of institutions already using our platform to streamline their operations and enhance student success.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              Schedule Demo
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { number: "14-Day", label: "Free Trial" },
              { number: "No Setup", label: "Fees" },
              { number: "24/7", label: "Support" },
              { number: "Cancel", label: "Anytime" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {item.number}
                </div>
                <div className="text-white/80 text-sm">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <p className="text-white/70 text-sm mb-4">Trusted by leading institutions worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["🏫", "🎓", "🌍", "💼", "🔬", "⚡"].map((icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl"
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection; 