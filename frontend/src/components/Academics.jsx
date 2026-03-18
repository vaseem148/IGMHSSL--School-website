import React from 'react';
import { BookOpen, Users, Lightbulb, GraduationCap } from 'lucide-react';

const Academics = () => {
  const features = [
    {
      title: "Structured Curriculum",
      description: "Following state-approved syllabus with additional focus on Islamic studies and moral education.",
      icon: <BookOpen className="w-5 h-5 text-brand-green" />,
    },
    {
      title: "Qualified Teachers",
      description: "Experienced and dedicated faculty committed to nurturing each student's potential.",
      icon: <Users className="w-5 h-5 text-brand-green" />,
    },
    {
      title: "Concept-Based Learning",
      description: "Encouraging understanding over memorization for lasting knowledge retention.",
      icon: <Lightbulb className="w-5 h-5 text-brand-green" />,
    },
    {
      title: "All-Round Development",
      description: "Balanced emphasis on academics, arts, sports, and character building.",
      icon: <GraduationCap className="w-5 h-5 text-brand-green" />,
    },
  ];

  const stats = [
    { label: "Students Enrolled", value: "500+" },
    { label: "Expert Teachers", value: "25+" },
    { label: "Pass Rate", value: "98%" },
    { label: "Years of Excellence", value: "15+" },
  ];

  return (
    <section id="academics"className="py-20 px-6 md:px-12 bg-bg-light">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="lg:w-3/5">
          <span className="text-yellow-600 font-bold text-xs uppercase tracking-widest">
            Academics
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mt-2 mb-6">
            Excellence in Education
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl">
            Our academic program is designed to challenge and inspire students, 
            fostering a love for learning while building strong foundations for 
            future success. We believe every child has unique potential waiting to be discovered.
          </p>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-green/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ACHIEVEMENTS CARD */}
        <div className="lg:w-2/5 w-full">
          <div className="bg-gradient-to-br from-brand-dark-green via-brand-blue to-brand-dark-blue p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Subtle overlay pattern/glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            
            <h3 className="text-2xl font-serif font-bold text-white mb-10 relative z-10">
              Our Achievements
            </h3>

            <div className="grid grid-cols-2 gap-y-12 gap-x-8 relative z-10">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl font-bold text-yellow-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Academics;
