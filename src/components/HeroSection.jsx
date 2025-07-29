import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
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
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30"
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
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30"
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
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold shadow-lg"
          >
            <span className="mr-2">🚀</span>
            The Future of Student Management
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Transform
            </span>
            <br />
            <span className="text-gray-800 dark:text-gray-200">
              Your Institution
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Streamline student management with our comprehensive platform. 
            <span className="font-semibold text-blue-600 dark:text-blue-400"> 10x faster</span> than traditional systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-lg font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 transform"
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { number: "10K+", label: "Students Managed" },
              { number: "500+", label: "Institutions" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 