
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolling down (not up) and has scrolled more than 100px
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Clear any existing timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        
        // Set a timeout to navigate after scrolling stops for 500ms
        scrollTimeoutRef.current = setTimeout(() => {
          navigate('/about');
        }, 500);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [navigate]);

  const scrollToAbout = () => {
    // Navigate to About page
    window.location.href = '/about';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <motion.div 
        variants={containerVariants}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-700/30 p-8 md:p-12 shadow-2xl"
          >
            {/* Profile Image Placeholder */}
            <motion.div
              variants={itemVariants}
              className="mb-8 flex justify-center"
            >
              <img src='./src/assets/bg1.png' alt="Profile" className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-lg" />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Hari Prasath N T
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-purple-400 dark:text-purple-300 mb-8"
            >
              AI/ML Engineer | Data Scientist
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              Passionate about building intelligent, impactful AI solutions that make a difference.
              I love transforming data-driven challenges into simple, elegant experiences.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                View My Work
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/50 transform hover:scale-105 transition-all duration-200"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-col items-center"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">Learn more about me or scroll down</p>
            <motion.button
              onClick={scrollToAbout}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 dark:text-gray-400 hover:text-purple-400 dark:hover:text-purple-300 transition-colors duration-200 cursor-pointer"
            >
              <ArrowDown size={32} />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;