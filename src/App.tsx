import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import HireMeButton from './components/HireMeButton';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-black transition-colors duration-300">
          <div className="min-h-screen bg-gradient-to-br from-purple-50/20 via-pink-50/20 to-blue-50/20 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10">
            <Navbar />
            <main className="pt-20">
              <AnimatedRoutes />
            </main>
            <Footer />
            <HireMeButton />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;