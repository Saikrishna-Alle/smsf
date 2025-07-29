import { motion } from 'framer-motion';

const TargetAudience = () => {
  const audiences = [
    {
      icon: "🎓",
      title: "Universities",
      description: "Comprehensive student management for higher education institutions with advanced analytics and reporting.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      darkBgGradient: "from-blue-900/20 to-cyan-900/20"
    },
    {
      icon: "🏫",
      title: "Schools",
      description: "Streamlined management for K-12 schools with parent communication and attendance tracking.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      darkBgGradient: "from-purple-900/20 to-pink-900/20"
    },
    {
      icon: "🎯",
      title: "Training Centers",
      description: "Specialized solutions for vocational training and professional development institutions.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      darkBgGradient: "from-green-900/20 to-emerald-900/20"
    },
    {
      icon: "🌍",
      title: "International Schools",
      description: "Multi-language support and global curriculum management for international institutions.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      darkBgGradient: "from-orange-900/20 to-red-900/20"
    },
    {
      icon: "💼",
      title: "Corporate Training",
      description: "Employee development and skill tracking for corporate training programs.",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      darkBgGradient: "from-indigo-900/20 to-purple-900/20"
    },
    {
      icon: "🔬",
      title: "Research Institutions",
      description: "Advanced analytics and research data management for academic research centers.",
      gradient: "from-teal-500 to-blue-500",
      bgGradient: "from-teal-50 to-blue-50",
      darkBgGradient: "from-teal-900/20 to-blue-900/20"
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold mb-6"
          >
            🎯 Who We Serve
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Perfect for Every
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"> Educational Institution</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            From small schools to large universities, our platform adapts to your needs
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
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`relative group bg-gradient-to-br ${audience.bgGradient} dark:${audience.darkBgGradient} rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`w-16 h-16 bg-gradient-to-r ${audience.gradient} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg`}
              >
                {audience.icon}
              </motion.div>

              {/* Content */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
              >
                {audience.title}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                {audience.description}
              </motion.p>

              {/* Hover Effect */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${audience.gradient} rounded-full`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience; 