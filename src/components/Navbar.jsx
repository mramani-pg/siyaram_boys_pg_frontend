import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Home,
  Bed,
  Star,
  Users,
  ChevronRight
} from 'lucide-react';
import logo from "../assets/Logo.png";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={18} /> },
    { path: '/rooms', label: 'Rooms & Rates', icon: <Bed size={18} /> },
    { path: '/facilities', label: 'Facilities', icon: <Star size={18} /> },
    { path: '/about', label: 'About Us', icon: <Users size={18} /> },
    { path: '/Contact', label: 'Contact Now', icon: <Phone size={18} /> },
  ];

  const contactInfo = {
    phone: '+91 78787 55058',
    whatsapp: '+91 78787 55058'
  };

  const handleCall = () => {
    window.location.href = `tel:${contactInfo.phone.replace(/\D/g, '')}`;
  };

  const handleWhatsApp = () => {
    const message = "Hello, I'm interested in Siyaram Boys PG.";
    window.open(`https://wa.me/91${contactInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
        ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3'
        : 'bg-transparent py-5'
        }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl  flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform duration-300 shadow-md">
                  <img
                    src={logo}
                    alt="Siyaram Boys PG Logo"
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`font-black text-2xl transition-all duration-300 ${scrolled ? 'text-blue-900' : 'text-white'
                  }`}>
                  SIYARAM BOYS
                </span>
                <span className={`text-sm font-medium transition-all duration-300 ${scrolled ? 'text-gray-600' : 'text-gray-200'
                  }`}>
                  ECONOMY PG AHMEDABAD
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-5 py-2 rounded-lg mx-1 transition-all duration-300 font-medium ${location.pathname === item.path
                    ? scrolled
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-white bg-white/20'
                    : scrolled
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                      : 'text-white hover:text-white hover:bg-white/10'
                    }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  )}
                </Link>
              ))}

            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${scrolled
                ? 'text-blue-900 bg-blue-50'
                : 'text-white bg-white/20'
                }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Bottom Line */}
          <div className="mt-3 hidden lg:block">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 pt-50 transition-all duration-500 ${mobileMenuOpen
        ? 'opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none'
        }`}>
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>

        <div className={`relative bg-gradient-to-b from-blue-900 to-black text-white rounded-t-3xl h-full max-h-[80vh] overflow-y-auto transition-transform duration-500 ${mobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}>
          <div className="p-6">
            {/* Logo in Mobile Menu */}
              

            {/* Mobile Navigation */}
            <div className="space-y-2 mb-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${location.pathname === item.path
                    ? 'bg-gradient-to-r from-blue-600/30 to-cyan-500/30 border border-blue-500/30'
                    : 'bg-white/5 hover:bg-white/10'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${location.pathname === item.path
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500'
                      : 'bg-white/10'
                      }`}>
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {location.pathname === item.path ? (
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  ) : (
                    <ChevronRight size={18} className="text-gray-400" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button (Mobile Only) */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={handleWhatsApp}
          className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 hover:scale-110 transition-transform duration-300"
        >
          <MessageCircle size={24} className="text-white" />
        </button>
      </div>
    </>
  );
};

export default Navbar;