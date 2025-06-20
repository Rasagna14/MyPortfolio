import React from 'react';
import { Code, Database, BarChart3, Server, Cloud, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Programming Languages",
      skills: ["Python", "SQL", "R", "PySpark", "C Language"]
    },
    {
      icon: <Database className="h-8 w-8 text-green-600" />,
      title: "Database",
      skills: ["PostgreSQL", "MySQL", "Microsoft SQL"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "Data Visualization",
      skills: ["Power BI", "Tableau", "Looker Studio"]
    },
    {
      icon: <Server className="h-8 w-8 text-orange-600" />,
      title: "Big Data Technologies",
      skills: ["HDFS", "Hadoop MapReduce", "Spark", "Sqoop", "Hive", "Impala", "Flink", "pig"]
    },
    {
      icon: <Cloud className="h-8 w-8 text-cyan-600" />,
      title: "Cloud Technologies",
      skills: ["Azure Data Factory", "Databricks", "Synapse Analytics", "ADLS", "Stream Analytics", "Redshift", "Glue", "Athena", "EC2", "S3", "Lambda"]
    },
    {
      icon: <Wrench className="h-8 w-8 text-indigo-600" />,
      title: "Tools / Software",
      skills: ["Git", "Microsoft Excel", "VS Code", "Jupyter"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for data analysis, visualization, and business intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};