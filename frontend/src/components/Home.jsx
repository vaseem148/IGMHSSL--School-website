import React from "react";

export default function HeroPage() {
  return (
      
      <main id="home"className="relative min-h-screen text-white overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img
          src="/sb.jpg"
          alt="School Campus"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-brand-blue/90"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
          
          <span className="mb-6 px-6 py-2 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-medium backdrop-blur border border-yellow-500/30">
            Nurturing Minds, Building Character
          </span>

          <h1 className="text-4xl md:text-7xl font-serif font-bold leading-tight drop-shadow-2xl">
            Where Knowledge <br />
            Meets <span className="text-yellow-400">Wisdom</span>
          </h1>

          <p className="max-w-2xl mt-8 text-gray-200 text-lg md:text-xl leading-relaxed drop-shadow">
            Imam Ghazzali School provides a holistic education that blends
            academic excellence with moral values, discipline, and character
            development.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5">
            <button className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all shadow-xl">
              Admissions 2025
            </button>

            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
              Explore Campus
            </button>
          </div>

          {/* STATS SECTION */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12 border-t border-white/10 pt-10 w-full max-w-4xl">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-yellow-400">25+</h2>
              <p className="mt-2 text-gray-300 font-medium">Years of Excellence</p>
            </div>
            <div className="text-center">
              <h2 className="text-5xl font-bold text-yellow-400">500+</h2>
              <p className="mt-2 text-gray-300 font-medium">Happy Students</p>
            </div>
            <div className="text-center">
              <h2 className="text-5xl font-bold text-yellow-400">30+</h2>
              <p className="mt-2 text-gray-300 font-medium">Qualified Teachers</p>
            </div>
          </div>
        </div>
      </main>

  );
}