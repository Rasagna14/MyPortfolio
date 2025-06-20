import React from 'react';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Data Analyst",
      company: "Accenture Private Limited",
      location: "Hyderabad, India",
      period: "August 2021 - July 2023",
      description: "Leading data analytics initiatives and developing comprehensive business intelligence solutions.",
      achievements: [
        "Developed automated reporting systems that reduced manual work by 60%",
        "Led cross-functional analytics projects resulting in $2M+ cost savings",
        "Mentored junior analysts and established data quality standards",
        "Created executive dashboards for C-level decision making"
      ],
      technologies: ["Python", "SQL", "Tableau", "AWS", "Power BI"]
    },
    {
      title: "Data Analyst",
      company: "Cognizant Technology Solutions",
      location: "Hyderabad, India",
      period: "July 2020 - June 2021",
      description: "Focused on customer analytics and business performance optimization through data-driven insights.",
      achievements: [
        "Implemented customer segmentation models improving marketing ROI by 35%",
        "Designed and maintained ETL pipelines for multi-source data integration",
        "Collaborated with product teams to optimize user experience metrics",
        "Conducted A/B tests that improved conversion rates by 25%"
      ],
      technologies: ["R", "SQL", "Tableau", "Google Analytics", "Excel"]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A track record of delivering impactful data solutions across various industries
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <h4 className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 text-lg">{exp.description}</p>

              <div className="mb-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3">
                      <ChevronRight size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};