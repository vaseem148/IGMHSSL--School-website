import React from 'react';
import { Trophy, Music, Palette, Heart, Mic2, Users2 } from 'lucide-react';

const Activities = () => {
  const activityList = [
    {
      title: "Sports",
      description: "Football, cricket, athletics, and indoor games",
      icon: <Trophy className="w-6 h-6 text-brand-yellow" />,
    },
    {
      title: "Cultural Programs",
      description: "Annual day celebrations and performances",
      icon: <Music className="w-6 h-6 text-brand-yellow" />,
    },
    {
      title: "Art & Craft",
      description: "Creative expression through visual arts",
      icon: <Palette className="w-6 h-6 text-brand-yellow" />,
    },
    {
      title: "Value Education",
      description: "Building character and moral foundations",
      icon: <Heart className="w-6 h-6 text-brand-yellow" />,
    },
    {
      title: "Public Speaking",
      description: "Debates, elocution, and recitation",
      icon: <Mic2 className="w-6 h-6 text-brand-yellow" />,
    },
    {
      title: "Community Service",
      description: "Social awareness and outreach programs",
      icon: <Users2 className="w-6 h-6 text-brand-yellow" />,
    },
  ];

  return (
    <section id="activities"className="py-20 px-6 md:px-12 bg-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-yellow-500 font-bold text-xs uppercase tracking-widest">
          Beyond Academics
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mt-3 mb-6">
          Co-Curricular Activities
        </h2>
        <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
          We believe in holistic development. Our diverse range of activities helps students discover their 
          talents and build essential life skills.
        </p>
      </div>

      {/* Activities Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {activityList.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-gray-50 flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300"
          >
            {/* Soft Gold Icon Background */}
            <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 flex items-center justify-center mb-6">
              {item.icon}
            </div>
            
            <h3 className="text-base font-bold text-brand-blue mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
