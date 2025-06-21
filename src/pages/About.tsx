import { motion } from 'framer-motion';
import { Code, Database, Brain, BarChart3, Lightbulb, Heart, Users, Clock, Briefcase, Calendar, MapPin, Award, GraduationCap, Cpu, Globe, Palette, Camera, Server, Monitor, Smartphone, Layout, Layers, FileCode, Terminal, Cloud, Lock, Activity, Zap, Search, Eye, MessageSquare, TrendingUp, Settings, Wrench, BookOpen, PenTool, Sparkles, Target, UserCheck, Handshake, CheckCircle, Puzzle, Clock3, MessageCircle, Lightbulb as LightbulbIcon, KeyboardIcon } from 'lucide-react';

const About = () => {
  const skillCategories = {
    FRONTEND: [
      { name: "JavaScript", icon: FileCode },
      { name: "HTML5", icon: Layout },
      { name: "CSS3", icon: Palette },
      { name: "React", icon: Layers },
      // { name: "Vue.js", icon: Layers },
      // { name: "Angular", icon: Layers },
      // { name: "TypeScript", icon: Code },
      { name: "Tailwind CSS", icon: Palette },
      // { name: "Bootstrap", icon: Layout },
      // { name: "Sass", icon: Palette }
    ],
    BACKEND: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Server },
      { name: "Django", icon: Server },
      { name: "Flask", icon: Server },
      { name: "FastAPI", icon: Server },
      // { name: "Spring Boot", icon: Server },
      // { name: "PHP", icon: Code },
      // { name: "Ruby on Rails", icon: Server },
      // { name: "ASP.NET", icon: Server },
      // { name: "Java", icon: Code },
      // { name: "C++", icon: Code }
    ],
    "AI & MACHINE LEARNING": [
      { name: "TensorFlow", icon: Brain },
      { name: "PyTorch", icon: Brain },
      { name: "Keras", icon: Brain },
      { name: "Scikit-learn", icon: Brain },
      { name: "HuggingFace Transformers", icon: Brain },
      { name: "OpenAI API", icon: Sparkles },
      { name: "Google Gemini API", icon: Sparkles },
      { name: "Computer Vision", icon: Eye },
      { name: "NLP", icon: MessageSquare },
      { name: "GenAI", icon: Sparkles },
      { name: "Prompt Engineering", icon: MessageSquare }
    ],
    "DATA SCIENCE": [
      { name: "Python", icon: Code },
      { name: "Pandas", icon: BarChart3 },
      { name: "NumPy", icon: BarChart3 },
      { name: "Matplotlib", icon: TrendingUp },
      { name: "Seaborn", icon: TrendingUp },
      // { name: "Plotly", icon: TrendingUp },
      { name: "Jupyter", icon: BookOpen },
      // { name: "R", icon: BarChart3 },
      { name: "Statistical Analysis", icon: BarChart3 }
    ],
    "CLOUD & DEVOPS": [
      { name: "AWS", icon: Cloud },
      // { name: "Google Cloud", icon: Cloud },
      { name: "Docker", icon: Cloud },
      // { name: "Kubernetes", icon: Cloud },
      { name: "GitHub Actions", icon: Settings },
      { name: "Firebase", icon: Database },
      { name: "Git & GitHub", icon: Code }
    ],
    "DATABASES": [
      { name: "MongoDB", icon: Database },
      { name: "MySQL", icon: Database },
      // { name: "PostgreSQL", icon: Database },
      // { name: "Redis", icon: Database },
      // { name: "SQL", icon: Database }
    ],
    "DESIGN & TOOLS": [
      { name: "Figma", icon: PenTool },
      { name: "Adobe Photoshop", icon: Camera },
      { name: "Adobe After Effects", icon: Camera },
      { name: "Canva", icon: PenTool },
      { name: "FlutterFlow", icon: Smartphone },
      { name: "Webflow", icon: Layout }
    ]
  };

  const hardSkills = [
    { name: "Full-Stack Development", icon: Code },
    { name: "Database Design", icon: Database },
    { name: "API Development", icon: Server },
    { name: "Cloud Computing", icon: Cloud },
    { name: "DevOps", icon: Settings },
    { name: "Machine Learning", icon: Brain },
    { name: "Data Analysis", icon: BarChart3 },
    { name: "TypeWriting", icon: KeyboardIcon }
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Puzzle },
    { name: "Team Leadership", icon: Users },
    { name: "Communication", icon: MessageCircle },
    { name: "Project Management", icon: Target },
    { name: "Creative Thinking", icon: LightbulbIcon },
    { name: "Adaptability", icon: UserCheck },
    { name: "Time Management", icon: Clock3 },
    { name: "Collaboration", icon: Handshake }
  ];

  const workExperience = [
  {
    title: "Junior Software Associate Intern",
    company: "SNS iNNovation Hub",
    period: "August 2024 - December 2024",
    location: "Coimbatore, IN",
    achievements: [
      "Conducted R&D on Generative AI, integrating LLMs and Multimodal AI.",
      "Implemented Retrieval-Augmented Generation (RAG) and prompt engineering to optimize AI outputs.",
      "Applied Agile methodologies including Scrum, Kanban, and Waterfall models in project execution."
    ],
    position: "left"
  },
  {
    title: "Data Scientist Intern",
    company: "Freelancers’ League",
    period: "March 2023 - August 2023",
    location: "Coimbatore, IN",
    achievements: [
      "Extracted and processed data from multiple websites, increasing insight depth by 35%.",
      "Automated data workflows using Advanced Excel, saving 10+ hours of manual effort.",
      "Supported data-driven decisions with structured web intelligence."
    ],
    position: "right"
  }
];

