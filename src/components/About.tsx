import React from 'react';
import { Award, Target, Users } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Strategic Thinking",
      description: "Developing data-driven strategies that align with business objectives and drive measurable results."
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "Technical Excellence",
      description: "Proficient in advanced analytics tools and techniques, delivering high-quality insights and solutions."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams to translate complex data into actionable business intelligence."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a dedicated Data Analyst with a passion for uncovering insights from complex datasets 
              and translating them into strategic business recommendations. With expertise in statistical 
              analysis, data visualization, and business intelligence tools, I help organizations make 
              informed decisions that drive growth and efficiency.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              My analytical mindset, combined with strong communication skills, allows me to bridge the 
              gap between technical analysis and business strategy. I thrive in collaborative environments 
              where I can contribute to data-driven decision making and continuous improvement initiatives.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              I am always eager to take on new challenges and continue learning about emerging technologies 
              and methodologies in the data science field.
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};