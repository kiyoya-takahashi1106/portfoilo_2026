
import React from 'react';
import { PROFILE_DATA } from '../constants';

const Others: React.FC = () => {
  return (
    <section id="others" className="py-24 px-6 bg-[#f8fafc] border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-12 text-center">
          Others
        </h2>
        
        <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-none shadow-sm">
          <h3 className="text-sm font-bold text-indigo-500 uppercase tracking-[0.2em] mb-8 border-b border-slate-100 pb-4">
            Qualifications & Awards
          </h3>
          
          <div className="space-y-6">
            {PROFILE_DATA.qualifications.map((qual, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row md:items-center justify-between group py-2"
              >
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-indigo-500 flex-shrink-0"></div>
                  <span className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {qual.name}
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-1 md:mt-0">
                  {qual.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Others;
