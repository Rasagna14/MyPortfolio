import React from 'react';
import { ExternalLink, Github, BarChart } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "Customer Churn Prediction Model",
      description: "Developed a machine learning model to predict customer churn with 94% accuracy, helping reduce customer attrition by 30%.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "SQL"],
      category: "Machine Learning",
      results: "30% reduction in churn rate, $500K annual savings"
    },
    {
      title: "Sales Performance Dashboard",
      description: "Interactive Tableau dashboard providing real-time insights into sales performance across multiple regions and product lines.",
      image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Tableau", "SQL", "Excel", "Power BI"],
      category: "Data Visualization",
      results: "20% improvement in sales team efficiency"
    },
    {
      title: "Market Basket Analysis",
      description: "Analyzed customer purchase patterns to optimize product placement and cross-selling strategies for retail chain.",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["R", "Apriori Algorithm", "ggplot2", "SQL"],
      category: "Analytics",
      results: "15% increase in average order value"
    },
    {
      title: "Financial Risk Assessment Tool",
      description: "Built comprehensive risk assessment framework for loan default prediction using ensemble methods.",
      image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "XGBoost", "Feature Engineering", "Flask"],
      category: "Risk Analytics",
      results: "25% improvement in risk detection accuracy"
    },
    {
      title: "Supply Chain Optimization",
      description: "Data-driven analysis to optimize inventory levels and reduce supply chain costs through predictive analytics.",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Time Series Analysis", "Optimization", "Tableau"],
      category: "Operations Analytics",
      results: "$800K annual cost reduction"
    },
    {
      title: "Web Analytics Platform",
      description: "Custom web analytics solution providing deep insights into user behavior and conversion optimization.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Google Analytics", "JavaScript", "D3.js", "Python"],
      category: "Web Analytics",
      results: "40% improvement in conversion tracking"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world data science projects that have delivered measurable business impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart size={16} className="text-green-600" />
                    <span className="text-sm font-semibold text-gray-700">Impact:</span>
                  </div>
                  <p className="text-sm text-green-700 font-medium">{project.results}</p>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <ExternalLink size={16} />
                    View Project
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:border-gray-400 transition-colors flex items-center justify-center">
                    <Github size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};