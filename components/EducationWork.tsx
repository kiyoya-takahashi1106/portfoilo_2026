
import React, { useState } from 'react';
import { PROFILE_DATA } from '../constants';

type EducationWorkFilter = 'All' | 'Education' | 'Short Work' | 'Middle・Long Work';

const FILTERS: EducationWorkFilter[] = ['All', 'Education', 'Short Work', 'Middle・Long Work'];

const EducationWork: React.FC = () => {
  const [filter, setFilter] = useState<EducationWorkFilter>('All');

  const filteredItems = PROFILE_DATA.educationWork.filter(item => {
    if (filter === 'All') return true;
    if (filter === 'Education') return item.type === 'Education';
    if (filter === 'Short Work') return item.type === 'Work' && item.shortWork === 'true';
    return item.type === 'Work' && item.shortWork !== 'true';
  });

  return (
    <section id="education" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-12 text-center">
          Education / Work
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          {FILTERS.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 sm:px-6 py-2 rounded-none border transition-all text-xs sm:text-sm font-medium ${
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
          {filteredItems.map((item, index) => {
            const hasMaterial = Boolean(item.materialUrl);
            const Card = hasMaterial ? 'a' : 'div';

            return (
            <Card 
              key={index}
              {...(hasMaterial
                ? {
                    href: item.materialUrl,
                    target: item.materialUrl?.startsWith('http') ? '_blank' : '_self',
                    rel: 'noopener noreferrer',
                    'aria-label': `${item.title} の資料を見る`,
                  }
                : {})}
              className={`group relative flex flex-col items-start bg-white rounded-none p-5 gap-4 border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 outline-none sm:flex-row sm:items-center sm:p-6 sm:gap-8 ${
                hasMaterial
                  ? 'cursor-pointer border-rose-50 hover:border-rose-200 active:border-rose-300 focus:border-rose-200 focus-visible:border-rose-200 focus-visible:ring-2 focus-visible:ring-rose-100 focus-visible:ring-offset-2'
                  : 'border-slate-200 hover:border-indigo-200'
              }`}
            >
              {item.now && (
                <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-[9px] font-bold uppercase tracking-widest">
                  Current
                </div>
              )}

              <div className="flex-shrink-0 w-20 h-20 overflow-hidden border border-slate-900 transition-all">
                <img src={item.logoUrl} alt="Logo" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" />
              </div>

              <div className="w-full flex-1 sm:pr-28">
                <p className="text-xs font-mono text-indigo-500 mb-1 tracking-tighter uppercase font-bold">{item.date}</p>
                <h3 className={`text-xl md:text-2xl font-bold text-slate-900 mb-1 transition-colors ${
                  hasMaterial ? 'group-hover:text-rose-500' : 'group-hover:text-indigo-600'
                }`}>
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium">{item.subtitle}</p>
                
                {item.tags && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold rounded-none uppercase border border-slate-200 tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {item.materialUrl && (
                <span
                  className="inline-flex items-center gap-1.5 border border-rose-100 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-rose-400 transition-all group-hover:border-rose-200 group-hover:bg-rose-50 group-hover:text-rose-500 sm:absolute sm:bottom-4 sm:right-4"
                >
                  Learn More
                  <span aria-hidden="true" className="text-xs leading-none">↗</span>
                </span>
              )}
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationWork;
