import { motion } from 'framer-motion';

const FeatureHighlights = () => {
  const features = [
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Comprehensive dashboards and real-time insights to track student performance and institutional metrics.",
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
      darkBgGradient: "from-blue-900/20 to-indigo-900/20"
    },
    {
      icon: "🔐",
      title: "Secure & Compliant",
      description: "Enterprise-grade security with GDPR, FERPA, and SOC 2 compliance for data protection.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      darkBgGradient: "from-green-900/20 to-emerald-900/20"
    },
    {
      icon: "📱",
      title: "Mobile First",
      description: "Responsive design that works seamlessly across all devices with native mobile apps.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      darkBgGradient: "from-purple-900/20 to-pink-900/20"
    },
    {
      icon: "🤖",
      title: "AI-Powered",
      description: "Intelligent automation for grading, attendance, and personalized learning recommendations.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      darkBgGradient: "from-orange-900/20 to-red-900/20"
    },
    {
      icon: "🔗",
      title: "Easy Integration",
      description: "Seamless integration with existing systems, LMS platforms, and third-party applications.",
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50",
      darkBgGradient: "from-teal-900/20 to-cyan-900/20"
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Optimized performance with sub-second load times and real-time synchronization.",
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
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold mb-6"
          >
            ⚡ Key Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Powerful Features for
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent"> Modern Education</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Everything you need to manage your institution efficiently and effectively
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
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`relative group bg-gradient-to-br ${feature.bgGradient} dark:${feature.darkBgGradient} rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden`}
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureHighlights; 