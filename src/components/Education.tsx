import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  const education = [
    {
      degree: "Master of Science in Information Technology and Management",
      institution: "The University of Texas at Dallas",
      location: "Richardson, TX",
      period: "2023 - 2025",
      gpa: "3.7/4.0",
      description: "Specialized in statistical modeling, data anlaysis, building dashboards, and business intelligence with focus on practical applications.",
      coursework: ["Advanced Statistics for Data Science", "Data Visualization", "Data Warehousing", "Business Intelligence", "Big Data Analytics","Cloud Computing", "AWS Cloud Solution Architect"]
    },
    {
      degree: "Bachelor of Technology",
      institution: "Vignana Bharathi Institute of Technology",
      location: "Hyderabad, India",
      period: "2015 - 2019",
      coursework: ["Database Management", "Data Structures", "Data Mining", "Statistical Methods", "Data Modeling"]
    }
  ];

  const certifications = [
    {
      name: "AWS Solution Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: <Award className="h-6 w-6 text-yellow-600" />
    },
    {
      name: "Microsoft power BI Data Analyst",
      issuer: "Microsoft",
      icon: <Award className="h-6 w-6 text-blue-600" />
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      icon: <Award className="h-6 w-6 text-orange-600" />
    },
    {
      name: "Apache Airflow 2 Fundamentals",
      issuer: "Astronomer",
      icon: <Award className="h-6 w-6 text-green-600" />
    },
    {
      name: "Data Analytics",
      issuer: "Coursera",
      year: "2021",
      icon: <Award className="h-6 w-6 text-yellow-500" />
    },
    {
      name: "Python for Data Science and Machine Learning",
      issuer: "IBM",
      year: "2024",
      icon: <Award className="h-6 w-6 text-blue-500" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strong academic foundation complemented by industry-recognized certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                    <h5 className="text-lg text-blue-600 font-semibold mb-2">{edu.institution}</h5>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 mb-2">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 font-medium">GPA: {edu.gpa}</p>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{edu.description}</p>
                  
                  <div>
                    <h6 className="text-sm font-semibold text-gray-900 mb-2">Relevant Coursework:</h6>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span 
                          key={courseIndex} 
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex items-center gap-4">
                  <div className="flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{cert.name}</h4>
                    <p className="text-gray-600">{cert.issuer}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {cert.year}
                    </span>
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