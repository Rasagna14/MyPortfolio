import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Rasagna Konduri</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Data Analyst passionate about transforming complex data into actionable business insights. 
              Always ready to tackle new challenges and drive data-driven decision making.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};