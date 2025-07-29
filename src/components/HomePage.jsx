import { motion } from 'framer-motion';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import TargetAudience from './TargetAudience';
import FeatureHighlights from './FeatureHighlights';
import TrustSecurity from './TrustSecurity';
import CallToActionSection from './CallToActionSection';
import Footer from './Footer';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-950 transition-all duration-500"
    >
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Who We Serve Section */}
        <TargetAudience />

        {/* Key Features Section */}
        <FeatureHighlights />

        {/* Trust and Security Section */}
        <TrustSecurity />

        {/* Call to Action Section */}
        <CallToActionSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default HomePage; 