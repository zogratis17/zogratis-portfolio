
import { motion } from 'framer-motion';
import { Github, Link as LinkIcon } from 'lucide-react';

const Projects = () => {
 const projects = [
  {
    id: 1,
    title: "Virtual HR - Mock Interview Simulator",
    description:
      "A Streamlit-based app that uses the Google Gemini API to simulate realistic, AI-powered mock interviews from uploaded resumes and job roles.",
    github: "https://github.com/your-username/virtual-hr",
    demo: "https://gemprep.streamlit.app/",
    tech: ["Python", "Streamlit", "Google Gemini API", "PyPDF2"]
   },
  {
  id: 2,
  title: "Know-Ledge - AI-Powered Learning Platform",
  description:
    "A cross-platform AI-powered study assistant built with Flutter and Firebase, integrating Gemini AI, document scanning, quizzes, flashcards, and real-time chat features.",
  github: "https://github.com/zogratis17/Know-ledge",
  // demo: "https://your-demo-url.com",
  tech: ["FlutterFlow", "Firebase", "Dart", "Gemini API", "Firestore"]
},
  {
    id: 3,
    title: "Jarvis - Voice AI Assistant",
    description:
      "A virtual assistant powered by Google's Gemini and SpeechRecognition that listens to voice commands and responds via terminal.",
    github: "https://github.com/your-username/jarvis-assistant",
    // demo: "https://your-demo-url.com",
    tech: ["Python", "SpeechRecognition", "Google Gemini API"]
  },
  {
    id: 4,
    title: "Playstore Reviews Sentiment Analyzer",
    description:
      "Scrapes reviews from Android apps on the Play Store and classifies them using VADER sentiment analysis in Python.",
    github: "https://github.com/your-username/playstore-reviews",
    // demo: "https://your-demo-url.com",
    tech: ["Python", "Selenium", "NLTK", "VADER"]
  },
  {
    id: 5,
    title: "TrainMachan.com - Railway Ticket Reservation",
    description:
      "A Python + MySQL project for Chennai Suburban Railway that calculates fares, generates tickets, and manages bookings.",
    github: "https://github.com/your-username/trainmachan",
    // demo: "https://your-demo-url.com",
    tech: ["Python", "MySQL", "Tkinter"]
   },
  {
    id: 6,
    title: "Text-to-Image Generator",
    description:
      "An interactive web app that generates images from text using Hugging Face's FLUX.1-dev model and Streamlit UI.",
    github: "https://github.com/your-username/text-to-image-generator",
    // demo: "https://your-demo-url.com",
    tech: ["Python", "Streamlit", "Hugging Face API", "Pillow"]
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
            My Projects
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and learning experience in my development journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-700/30 p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-500/20 text-purple-400 dark:text-purple-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <Github size={16} />
                  Code
                </motion.a>

                {project.demo && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                  >
                    <LinkIcon size={16} />
                    Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
