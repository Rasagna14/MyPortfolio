import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Rasagna Konduri
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Data Analyst & Business Intelligence Professional
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Passionate about transforming data into actionable insights and driving 
            business growth through strategic analytics and visualization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              Get In Touch
            </button>
            
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-gray-400 hover:text-gray-600 transition-colors" />
      </button>
    </section>
  );
};