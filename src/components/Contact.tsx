import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "rasagnakonduri03@gmail.com",
      href: "mailto:rasagnakonduri03@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+1 (945) 527-0880",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Dallas, TX",
      href: null
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/rasagna-konduri",
      href: "https://www.linkedin.com/in/rasagna-konduri-350aaa192/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on your next data project? Let's discuss how I can help drive your business forward with data-driven insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-gray-900 hover:text-blue-600 transition-colors font-semibold"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/rasagna-konduri-350aaa192/"
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/Rasagna14"
                  className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Full Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder=""
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};