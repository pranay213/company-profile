import React, { useState, useEffect } from 'react';
import { Code2, Server, Smartphone, Mail, Phone, MapPin, Globe, Terminal } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Building Digital Excellence",
      subtitle: "Your trusted partner for web, mobile, and software solutions",
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920"
    },
    {
      title: "Innovative Solutions",
      subtitle: "Transforming ideas into powerful digital experiences",
      bgImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920"
    },
    {
      title: "Expert Development Team",
      subtitle: "Delivering excellence in every project",
      bgImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    { icon: <Globe className="w-12 h-12 text-blue-600" />, title: 'Web Development', description: 'Custom websites and web applications built with modern technologies' },
    { icon: <Smartphone className="w-12 h-12 text-blue-600" />, title: 'App Development', description: 'Native and cross-platform mobile applications' },
    { icon: <Server className="w-12 h-12 text-blue-600" />, title: 'Backend Development', description: 'Scalable server solutions and API development' },
    { icon: <Code2 className="w-12 h-12 text-blue-600" />, title: 'Software Services', description: 'Custom software solutions for your business needs' },
  ];

  const testimonials = [
    { name: 'John Smith', role: 'CEO, TechCorp', content: 'Outstanding service and exceptional results. They delivered our project ahead of schedule.' },
    { name: 'Sarah Johnson', role: 'CTO, InnovateCo', content: 'Their expertise in web development helped us achieve our digital transformation goals.' },
    { name: 'Michael Brown', role: 'Founder, StartupX', content: 'Professional team with great communication throughout the entire project.' },
  ];

  const clients = [
    'https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?w=150&h=50&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=50&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1599305446902-17ccae114a29?w=150&h=50&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=50&fit=crop&auto=format',
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Terminal className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">TechSolutions</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</button>
              <button onClick={() => scrollToSection('clients')} className="text-gray-600 hover:text-blue-600 transition-colors">Clients</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section with Carousel */}
        <section className="relative h-screen overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.bgImage})`,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>
              <div className="relative h-full flex items-center justify-center text-white">
                <div className="text-center">
                  <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl mb-8">{slide.subtitle}</p>
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
              ></button>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50 scroll-mt-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 scroll-mt-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="py-20 bg-gray-50 scroll-mt-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Our Clients</h2>
            <div className="flex overflow-x-hidden">
              <div className="animate-scroll flex space-x-12">
                {[...clients, ...clients].map((client, index) => (
                  <img
                    key={index}
                    src={client}
                    alt={`Client ${index + 1}`}
                    className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 scroll-mt-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-blue-600 mr-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-600 mr-4" />
                    <span>contact@yourcompany.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                    <span>123 Business Street, Suite 100, City, Country</span>
                  </div>
                </div>
              </div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  ></textarea>
                </div>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;