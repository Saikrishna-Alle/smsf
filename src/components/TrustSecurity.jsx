import { motion } from 'framer-motion';

const TrustSecurity = () => {
  const securityFeatures = [
    {
      icon: "🔒",
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption.",
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
      darkBgGradient: "from-blue-900/20 to-indigo-900/20"
    },
    {
      icon: "🛡️",
      title: "SOC 2 Compliant",
      description: "Certified security controls and regular audits to ensure your data is always protected.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      darkBgGradient: "from-green-900/20 to-emerald-900/20"
    },
    {
      icon: "🌐",
      title: "Global Data Centers",
      description: "Redundant infrastructure across multiple regions for 99.9% uptime guarantee.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      darkBgGradient: "from-purple-900/20 to-pink-900/20"
    },
    {
      icon: "📋",
      title: "GDPR & FERPA Ready",
      description: "Full compliance with international data protection regulations and educational privacy laws.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      darkBgGradient: "from-orange-900/20 to-red-900/20"
    },
    {
      icon: "🔍",
      title: "Regular Security Audits",
      description: "Continuous monitoring and third-party security assessments to maintain the highest standards.",
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50",
      darkBgGradient: "from-teal-900/20 to-cyan-900/20"
    },
    {
      icon: "⚡",
      title: "Real-time Monitoring",
      description: "24/7 security monitoring with instant alerts and automated threat response systems.",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      darkBgGradient: "from-yellow-900/20 to-orange-900/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 dark:from-gray-950 dark:to-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold mb-6"
          >
            🛡️ Trust & Security
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Your Data is
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Safe with Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Enterprise-grade security and compliance to protect your institution's sensitive information
          </motion.p>
        </motion.div>

        {/* Grid Layout - 3 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`relative group bg-gradient-to-br ${feature.bgGradient} dark:${feature.darkBgGradient} rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden backdrop-blur-sm`}
            >
              {/* Background Pattern */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg`}
              >
                {feature.icon}
              </motion.div>

              {/* Content */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
              >
                {feature.title}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                {feature.description}
              </motion.p>

              {/* Hover Effect */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-full`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 dark:text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">FERPA Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">99.9% Uptime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSecurity; 