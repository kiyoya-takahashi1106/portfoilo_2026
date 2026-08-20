import React, { useEffect, useState } from 'react';
import { ProfileData } from '../types';

interface HeroProps {
  profileData: ProfileData;
}

const Hero: React.FC<HeroProps> = ({ profileData }) => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const newsItems = profileData.news;

  useEffect(() => {
    if (isPaused || newsItems.length < 2) return;

    const timer = window.setInterval(() => {
      setCurrentNewsIndex((current) => (current + 1) % newsItems.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPaused, newsItems.length]);

  const currentNews = newsItems[currentNewsIndex];

  const showPreviousNews = () => {
    setCurrentNewsIndex((current) =>
      current === 0 ? newsItems.length - 1 : current - 1
    );
  };

  const showNextNews = () => {
    setCurrentNewsIndex((current) => (current + 1) % newsItems.length);
  };

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img
          src={profileData.heroImageUrl}
          alt="Hero Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-12 pt-[28svh] sm:px-8 md:px-16">
        <div className="mb-4">
          <p className="text-lg font-medium tracking-tight text-white md:text-xl">
            {profileData.role} {profileData.name}
          </p>
        </div>

        <h1 className="mb-2 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl">
          {profileData.englishName}
        </h1>

        <p className="text-base font-light text-white/80 sm:text-lg md:text-xl">
          {profileData.email}
        </p>

        {currentNews && (
          <div
            className="mt-10 w-full max-w-2xl sm:mt-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex items-center justify-between border-b border-white/25 pb-2.5">
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-rose-200" />
                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-white/85">News</p>
              </div>
              <p className="font-mono text-[10px] text-white/50">
                {String(currentNewsIndex + 1).padStart(2, '0')} / {String(newsItems.length).padStart(2, '0')}
              </p>
            </div>

            <div className="grid border-b border-white/25">
              {newsItems.map((item, index) => {
                const isActive = currentNewsIndex === index;
                const hasLink = Boolean(item.link);
                const NewsItemTag = hasLink ? 'a' : 'div';

                return (
                  <NewsItemTag
                    key={item.id}
                    {...(hasLink
                      ? {
                          href: item.link,
                          'aria-label': `${item.title}を詳しく見る`,
                        }
                      : {})}
                    aria-hidden={!isActive}
                    tabIndex={isActive && hasLink ? 0 : -1}
                    className={`group col-start-1 row-start-1 block py-4 transition-opacity duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-200 sm:py-5 ${
                      isActive ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                    }`}
                  >
                    <div className="mb-1.5 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] sm:text-[10px]">
                      <span className="text-rose-200">{item.category}</span>
                      {item.date && (
                        <>
                          <span className="h-1 w-1 bg-white/45" />
                          <span className="text-white/55">{item.date}</span>
                        </>
                      )}
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h2 className="text-lg font-bold leading-tight text-white transition-colors group-hover:text-rose-100 sm:text-xl">
                          {item.title}
                        </h2>
                        <p className="mt-1.5 whitespace-pre-line text-xs leading-relaxed text-white/65 sm:text-sm">
                          {item.description}
                        </p>
                      </div>
                      {hasLink && (
                        <span className="mt-1 shrink-0 text-base text-rose-200 transition-transform group-hover:translate-x-1" aria-hidden="true">
                          ↗
                        </span>
                      )}
                    </div>
                  </NewsItemTag>
                );
              })}
            </div>

            {newsItems.length > 1 && (
              <div className="mt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={showPreviousNews}
                  aria-label="前のニュース"
                  className="flex h-9 w-9 items-center justify-start text-lg text-white/70 transition-colors hover:text-rose-200"
                >
                  ←
                </button>

                <div className="flex items-center gap-2" aria-label="ニュースの選択">
                  {newsItems.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setCurrentNewsIndex(index)}
                      aria-label={`${item.title}を表示`}
                      aria-current={currentNewsIndex === index ? 'true' : undefined}
                      className="flex h-8 w-8 items-center justify-center"
                    >
                      <span
                        className={`block h-1.5 w-1.5 rounded-full border transition-colors ${
                          currentNewsIndex === index
                            ? 'border-rose-200 bg-rose-200'
                            : 'border-white/50 bg-transparent hover:border-white'
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={showNextNews}
                  aria-label="次のニュース"
                  className="flex h-9 w-9 items-center justify-end text-lg text-white/70 transition-colors hover:text-rose-200"
                >
                  →
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
