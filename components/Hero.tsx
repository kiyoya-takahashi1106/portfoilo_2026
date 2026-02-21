
import React from 'react';
import { PROFILE_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col justify-center bg-black overflow-hidden">
      {/* Background Image with original colors */}
      <div className="absolute inset-0 z-0">
        <img 
          src={PROFILE_DATA.heroImageUrl} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 md:px-16">
        
        {/* Top Info: Role + Japanese Name */}
        <div className="mb-4">
          <p className="text-lg md:text-xl text-white font-medium tracking-tight">
            {PROFILE_DATA.role} {PROFILE_DATA.name}
          </p>
        </div>

        {/* Massive Name: English */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-2 leading-tight">
          {PROFILE_DATA.englishName}
        </h1>

        {/* Email Address */}
        <div className="mb-16">
          <p className="text-lg md:text-xl text-white/80 font-light">
            {PROFILE_DATA.email}
          </p>
        </div>

        {/* Affiliation Info */}
        <div className="space-y-4 text-white text-lg md:text-xl font-medium">
          <p>
            所属学部 : <a 
              href={PROFILE_DATA.departmentUrl} 
              target={PROFILE_DATA.departmentUrl.startsWith('http') ? "_blank" : "_self"} 
              rel="noopener noreferrer" 
              className="underline decoration-white/40 underline-offset-[10px] hover:decoration-white transition-all"
            >
              {PROFILE_DATA.departmentName}
            </a>
          </p>
          <p>
            研究室 : <a 
              href={PROFILE_DATA.labUrl} 
              target={PROFILE_DATA.labUrl.startsWith('http') ? "_blank" : "_self"}
              rel="noopener noreferrer" 
              className="underline decoration-white/40 underline-offset-[10px] hover:decoration-white transition-all"
            >
              {PROFILE_DATA.labName}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
