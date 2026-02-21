
import React, { useState } from 'react';
import { PROFILE_DATA } from '../constants';

const EducationWork: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Education' | 'Work'>('All');

  const filteredItems = PROFILE_DATA.educationWork.filter(item => 
    filter === 'All' ? true : item.type === filter
  );

  return (
    <section id="education" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-12 text-center">
          Education / Work
        </h2>

        <div className="flex items-center justify-center gap-4 mb-12">
          {['All', 'Education', 'Work'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-none border transition-all text-sm font-medium ${
                filter === cat 
                  ? 'bg-slate-900 text-white border-slate-900' 
                  : 'bg-white text-slate-600 border-slate-300 hover:border-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              className="group relative flex items-center bg-white rounded-none p-6 gap-8 border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-500"
            >
              {item.now && (
                <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-[9px] font-bold uppercase tracking-widest">
                  Current
                </div>
              )}

              <div className="flex-shrink-0 w-20 h-20 overflow-hidden border border-slate-900 transition-all">
                <img src={item.logoUrl} alt="Logo" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" />
              </div>

              <div className="flex-1">
                <p className="text-xs font-mono text-indigo-500 mb-1 tracking-tighter uppercase font-bold">{item.date}</p>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium">{item.subtitle}</p>
                
                {item.tags && (
                  <div className="flex gap-2 mt-3">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold rounded-none uppercase border border-slate-200 tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationWork;
