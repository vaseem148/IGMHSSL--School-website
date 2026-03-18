import React from 'react';
import { CheckCircle } from 'lucide-react';

const Admissions = () => {
  const steps = [
    "Fill out the admission enquiry form",
    "Submit required documents for verification",
    "Schedule a campus visit and interaction",
    "Complete the admission process"
  ];

  return (
    <section className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-brand-dark-green via-brand-blue to-brand-dark-blue text-white overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* LEFT CONTENT: Information */}
        <div className="lg:w-1/2">
          <span className="text-yellow-400 font-bold text-xs uppercase tracking-widest">
            Join Us
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-6 leading-tight">
            Admissions Open for <br /> 2025-26
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Give your child the gift of quality education. Join the Imam Ghazzali School family 
            and be part of a community that values knowledge, character, and excellence.
          </p>

          {/* Steps List */}
          <ul className="space-y-4 mb-10">
            {steps.map((step, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-200">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-sm md:text-base">{step}</span>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-yellow hover:bg-brand-dark-yellow text-black px-8 py-3 rounded-lg font-bold transition-all shadow-lg">
              Apply Now
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-lg font-bold transition-all">
              Download Prospectus
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT: Enquiry Form */}
        <div className="lg:w-1/2 w-full">
          <div className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-serif font-bold mb-8">
              Quick Enquiry
            </h3>
            
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Parent's Name" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                required
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                required
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                required
              />
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-yellow-400 transition-colors appearance-none">
                <option value="" className="bg-brand-blue">Select Class</option>
                <option value="kg" className="bg-brand-blue">Kindergarten</option>
                <option value="primary" className="bg-brand-blue">Primary School</option>
                <option value="secondary" className="bg-brand-blue">Secondary School</option>
              </select>

              <button 
                type="submit" 
                className="w-full bg-brand-yellow hover:bg-brand-dark-yellow text-black font-bold py-4 rounded-lg mt-4 transition-all shadow-lg active:scale-[0.98]"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Admissions;
