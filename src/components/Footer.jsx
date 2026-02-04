import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Home,
    Bed,
    Star,
    Images,
    Building,
    Phone,
    Mail,
    MapPin,
    Wifi,
    Shield,
    Utensils,
    Car,
    BookOpen,
    Clock,
    ChevronRight,
    Facebook,
    Instagram,
    MessageCircle
} from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            alert(`Thank you for subscribing with: ${email}`);
            setEmail('');
        }
    };

    const quickLinks = [
        { label: 'Home', path: '/', icon: <Home size={18} /> },
        { label: 'Rooms & Rates', path: '/rooms', icon: <Bed size={18} /> },
        { label: 'Facilities', path: '/facilities', icon: <Star size={18} /> },
        { label: 'About Us', path: '/about', icon: <Building size={18} /> },
        { label: 'Contact', path: '/contact', icon: <Phone size={18} /> },
    ];

    const amenities = [
        { label: 'AC Rooms Available', icon: <Bed size={16} /> },
        { label: 'High Speed WiFi', icon: <Wifi size={16} /> },
        { label: '3-Time Quality Meals', icon: <Utensils size={16} /> },
        { label: '24/7 Security & CCTV', icon: <Shield size={16} /> },
        { label: 'Laundry Service', icon: <Images size={16} /> },
        { label: 'Parking Space', icon: <Car size={16} /> },
        { label: 'Housekeeping', icon: <Home size={16} /> },
    ];

    const contactInfo = {
        address: 'Station, Preksha Bhumi Apartment, A/302, Stadium Cross Rd, near SARDAR PATEL STADIUM, Swastik Society, Navrangpura, Ahmedabad, Gujarat 380009',
        phone: '+91 78787 55058',
        whatsapp: '+91 78787 55058',
        email: 'info@siyaramboyspg.com',
    };

    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#3b82f6_49%,#3b82f6_51%,transparent_52%)] bg-[length:20px_20px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block group">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                                        <Building size={28} />
                                    </div>
                                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold">SIYARAM BOYS</span>
                                    <span className="text-sm text-gray-400 font-medium">PREMIUM PG</span>
                                </div>
                            </div>
                        </Link>

                        <p className="text-gray-400 leading-relaxed text-sm">
                            Premium PG accommodation for students and professionals in Ahmedabad. Experience comfort, security, and homely environment.
                        </p>

                        {/* Social Media */}
                        <div className="flex items-center gap-3 pt-4">
                            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 hover:scale-110 transition-all duration-300">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-pink-600 hover:border-pink-600 hover:scale-110 transition-all duration-300">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 pb-3 border-b border-white/10 flex items-center gap-2">
                            <ChevronRight size={20} className="text-cyan-400" />
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
                                    >
                                        <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                            {link.icon}
                                        </div>
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Amenities */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 pb-3 border-b border-white/10 flex items-center gap-2">
                            <Star size={20} className="text-cyan-400" />
                            Amenities
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                            {amenities.map((amenity, index) => (
                                <div key={index} className="flex items-center gap-3 text-sm">
                                    <div className="text-blue-400">
                                        {amenity.icon}
                                    </div>
                                    <span className="text-gray-400">{amenity.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact & Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 pb-3 border-b border-white/10 flex items-center gap-2">
                            <Phone size={20} className="text-cyan-400" />
                            Contact Us
                        </h3>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">{contactInfo.address}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-blue-400" />
                                <a href={`tel:${contactInfo.phone}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
                                    {contactInfo.phone}
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <MessageCircle size={18} className="text-blue-400" />
                                <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
                                    WhatsApp: {contactInfo.whatsapp}
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-blue-400" />
                                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
                                    {contactInfo.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map/Visit Section */}
                <div className="mb-12 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <div className="grid md:grid-cols-2">
                        <div className="p-8 bg-gradient-to-br from-blue-900/90 to-cyan-900/90">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <MapPin size={24} className="text-cyan-400" />
                                    <h3 className="text-xl font-bold">Visit Our PG</h3>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    Located in the prime educational and commercial hub of Ahmedabad. Easy access to colleges, stadium, and transportation.
                                </p>
                                <div className="flex items-center gap-4">
                                    <button className="bg-white text-blue-900 px-6 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2">
                                        <MapPin size={16} />
                                        <Link to="https://maps.app.goo.gl/vdjmhe4Rz3KqGBw87">Get Directions</Link>
                                    </button>
                                    <button className="border border-white/30 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
                                        <Clock size={16} />
                                        View Timings
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-lg">Office Hours</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                        <span className="text-gray-400">Monday - Saturday</span>
                                        <span className="text-cyan-400 font-medium">9:00 AM - 8:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                        <span className="text-gray-400">Sunday</span>
                                        <span className="text-cyan-400 font-medium">10:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Emergency</span>
                                        <span className="text-green-400 font-medium">24/7 Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <div className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Siyaram Boys PG. All rights reserved.
                        </div>
                    </div>


                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/917878755058"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-500/30 hover:scale-110 hover:shadow-green-500/50 transition-all duration-300 z-40"
            >
                <MessageCircle size={24} />
            </a>
        </footer>
    );
};

export default Footer;