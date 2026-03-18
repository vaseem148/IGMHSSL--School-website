import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactDetails = [
    {
      title: "Address",
      info: ["Imam Ghazzali School", "Lalpettai, Tamil Nadu", "India"],
      icon: <MapPin className="w-6 h-6 text-brand-dark-green" />,
    },
    {
      title: "Phone",
      info: ["+91 XXXXX XXXXX", "+91 XXXXX XXXXX"],
      icon: <Phone className="w-6 h-6 text-brand-dark-green" />,
    },
    {
      title: "Email",
      info: ["info@imamghazzalischool.edu", "admissions@imamghazzalischool.edu"],
      icon: <Mail className="w-6 h-6 text-brand-dark-green" />,
    },
    {
      title: "Office Hours",
      info: ["Monday - Saturday", "8:00 AM - 4:00 PM"],
      icon: <Clock className="w-6 h-6 text-brand-dark-green" />,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-bg-light">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-yellow-500 font-bold text-xs uppercase tracking-widest">
          Get In Touch
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mt-3 mb-6">
          Contact Us
        </h2>
        <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
          Have questions? We'd love to hear from you. Reach out to us through any of the following 
          channels or visit our campus.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactDetails.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-10 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
          >
            {/* Icon Container */}
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-green/10 to-bg-light flex items-center justify-center mb-6">
              {item.icon}
            </div>
            
            <h3 className="text-xl font-bold text-brand-blue mb-4">
              {item.title}
            </h3>
            
            <div className="space-y-1">
              {item.info.map((line, idx) => (
                <p key={idx} className="text-gray-500 text-sm leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;