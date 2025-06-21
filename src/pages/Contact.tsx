
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hariprasathnt@yahoo.com',
      href: 'mailto:hariprasathnt@yahoo.com',
      description: 'Drop me a line anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+919486312738',
      href: 'tel:+919486312738',
      description: 'Available for quick calls'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/zogratis17',
      href: 'https://github.com/zogratis17',
      description: 'Check out my repositories'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/hariprasathnt',
      href: 'https://linkedin.com/in/hariprasathnt',
      description: 'Let\'s connect professionally'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, 
            or just have a chat about technology and development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.label === 'GitHub' || method.label === 'LinkedIn' ? '_blank' : undefined}
              rel={method.label === 'GitHub' || method.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-700/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 block group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4 group-hover:shadow-lg transition-all duration-300">
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {method.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {method.description}
                  </p>
                </div>
              </div>
              
              <p className="text-purple-600 dark:text-purple-400 font-medium text-lg group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors duration-300">
                {method.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-700/30 p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to collaborate?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
              I'd love to hear from you. Let's create something amazing together!
            </p>
            <motion.a
              href="mailto:hariprasathnt@yahoo.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Mail size={20} />
              Send me an email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
