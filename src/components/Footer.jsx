import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'API', href: '#' }
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Status', href: '#' },
      { name: 'Documentation', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'YouTube', icon: '📺', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 dark:from-gray-950 dark:to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.h3
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
            >
              SMS Pro
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-6 leading-relaxed"
            >
              Transforming education through innovative student management solutions. 
              Empowering institutions to focus on what matters most - student success.
            </motion.p>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + categoryIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h4
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + categoryIndex * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg font-semibold text-white mb-4 capitalize"
              >
                {category}
              </motion.h4>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 + categoryIndex * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + categoryIndex * 0.1 + linkIndex * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: '#60A5FA' }}
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm"
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © 2024 SMS Pro. All rights reserved.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-gray-400 text-sm"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>System Status</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-gray-400 text-sm"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>99.9% Uptime</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 