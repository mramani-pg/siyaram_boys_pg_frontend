import React from 'react';
import {
    Users,
    Clock,
    Award,
    Shield,
    Home,
    Star,
    MapPin,
    Phone,
    MessageCircle,
    CheckCircle,
    Heart,
    Target,
    Sparkles,
    TrendingUp,
    ThumbsUp,
    ArrowRight
} from 'lucide-react';

// Import your images
import Dhaval from "../assets/dhaval.jpeg"
import Mayur from "../assets/Mayur.jpeg"
import Ronak from "../assets/Mayur.jpeg"

const About = () => {
    const owners = [
        {
            id: 1,
            name: 'Mr. Mayur Ramani',
            role: 'Founder & Managing Director',
            experience: '15+ Years in Hospitality',
            description: 'With extensive experience in student accommodation, ensures premium living standards.',
            color: 'from-blue-600 to-cyan-500',
            image: Mayur,
            alt: 'Mayur Ramani - Founder'
        },
        {
            id: 2,
            name: 'Mr. Ronak Ramani',
            role: 'Operations Director',
            experience: '12+ Years in Facility Management',
            description: 'Oversees daily operations and ensures smooth functioning of all services.',
            color: 'from-cyan-500 to-blue-500',
            image: Ronak,
            alt: 'Ronak Ramani - Operations Director'
        },
        {
            id: 3,
            name: 'Mr. Dhaval Ramani',
            role: 'Customer Relations Head',
            experience: '10+ Years in Student Services',
            description: 'Dedicated to ensuring resident satisfaction and addressing all concerns.',
            color: 'from-indigo-500 to-blue-600',
            image: Dhaval,
            alt: 'Dhaval Ramani - Customer Relations Head'
        }
    ];

    const milestones = [
        { year: '2010', title: 'Founded', description: 'Started with 20 rooms in Navrangpura' },
        { year: '2014', title: 'Expansion', description: 'Expanded to 50+ rooms capacity' },
        { year: '2018', title: 'Modernization', description: 'Complete renovation with modern amenities' },
        { year: '2023', title: 'Excellence', description: '500+ satisfied residents milestone' }
    ];

    const values = [
        { icon: <Shield size={24} />, title: 'Safety First', description: '24/7 security and emergency protocols' },
        { icon: <Heart size={24} />, title: 'Care & Support', description: 'Homely environment with personal attention' },
        { icon: <Home size={24} />, title: 'Comfort', description: 'Well-maintained rooms and common areas' },
        { icon: <Target size={24} />, title: 'Quality Service', description: 'Consistent delivery of promised services' }
    ];


    const handleContact = () => {
        window.location.href = 'tel:+917878755058';
    };

    const handleWhatsApp = () => {
        const message = "Hello, I'd like to know more about Siyaram Boys PG.";
        window.open(`https://wa.me/917878755058?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-b from-black via-gray-900 to-black pt-30 md:pt-44 px-4 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

                <div className="relative max-w-6xl mx-auto text-center">
                   
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="block bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                            ABOUT SIYARAM
                        </span>
                        <span className="block text-cyan-300 mt-2">BOYS PG</span>
                    </h1>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A decade of excellence in providing premium PG accommodation for students and professionals in Ahmedabad
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                

                {/* Our Story Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                            <span className="text-cyan-400 font-semibold tracking-wider">OUR JOURNEY</span>
                            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                                A Decade of
                            </span>
                            <span className="text-cyan-300"> Excellence</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                        <div>
                            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                                Founded in 2010, Siyaram Boys PG has grown from a small accommodation facility to one of Ahmedabad's most trusted PG providers. Located in the heart of Navrangpura, we've been serving students and working professionals for over a decade.
                            </p>
                            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                                Our mission is simple: to provide a safe, comfortable, and homely environment where residents can focus on their studies and work without worrying about accommodation issues.
                            </p>
                            <div className="flex items-center gap-3">
                                <CheckCircle size={20} className="text-green-500" />
                                <span className="text-gray-300">Licensed and registered PG</span>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <CheckCircle size={20} className="text-green-500" />
                                <span className="text-gray-300">Police verification for all residents</span>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl border border-gray-800 p-8">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Award className="text-amber-400" size={24} />
                                    Our Achievements
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                                            <span className="text-white font-bold">✓</span>
                                        </div>
                                        <span className="text-gray-300">10+ Years of consistent service</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                                            <span className="text-white font-bold">✓</span>
                                        </div>
                                        <span className="text-gray-300">500+ satisfied residents served</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                                            <span className="text-white font-bold">✓</span>
                                        </div>
                                        <span className="text-gray-300">4.8/5 average resident rating</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                                            <span className="text-white font-bold">✓</span>
                                        </div>
                                        <span className="text-gray-300">24/7 customer support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Meet Our Owners Section with Images */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                            <span className="text-cyan-400 font-semibold tracking-wider">MEET THE TEAM</span>
                            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                                Meet Our
                            </span>
                            <br />
                            <span className="text-cyan-300">Dedicated Owners</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Our experienced team ensures the highest standards of service and comfort
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {owners.map((owner) => (
                            <div
                                key={owner.id}
                                className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02]"
                            >
                                {/* Owner Header with Image */}
                                <div className={`bg-gradient-to-r ${owner.color} p-8 text-center`}>
                                    <div className="relative w-34 h-45 mx-auto mb-4">
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-sm"></div>
                                        <img 
                                            src={owner.image} 
                                            alt={owner.alt}
                                            className="relative w-45 h-45 rounded-full object-cover border-4 border-white/20 shadow-lg"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{owner.name}</h3>
                                    <div className="text-blue-100 mt-1">{owner.role}</div>
                                </div>

                                {/* Owner Details */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Clock size={16} className="text-cyan-400" />
                                        <span className="text-cyan-300 text-sm font-medium">{owner.experience}</span>
                                    </div>

                                    <p className="text-gray-400 mb-6">{owner.description}</p>

                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <ThumbsUp size={14} className="text-green-400" />
                                        <span>Directly involved in operations</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Values */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                                Our Core
                            </span>
                            <span className="text-cyan-300"> Values</span>
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            The principles that guide everything we do at Siyaram Boys PG
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 hover:border-blue-500/50 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <div className="text-cyan-400">
                                        {value.icon}
                                    </div>
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                                <p className="text-gray-400 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Location & Contact */}
                <div className="bg-gradient-to-br from-blue-900 to-cyan-900 rounded-2xl border border-blue-800 overflow-hidden shadow-2xl">
                    <div className="p-8 md:p-12">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <MapPin className="text-amber-400" size={24} />
                                <span className="text-cyan-300 font-semibold">VISIT US</span>
                                <MapPin className="text-amber-400" size={24} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Come Visit Our PG
                            </h3>
                            <p className="text-gray-300 max-w-2xl mx-auto">
                                Located in the prime educational hub of Ahmedabad, just 5 minutes from Sardar Patel Stadium
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-gray-800 p-6 mb-6">
                                    <h4 className="text-xl font-bold text-white mb-4">Exact Address</h4>
                                    <p className="text-gray-300">
                                        Station, Preksha Bhumi Apartment, A/302, Stadium Cross Rd, near SARDAR PATEL STADIUM, Swastik Society, Navrangpura, Ahmedabad, Gujarat 380009
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Clock size={20} className="text-cyan-400" />
                                        <div>
                                            <div className="text-white font-medium">Visit Hours</div>
                                            <div className="text-gray-400 text-sm">9:00 AM - 8:00 PM (All Days)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-white mb-6">Get in Touch</h4>
                                <div className="space-y-6">
                                    <button
                                        onClick={handleContact}
                                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-3"
                                    >
                                        <Phone size={20} />
                                        Call Now: +91 78787 55058
                                    </button>

                                    <button
                                        onClick={handleWhatsApp}
                                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-center gap-3"
                                    >
                                        <MessageCircle size={20} />
                                        Message on WhatsApp
                                    </button>

                                    <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-gray-800 p-4">
                                        <div className="flex items-center gap-3">
                                            <TrendingUp className="text-amber-400" size={20} />
                                            <div>
                                                <div className="text-white text-sm">Quick Response Guaranteed</div>
                                                <div className="text-gray-400 text-xs">We respond within 15 minutes</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Message */}
                <div className="text-center mt-8">
                    <div className="inline-flex items-center gap-3 text-gray-500">
                        <Sparkles size={16} className="text-cyan-500" />
                        <span className="text-sm">Committed to providing the best PG experience in Ahmedabad since 2010</span>
                        <Sparkles size={16} className="text-cyan-500" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;