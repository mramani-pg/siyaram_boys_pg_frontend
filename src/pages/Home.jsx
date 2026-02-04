import React from 'react';
import Hero from '../components/Hero';
import { 
  Bed, 
  Wifi, 
  Utensils, 
  Shield, 
  Dumbbell,
  BookOpen,
  Car,
  Sparkles,
  MapPin,
  GraduationCap,
  ShoppingBag,
  ArrowRight,
  Star,
  Clock,
  Users,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <Bed size={28} />,
      title: "Smart Living Spaces",
      desc: "Modern AC/Non-AC rooms with ergonomic furniture, personal study desks, and ample storage",
      gradient: "from-blue-500 to-cyan-500",
      stats: "30+ Rooms"
    },
    {
      icon: <Utensils size={28} />,
      title: "Quality Dining",
      desc: "Nutritious homemade meals served in a clean, hygienic dining environment",
      gradient: "from-cyan-500 to-indigo-500",
      stats: "3 Meals/Day"
    },
    {
      icon: <Wifi size={28} />,
      title: "High-Speed Connectivity",
      desc: "Reliable WiFi throughout the premises with dedicated study and gaming zones",
      gradient: "from-indigo-500 to-blue-600",
      stats: "Unlimited"
    },
    {
      icon: <Dumbbell size={28} />,
      title: "Wellness Facilities",
      desc: "Fitness area, yoga space, and easy access to nearby sports complexes",
      gradient: "from-blue-600 to-cyan-600",
      stats: "24/7 Access"
    }
  ];

  const locationFeatures = [
    {
      icon: <MapPin size={24} />,
      title: "Prime Location",
      desc: "5 minutes walk to Sardar Patel Stadium",
      color: "text-blue-400"
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Education Hub",
      desc: "Multiple colleges within 2km radius",
      color: "text-cyan-400"
    },
    {
      icon: <ShoppingBag size={24} />,
      title: "Urban Convenience",
      desc: "Markets, hospitals, and entertainment nearby",
      color: "text-indigo-400"
    },
    {
      icon: <Car size={24} />,
      title: "Easy Transportation",
      desc: "Close to railway station with ample parking",
      color: "text-blue-500"
    }
  ];

  const testimonials = [
    {
      name: "Raj Patel",
      role: "Student, LD College",
      text: "Living here feels like home. The facilities and food quality are excellent!",
      rating: 5
    },
    {
      name: "Amit Sharma",
      role: "Working Professional",
      text: "Perfect location for office commute. The security and cleanliness are top-notch.",
      rating: 5
    },
    {
      name: "Vikas Mehta",
      role: "Student, Nirma University",
      text: "Best PG in Ahmedabad. The study environment really helps with my academics.",
      rating: 4
    }
  ];

  const stats = [
    { icon: <Users size={24} />, value: "2000+", label: "Happy Residents" },
    { icon: <Clock size={24} />, value: "10+", label: "Years Experience" },
    { icon: <Bed size={24} />, value: "30+", label: "Rooms Available" },
    { icon: <Star size={24} />, value: "4.8", label: "Average Rating" }
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Hero />
      
      {/* Stats Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500">
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 md:gap-3">
              <div className="w-8 md:w-20 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              <span className="text-cyan-400 font-semibold tracking-wider text-sm md:text-base">
                <Sparkles size={18} className="inline mr-2" />
                PREMIUM AMENITIES
              </span>
              <div className="w-8 md:w-20 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                Experience Premium
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Living at its Best
              </span>
            </h2>
            
            <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              We've redefined PG living with modern amenities, quality services, and a comfortable environment
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative p-6 md:p-8">
                  {/* Icon with Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-gray-800 to-black group-hover:scale-110 transition-transform duration-300">
                      <div className="text-cyan-400">
                        {feature.icon}
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 bg-black/30 px-3 py-1 rounded-full">
                      {feature.stats}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base mb-6">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      

      {/* Testimonials Section */}
      <section className="py-16 md:py-0 px-4 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-8 md:w-20 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <span className="text-blue-400 font-semibold tracking-wider text-sm md:text-base">
                <Users size={18} className="inline mr-2" />
                WHAT RESIDENTS SAY
              </span>
              <div className="w-8 md:w-20 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Trusted by 500+
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
                Students & Professionals
              </span>
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-800 p-6 md:p-8 hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-700"} 
                    />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-300 mb-6 text-base md:text-lg italic">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-600 to-emerald-500">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">Verified & Safe</h3>
              </div>
              <p className="text-gray-400">Licensed PG with proper documentation and police verification.</p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500">
                  <BookOpen size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">Study Friendly</h3>
              </div>
              <p className="text-gray-400">Dedicated study room and library for academic focus.</p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-500">
                  <Shield size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">Complete Security</h3>
              </div>
              <p className="text-gray-400">24/7 CCTV surveillance with security personnel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-15 px-4 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-6">
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Ready to Experience
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Premium PG Living?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto">
            Book your room today and join our community of satisfied residents.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-2 rounded-xl font-bold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-3">
              <Bed size={20} />
              <Link to="/contact">Book Room Now</Link>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
            
            <button className="group border-2 border-gray-700 text-white px-8 py-2 rounded-xl font-bold hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-3">
              <MapPin size={20} />
              <Link to="https://maps.app.goo.gl/vdjmhe4Rz3KqGBw87">Schedule Visit</Link>
            </button>
          </div>
          
          <p className="text-gray-400 text-sm mt-8">
            Limited rooms available. Contact us today to check availability.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;