const educationData = [
  {
    type: 'Bachelor of Engineering',
    branch: 'Computer Science and Technology',
    year: '2022-2026',
    institution: 'SNS College of Engineering',
    score: '8.99 CGPA (Till Semester V)'
  },
  {
    type: 'High School',
    branch: 'Science (PCM-CS)',
    board: 'CBSE',
    year: '2022',
    institution: 'Suguna PIP School',
    score: '83.6%'
  },
  {
    type: 'Secondary School',
    board: 'CBSE',
    year: '2020',
    institution: 'Suguna International School',
    score: '85.6%'
  }
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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
        ease: "easeOut"
      }
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
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-32"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-3xl rounded-full"></div>
            <div className="relative bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-3xl border border-white/20 dark:border-gray-700/30 p-12 shadow-2xl">
              {/* Profile Image Placeholder - Same dimensions as Home page */}
                <motion.div
                variants={itemVariants}
                className="mb-8 flex justify-center"
                >
                <div className="relative w-40 h-60 md:w-56 md:h-80 rounded-2xl overflow-hidden shadow-lg mt-0">
                  <img
                  src="./src/assets/bg.png"
                  alt="Profile"
                  className="object-cover w-full h-full"
                  style={{ aspectRatio: "1024 / 1526" }}
                  />
                </div>
                </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
              >
                About Me
              </motion.h1>
              
              <motion.div
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto space-y-6"
              >
                <p className="text-2xl md:text-3xl font-semibold text-blue-500 dark:text-blue-400">
                  🚀 Turning Ideas into Digital Reality
                </p>
                <p>
                  I'm a passionate <span className="text-blue-500 dark:text-blue-400 font-semibold">GenAI/ML Developer & Data Scientist</span> with a drive to create intelligent, impactful solutions that connect innovation with real-world value. 
                  With hands-on experience in AI, data analysis, and modern technologies, 
                  I enjoy transforming complex problems into smart, elegant outcomes.
                </p>
                <p>
                When I'm not coding, you'll find me exploring breakthroughs in artificial intelligence, mentoring peers, 
                or watching movies, vibing to music, or even getting lost in the world of anime.  
                <span className="text-cyan-500 dark:text-cyan-400 font-semibold"> Let's build the future with AI!</span>
                </p>

              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-700/30 p-6 shadow-xl"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4">
                    {category === 'FRONTEND' && <Code className="text-white" size={24} />}
                    {category === 'BACKEND' && <Server className="text-white" size={24} />}
                    {category === 'AI & MACHINE LEARNING' && <Brain className="text-white" size={24} />}
                    {category === 'DATA SCIENCE' && <BarChart3 className="text-white" size={24} />}
                    {category === 'CLOUD & DEVOPS' && <Cloud className="text-white" size={24} />}
                    {category === 'DATABASES' && <Database className="text-white" size={24} />}
                    {category === 'DESIGN & TOOLS' && <Palette className="text-white" size={24} />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 gap-2">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.02) }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg border border-white/10 dark:border-gray-700/20 p-3 flex items-center cursor-pointer transition-all duration-200 hover:bg-purple-500/10 hover:border-purple-400/30"
                    >
                      <skill.icon size={16} className="mr-3 text-purple-400 dark:text-purple-300" />
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Hard & Soft Skills */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Hard Skills */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-700/30 p-8 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-4">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Hard Skills</h3>
              </div>
              
              <div className="space-y-3">
                {hardSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg border border-white/10 dark:border-gray-700/20 p-3 flex items-center"
                  >
                    <skill.icon size={18} className="mr-3 text-blue-400 dark:text-blue-300" />
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-700/30 p-8 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mr-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Soft Skills</h3>
              </div>
              
              <div className="space-y-3">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: -5, scale: 1.02 }}
                    className="bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg border border-white/10 dark:border-gray-700/20 p-3 flex items-center"
                  >
                    <skill.icon size={18} className="mr-3 text-pink-400 dark:text-pink-300" />
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Work Experience */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Work Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              My professional journey and accomplishments
            </p>
          </div>

          {/* Vertical Timeline for Work Experience */}
          <div className="relative max-w-4xl mx-auto">
            {/* Main Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 rounded-full"></div>

            {/* Experience Cards */}
            <div className="space-y-16">
              {workExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Connection Line */}
                  <div className={`absolute left-1/2 w-16 h-1 bg-gradient-to-r ${
                    index % 2 === 0 
                      ? 'from-blue-400 to-purple-400 transform -translate-x-16' 
                      : 'from-purple-400 to-blue-400 transform translate-x-0'
                  }`}></div>

                  {/* Node */}
                  <div className="absolute left-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-1/2 border-4 border-white dark:border-gray-900 z-10">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    ></motion.div>
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-80 md:w-96 bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-700/30 p-6 shadow-2xl ${
                      index % 2 === 0 ? 'mr-8' : 'ml-8'
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4">
                        <Briefcase className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-purple-400 dark:text-purple-300 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm flex items-start">
                            <Award size={14} className="mr-2 text-yellow-500 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Education History - Vertical Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Education History
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              My academic journey and achievements
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Main Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 transform -translate-x-1/2 rounded-full"></div>

            {/* Education Cards */}
            <div className="space-y-16">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Connection Line */}
                  <div className={`absolute left-1/2 w-16 h-1 bg-gradient-to-r ${
                    index % 2 === 0 
                      ? 'from-purple-400 to-pink-400 transform -translate-x-16' 
                      : 'from-pink-400 to-purple-400 transform translate-x-0'
                  }`}></div>

                  {/* Node */}
                  <div className="absolute left-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform -translate-x-1/2 border-4 border-white dark:border-gray-900 z-10">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    ></motion.div>
                  </div>

                  {/* Education Card */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-80 md:w-96 bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-700/30 p-6 shadow-2xl ${
                      index % 2 === 0 ? 'mr-8' : 'ml-8'
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4">
                        <GraduationCap className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.type}
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      {edu.branch && (
                        <p className="text-purple-400 dark:text-purple-300 font-medium">{edu.branch}</p>
                      )}
                      
                      {edu.board && (
                        <p className="text-gray-600 dark:text-gray-400">Board: {edu.board}</p>
                      )}
                      
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar size={16} className="mr-2" />
                        <span>{edu.year}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        <span>{edu.institution}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Award size={16} className="mr-2 text-yellow-500" />
                        <span className="font-semibold text-green-500">{edu.score}</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default About;