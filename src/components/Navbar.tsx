import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X, Linkedin, Code, MessageSquare, BookOpen, BarChart3, User, Award, ExternalLink } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import lclogo from 'lc.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Blog', path: 'https://medium.com/@hariprasathnt', external: true },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/hariprasathnt', icon: Linkedin },
    { name: 'LeetCode', url: 'https://leetcode.com/zogratis17', icon: Code },
    { name: 'Codolio', url: 'https://codolio.com/profile/zogratis17', icon: User },
    { name: 'Medium', url: 'https://medium.com/@hariprasathnt', icon: MessageSquare },
    { name: 'Kaggle', url: 'https://www.kaggle.com/hariprasathnt', icon: BarChart3 },
    { name: 'Google Developers', url: 'https://developers.google.com/profile/u/hariprasathnt', icon: BookOpen },
    { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/hariprasathnt', icon: Code },
    { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/user/hariprasathnt/', icon: Award },
  ];

  const isActive = (path: string) => location.pathname === path;

   const handleNavClick = (item: any) => {
    if (item.external) {
      window.open(item.path, '_blank', 'noopener,noreferrer');
    }
    setIsOpen(false);
  };
 return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-gray-900/20 backdrop-blur-md border-b border-white/20 dark:border-gray-700/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation - moved to left */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                item.external ? (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:text-purple-400 dark:hover:text-purple-300 flex items-center"
                  >
                    {item.name}
                    <ExternalLink size={14} className="ml-1" />
                  </motion.button>
                ) : (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive(item.path)
                          ? 'text-purple-400 bg-purple-400/10'
                          : 'text-gray-700 dark:text-gray-300 hover:text-purple-400 dark:hover:text-purple-300'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )
              ))}
            </div>
          </div>

          {/* Social Icons and Theme Toggle - moved to right */}
          <div className="flex items-center space-x-2">
            {/* Social Icons - hidden on mobile for space */}
            <div className="hidden lg:flex items-center space-x-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-md bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 hover:text-purple-400 dark:hover:text-purple-300 transition-colors duration-200"
                  title={social.name}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-md bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 hover:text-purple-400 dark:hover:text-purple-300 transition-colors duration-200"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 text-gray-700 dark:text-gray-300"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/10 dark:bg-gray-900/20 backdrop-blur-md border-t border-white/20 dark:border-gray-700/30"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              item.external ? (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-left block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:text-purple-400 dark:hover:text-purple-300 flex items-center"
                >
                  {item.name}
                  <ExternalLink size={14} className="ml-1" />
                </motion.button>
              ) : (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-purple-400 bg-purple-400/10'
                        : 'text-gray-700 dark:text-gray-300 hover:text-purple-400 dark:hover:text-purple-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              )
            ))}
            
            {/* Social Icons in mobile menu */}
            <div className="pt-4 border-t border-white/20 dark:border-gray-700/30">
              <div className="grid grid-cols-4 gap-2 px-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-md bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 hover:text-purple-400 dark:hover:text-purple-300 transition-colors duration-200 flex items-center justify-center"
                    title={social.name}
                  >
                    <social.icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;