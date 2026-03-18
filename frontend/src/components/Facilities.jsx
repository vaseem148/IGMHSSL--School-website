import React from 'react';
import { School, Book, Monitor, FlaskConical, ShieldCheck, Bus } from 'lucide-react';

const Facilities = () => {
  const facilityList = [
    {
      title: "Smart Classrooms",
      description: "Well-ventilated, spacious classrooms with modern teaching aids.",
      icon: <School className="w-6 h-6 text-brand-dark-green" />,
    },
    {
      title: "Library",
      description: "Extensive collection of books, journals, and digital resources.",
      icon: <Book className="w-6 h-6 text-brand-dark-green" />,
    },
    {
      title: "Computer Lab",
      description: "State-of-the-art computer facility with internet access.",
      icon: <Monitor className="w-6 h-6 text-brand-dark-green" />,
    },
    {
      title: "Science Lab",
      description: "Fully equipped laboratory for practical learning experiences.",
      icon: <FlaskConical className="w-6 h-6 text-brand-dark-green" />,
    },
    {
      title: "Safe Campus",
      description: "CCTV surveillance and secure environment for all students.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-dark-green" />,
    },
    {
      title: "Transport",
      description: "Safe and reliable transportation covering major areas.",
      icon: <Bus className="w-6 h-6 text-brand-dark-green" />,
    },
  ];

  return (
    <section id="facilities"className="py-20 px-6 md:px-12 bg-bg-light">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-yellow-500 font-bold text-xs uppercase tracking-widest">
          Infrastructure
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mt-3 mb-6">
          World-Class Facilities
        </h2>
        <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
          Our campus is designed to provide the best learning environment with 
          modern amenities that support academic and personal growth.
        </p>
      </div>

      {/* FACILITIES GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilityList.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-10 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            {/* ICON WITH SOFT GRADIENT BACKGROUND */}
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-green/10 to-bg-light flex items-center justify-center mb-6">
              {item.icon}
            </div>
            
            <h3 className="text-xl font-bold text-brand-blue mb-3">
              {item.title}
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;