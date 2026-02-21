
import React, { useState } from 'react';
import { PROFILE_DATA } from '../constants';

interface SidebarProps {
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const [copied, setCopied] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Education / Work' },
    { id: 'research', label: 'Research' },
    { id: 'projects', label: 'Projects' },
    { id: 'others', label: 'Others' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop;
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <aside className="hidden lg:flex fixed top-0 left-0 w-[280px] h-screen bg-[#0a0a0a] text-white flex-col border-r border-white/5 z-50 shadow-2xl">
      <div className="pt-20 pb-12 px-6 text-center flex-shrink-0">
        <div className="relative inline-block">
          <div className="w-44 h-44 mx-auto rounded-none overflow-hidden border border-white/10 shadow-2xl group transition-all duration-500 bg-slate-900">
            <img 
              src={PROFILE_DATA.profileImageUrl} 
              alt="Profile" 
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-5 h-5 bg-indigo-500 border-2 border-[#0a0a0a] rounded-none shadow-lg"></div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.3em] mb-2 opacity-80">
            {PROFILE_DATA.universityName}
          </h2>
          <h3 className="text-xl font-bold font-outfit text-white tracking-tight">
            {PROFILE_DATA.englishName}
          </h3>
          
          <div className="mt-4 w-full">
            <button 
              onClick={copyToClipboard}
              className={`text-[10px] font-mono leading-relaxed py-2 px-2 rounded-none border border-white/5 backdrop-blur-sm block w-full break-all text-center transition-all duration-300 relative overflow-hidden group/mail ${
                copied ? 'bg-indigo-600 text-white border-indigo-400' : 'bg-white/5 text-white/90 hover:bg-white/10'
              }`}
              title="Click to copy email"
            >
              <span className={`block transition-transform duration-300 ${copied ? '-translate-y-10' : 'translate-y-0'}`}>
                {PROFILE_DATA.email}
              </span>
              <span className={`absolute inset-0 flex items-center justify-center font-bold tracking-[0.2em] transition-transform duration-300 ${copied ? 'translate-y-0' : 'translate-y-10'}`}>
                COPIED!
              </span>
            </button>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 overflow-y-auto scrollbar-hide">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`group flex items-center gap-4 py-3.5 px-5 rounded-none transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-white/5 text-white border-l-2 border-indigo-500' 
                    : 'text-slate-500 hover:text-slate-300 hover:bg-white/[0.02] border-l-2 border-transparent'
                }`}
              >
                <div className="w-4 flex justify-center flex-shrink-0">
                  <div className={`w-1 h-1 transition-all duration-500 ${
                    activeSection === item.id 
                      ? 'bg-indigo-500 scale-150 shadow-[0_0_8px_rgba(99,102,241,1)]' 
                      : 'bg-slate-700'
                  }`}></div>
                </div>
                <span className="text-[12px] font-bold tracking-wide">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar footer height matched with main footer (84px) */}
      <div className="mt-auto px-6 h-[84px] border-t border-white/5 flex flex-col justify-center bg-[#0a0a0a]">
        <div className="flex justify-center gap-6 mb-2">
          {PROFILE_DATA.socialLinks.github && (
            <a href={PROFILE_DATA.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-all duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          )}
          {PROFILE_DATA.socialLinks.twitter && (
            <a href={PROFILE_DATA.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-all duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.044.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>
            </a>
          )}
        </div>
        <p className="text-[10px] text-center text-slate-600 font-mono tracking-[0.2em] uppercase opacity-40">
          © {new Date().getFullYear()} K.Takahashi
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
