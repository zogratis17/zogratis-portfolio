
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "All Round Performer 2024 - Gold Awardee",
      organization: "SNS College of Engineering",
      description: "Awarded for excelling among all the students across departments in Co-curricular and extra curricular activities",
      date: "Academic Year 2023-24",
      type: "Award"
    },
    {
      id: 2,
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      organization: "Microsoft",
      description: "Certified in Microsoft Azure cloud platform fundamentals and core services.",
      date: "June 2025",
      type: "Certification"
    },
    {
      id: 3,
      title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      organization: "Microsoft",
      description: "Certified in Microsoft Azure AI fundamentals, demonstrating knowledge of AI concepts and services.",
      date: "June 2025",
      type: "Certification"
    },
    {
      id: 4,
      title: "Python for Data Science",
      organization: "NPTEL",
      description: "Topper (Top 5%) in the NPTEL course on Python for Data Science, demonstrating proficiency in Python programming and data analysis.",
      date: "October 2024",
      type: "Recognition"
    },
    {
      id: 5,
      title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
      organization: "Microsoft",
      description: "Certified in Microsoft Azure Data Fundamentals, showcasing knowledge of core data concepts and services.",
      date: "June 2025",
      type: "Certification"
    },
    {
      id: 6,
      title: "Overall Student Coordinator & Mentor - SNSCE Leetcode Championship 2025",
      organization: "SNS College of Engineering",
      description: "Led and mentored the SNSCE Leetcode Championship 2025, coordinating events and guiding 152 participants in competitive programming.",
      date: "April 2025",
      type: "Coordinator"
    },
    {
      id: 7,
      title: "Runner Up - Ideathon (Varnam 2025)",
      organization: "Karpagam Institute of Technology",
      description: "Secured a cash prize worth ₹1000, showcasing innovative problem-solving skills and teamwork.",
      date: "February 2025",
      type: "Recognition"
    },
    {
      id: 8,
      title: "Introduction to Artificial Intelligence (AI)",
      organization: "IBM",
      description: "Completed the IBM course on Introduction to AI, gaining foundational knowledge in AI concepts and applications.",
      date: "March 2025",
      type: "Certification"
    },
     {
      id: 9,
      title: "Crash Course on Python",
      organization: "Google",
      description: "Completed the Google Crash Course on Python, enhancing programming skills and understanding of Python fundamentals.",
      date: "July 2023",
      type: "Certification"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Award':
        return 'from-yellow-400 to-orange-500';
      case 'Certification':
        return 'from-blue-400 to-cyan-500';
      case 'Competition':
        return 'from-green-400 to-emerald-500';
      case 'Recognition':
        return 'from-purple-400 to-pink-500';
      case 'Coordinator':
        return 'from-red-400 to-rose-500';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

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
            Achievements & Recognition
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of milestones, certifications, and recognitions that mark my journey 
            as a developer and contributor to the tech community.
          </p>
        </motion.div>

        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-700/30 p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(achievement.type)} text-white text-sm font-semibold rounded-full`}>
                      {achievement.type}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                      {achievement.date}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                    {achievement.organization}
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-700/30 p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Growth
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Each achievement represents not just recognition, but a commitment to excellence 
              and continuous learning in the ever-evolving world of technology.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Achievements;
