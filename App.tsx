
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import EducationWork from './components/EducationWork';
import Others from './components/Others';
import { PROFILE_DATA } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'research', 'projects', 'others'];
      
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        setActiveSection('others');
        return;
      }

      let current = 'home';
      const scrollThreshold = 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= scrollThreshold) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleScroll, 100); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen bg-white selection:bg-indigo-500/30">
      <Sidebar activeSection={activeSection} />
      
      <main className="flex-1 lg:ml-[280px] w-full overflow-x-hidden">
        <Hero />
        
        <EducationWork />

        {/* Research Section */}
        <section id="research" className="py-32 px-6 bg-[#f8fafc] min-h-[500px] border-t border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h3 className="text-4xl md:text-5xl font-outfit font-extrabold text-slate-900 tracking-tight">Research</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
              {PROFILE_DATA.research.map((item) => (
                <div key={item.id} className="group p-10 md:p-14 bg-white rounded-none shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row gap-10 items-start relative">
                  
                  {item.now && (
                    <div className="absolute top-6 right-6 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                      </span>
                      <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">Ongoing</span>
                    </div>
                  )}

                  {/* Research Image (Diagram/Architecture) */}
                  <div className="flex-shrink-0 w-full md:w-48 aspect-video md:aspect-square bg-slate-100 border border-slate-200 overflow-hidden group-hover:border-indigo-200 transition-colors">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-3xl font-bold mb-4 text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[11px] font-bold px-4 py-2 bg-slate-50 text-slate-500 rounded-none uppercase tracking-widest border border-slate-200">{tag}</span>
                      ))}
                    </div>
                    
                    {item.link && (
                      <div className="flex items-center text-sm font-bold text-slate-900 gap-2 cursor-pointer hover:gap-4 transition-all group/link">
                        Learn More <span className="text-indigo-500">→</span>
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="absolute inset-0 z-10"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6 bg-white min-h-[700px] border-t border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h3 className="text-4xl md:text-5xl font-outfit font-extrabold text-slate-900 tracking-tight">Projects</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROFILE_DATA.projects.map(project => (
                <div key={project.id} className="group relative flex flex-col bg-white rounded-none border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-indigo-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex gap-2 mb-4">
                      {project.tech.map(t => (
                        <span key={t} className="text-[9px] font-bold px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-none uppercase tracking-wider border border-indigo-100">{t}</span>
                      ))}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{project.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>
                    {project.link && (
                      <div className="flex items-center text-sm font-bold text-slate-900 gap-2 cursor-pointer hover:gap-4 transition-all group/link">
                        Learn More <span className="text-indigo-500">→</span>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="absolute inset-0 z-10"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Others />

        <footer className="h-[84px] px-6 border-t border-white/5 bg-[#0a0a0a] flex flex-col justify-center">
          <div className="max-w-4xl mx-auto text-center w-full">
            <div className="w-6 h-[1px] bg-indigo-500/50 mx-auto mb-2"></div>
            <p className="text-slate-500 text-[10px] font-mono tracking-[0.2em] uppercase">
              © {new Date().getFullYear()} {PROFILE_DATA.englishName}. All Rights Reserved.
            </p>
            <p className="text-slate-600 text-[8px] mt-1 tracking-widest uppercase opacity-40 font-bold">
              {PROFILE_DATA.universityName} {PROFILE_DATA.labName}
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
