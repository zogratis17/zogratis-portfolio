
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-md border-t border-white/10 dark:border-gray-700/20 mt-20"
    >
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Hari Prasath N T (zogratis17). All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
