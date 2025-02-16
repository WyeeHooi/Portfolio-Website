// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Github, Linkedin, Mail, Phone, MapPin, ChevronRight, Code, Briefcase, GraduationCap, User } from 'lucide-react';
import React, { useState, useEffect } from 'react';
function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
  const [activeSection, setActiveSection] = useState('about');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md z-40 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Wong Hooi Yee
            </h1>
            <div className="flex gap-6">
              {['about', 'experience', 'skills', 'education'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize ${
                    activeSection === section 
                      ? 'text-blue-400 font-medium' 
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
        <div className="container mx-auto relative">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Web Developer & 
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Digital Creator
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Crafting digital experiences that merge creativity with technical excellence
            </p>
            <div className="flex flex-wrap gap-6 text-gray-300">
              <a href="mailto:hooiyee202@gmail.com" 
                className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail size={18} /> hooiyee202@gmail.com
              </a>
              <a href="tel:+60102345835" 
                className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone size={18} /> +60 10-2345 835
              </a>
              <a href="https://linkedin.com/in/wonghooiyee" 
                className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-blue-400" /> Work Experience
          </h2>
          <div className="space-y-8">
            {[
              {
                title: 'Web Team Leader',
                company: 'Youth Beyond Boundaries',
                period: 'Jan 2024 - Jan 2025',
                description: 'Led website strategy alignment with organizational publicity goals. Guided team members in content management and SEO optimization.'
              },
              {
                title: 'Web Developer Intern',
                company: 'UCSI University',
                period: 'Sept 2023 - Dec 2023',
                description: 'Focused on website design, development, and maintenance. Revamped existing websites for responsiveness and user experience.'
              }
            ].map((job, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{job.title}</h3>
                      <p className="text-gray-400">{job.company}</p>
                    </div>
                    <p className="text-gray-500">{job.period}</p>
                  </div>
                  <p className="text-gray-300">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Code className="text-blue-400" /> Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Core Technologies',
                skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'WordPress', 'ASP.Net', 'ORACLE SQL'],
                color: 'blue'
              },
              {
                title: 'Additional Skills',
                skills: ['Java', 'Python', 'Unity AR', 'Git', 'SEO Optimization'],
                color: 'purple'
              },
              {
                title: 'Languages',
                skills: ['English', 'Bahasa Melayu', 'Mandarin'],
                color: 'green'
              }
            ].map((category, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className={`px-3 py-1 rounded-full text-sm font-medium
                        ${category.color === 'blue' ? 'bg-blue-500/20 text-blue-300' : ''}
                        ${category.color === 'purple' ? 'bg-purple-500/20 text-purple-300' : ''}
                        ${category.color === 'green' ? 'bg-green-500/20 text-green-300' : ''}
                      `}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <GraduationCap className="text-blue-400" /> Education
          </h2>
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-400">Bachelor of Computer Science</h3>
                <p className="text-gray-400 text-lg">UCSI University</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400">Sept 2022 - Sept 2025</p>
                <p className="text-blue-400 font-bold">CGPA: 3.80</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium mb-3">Key Courses</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-blue-400" />
                    Web Programming
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-blue-400" />
                    Multimedia Programming
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-blue-400" />
                    Object-Oriented Programming
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-blue-400" />
                    Database Design
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-blue-400" />
                    Business Case Project
                  </li>
                </ul>
              </div>
              <div className="bg-gray-700/30 p-6 rounded-lg">
                <h4 className="text-lg font-medium mb-3">Achievements</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-blue-400" />
                    Dean's List (All Semesters)
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-blue-400" />
                    Top Programming Student 2023
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Wong Hooi Yee. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App


