import React, { useState } from 'react';
import {
    Wind,
    Wifi,
    Utensils,
    Shield,
    Truck,
    Car,
    Home,
    BatteryCharging,
    Tv,
    Coffee,
    Book,
    Dumbbell,
    Clock,
    Users,
    Star,
    MapPin,
    Phone,
    MessageCircle,
    CheckCircle,
    ArrowRight,
    Zap,
    Droplets,
    Sparkles,
    Award,
    Target
} from 'lucide-react';

const Facilities = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [hoveredFacility, setHoveredFacility] = useState(null);

    const facilities = [
        {
            id: 1,
            icon: <Wind size={28} />,
            title: 'AC Rooms Available',
            description: 'Temperature-controlled AC rooms for year-round comfort',
            category: 'room',
            color: 'from-blue-600 to-cyan-500',
            bgColor: 'bg-gradient-to-br from-blue-900/20 to-transparent',
            borderColor: 'border-blue-500/30',
            stats: 'ALL ROOMS',
            features: ['Individual AC Control', 'Energy Efficient Units', 'Regular Maintenance', '24/7 Available']
        },
        {
            id: 2,
            icon: <Wifi size={28} />,
            title: 'High Speed WiFi',
            description: 'Unlimited high-speed internet throughout the premises',
            category: 'technology',
            color: 'from-blue-500 to-indigo-500',
            bgColor: 'bg-gradient-to-br from-blue-900/20 to-transparent',
            borderColor: 'border-indigo-500/30',
            stats: 'UNLIMITED',
            features: ['No Data Caps', 'Multiple Device Support', '24/7 Technical Support', 'Secure Connection']
        },
        {
            id: 3,
            icon: <Utensils size={28} />,
            title: '3-Time Quality Meals',
            description: 'Nutritious homemade meals served fresh daily',
            category: 'food',
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gradient-to-br from-cyan-900/20 to-transparent',
            borderColor: 'border-cyan-500/30',
            stats: 'DAILY FRESH',
            features: ['Hygienic Kitchen', 'Balanced Nutrition', 'Special Dietary Options', 'Clean Dining Area']
        },
        {
            id: 4,
            icon: <Shield size={28} />,
            title: '24/7 Security & CCTV',
            description: 'Complete security surveillance with trained personnel',
            category: 'security',
            color: 'from-blue-600 to-green-500',
            bgColor: 'bg-gradient-to-br from-green-900/20 to-transparent',
            borderColor: 'border-green-500/30',
            stats: '100% SAFE',
            features: ['CCTV Coverage', 'Security Guards', 'Visitor Management', 'Emergency Response']
        },
        {
            id: 5,
            icon: <Truck size={28} />,
            title: 'Laundry Service',
            description: 'Regular laundry service for all residents',
            category: 'services',
            color: 'from-indigo-500 to-blue-600',
            bgColor: 'bg-gradient-to-br from-indigo-900/20 to-transparent',
            borderColor: 'border-indigo-500/30',
            stats: 'WEEKLY SERVICE',
            features: ['Professional Cleaning', 'Quick Turnaround', 'Quality Products', 'Separate Handling']
        },
        {
            id: 6,
            icon: <Car size={28} />,
            title: 'Parking Space',
            description: 'Secure parking for bikes and cycles',
            category: 'infrastructure',
            color: 'from-gray-600 to-blue-500',
            bgColor: 'bg-gradient-to-br from-gray-900/20 to-transparent',
            borderColor: 'border-gray-500/30',
            stats: 'SECURE AREA',
            features: ['Covered Parking', 'Security Patrolled', 'Easy Access', 'Ample Space']
        },
        {
            id: 7,
            icon: <Home size={28} />,
            title: 'Housekeeping',
            description: 'Daily cleaning and maintenance services',
            category: 'services',
            color: 'from-blue-500 to-teal-500',
            bgColor: 'bg-gradient-to-br from-teal-900/20 to-transparent',
            borderColor: 'border-teal-500/30',
            stats: 'DAILY SERVICE',
            features: ['Room Cleaning', 'Common Area Maintenance', 'Regular Sanitization', 'Waste Management']
        }
    ];

    const additionalFacilities = [
        { icon: <BatteryCharging size={22} />, title: 'Power Backup', color: 'text-yellow-400' },
        { icon: <Tv size={22} />, title: 'TV Lounge', color: 'text-blue-400' },
        { icon: <Coffee size={22} />, title: 'Common Kitchen', color: 'text-amber-400' },
        { icon: <Book size={22} />, title: 'Study Room', color: 'text-cyan-400' },
        { icon: <Dumbbell size={22} />, title: 'Fitness Area', color: 'text-green-400' },
        { icon: <Droplets size={22} />, title: '24/7 Water', color: 'text-sky-400' }
    ];

    const categories = [
        { id: 'all', label: 'All Facilities', icon: <Star size={16} />, count: 7 },
        { id: 'room', label: 'Room Features', icon: <Home size={16} />, count: 1 },
        { id: 'technology', label: 'Technology', icon: <Wifi size={16} />, count: 1 },
        { id: 'food', label: 'Food Services', icon: <Utensils size={16} />, count: 1 },
        { id: 'security', label: 'Security', icon: <Shield size={16} />, count: 1 },
        { id: 'services', label: 'Services', icon: <Truck size={16} />, count: 2 }
    ];

    const filteredFacilities = activeCategory === 'all'
        ? facilities
        : facilities.filter(facility => facility.category === activeCategory);

    const handleInquiry = () => {
        const message = "Hello, I'd like to know more about the facilities at Siyaram Boys PG.";
        window.open(`https://wa.me/917878755058?text=${encodeURIComponent(message)}`, '_blank');
    };

    const handleCall = () => {
        window.location.href = 'tel:+917878755058';
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-b from-black via-gray-900 to-black pt-30 md:pt-44 px-4 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

                <div className="relative max-w-6xl mx-auto text-center">

                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="block bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                            PREMIUM FACILITIES
                        </span>
                        <span className="block text-cyan-300 mt-2">FOR COMFORTABLE LIVING</span>
                    </h1>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Experience modern amenities designed for comfort, security, and convenience in our premium PG
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                

                {/* Category Filters */}
                <div className="mb-12">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                            <span className="text-cyan-400 font-semibold tracking-wider">EXPLORE FACILITIES</span>
                            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                                All Our Premium
                            </span>
                            <br />
                            <span className="text-cyan-300">Facilities</span>
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${activeCategory === category.id
                                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-gray-300 hover:border-blue-500 hover:text-white'
                                    }`}
                            >
                                {category.icon}
                                <span>{category.label}</span>
                                <span className={`px-2 py-0.5 rounded-full text-xs ${activeCategory === category.id ? 'bg-white/20' : 'bg-gray-800'}`}>
                                    {category.count}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Facilities Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {filteredFacilities.map((facility) => (
                            <div
                                key={facility.id}
                                className="relative group"
                                onMouseEnter={() => setHoveredFacility(facility.id)}
                                onMouseLeave={() => setHoveredFacility(null)}
                            >
                                {/* Glow Effect */}
                                {hoveredFacility === facility.id && (
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 transition-opacity"></div>
                                )}

                                <div className={`relative ${facility.bgColor} backdrop-blur-sm rounded-2xl border ${facility.borderColor} overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl`}>
                                    {/* Header with Gradient */}
                                    <div className={`bg-gradient-to-r ${facility.color} p-6`}>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="p-3 rounded-xl bg-black/30 backdrop-blur-sm">
                                                <div className="text-white">
                                                    {facility.icon}
                                                </div>
                                            </div>
                                            <span className="text-sm font-bold bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                                                {facility.stats}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{facility.title}</h3>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <p className="text-gray-400 mb-6">{facility.description}</p>

                                        <div className="space-y-3 mb-6">
                                            {facility.features.map((feature, index) => (
                                                <div key={index} className="flex items-center gap-3">
                                                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                                                    <span className="text-gray-300 text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <Clock size={12} />
                                            <span>Available for all residents</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Choose Our Facilities */}
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-8 mb-12">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <Award className="text-cyan-400" size={24} />
                            <span className="text-cyan-300 font-semibold tracking-wider">WHY CHOOSE US</span>
                            <Award className="text-cyan-400" size={24} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                                Facilities That
                            </span>
                            <span className="text-cyan-300"> Stand Out</span>
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                                    <Shield size={20} className="text-white" />
                                </div>
                                <h4 className="font-bold text-white">Safety First</h4>
                            </div>
                            <p className="text-gray-400 text-sm">
                                All facilities are designed with safety as the top priority, ensuring a secure living environment.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                                    <Clock size={20} className="text-white" />
                                </div>
                                <h4 className="font-bold text-white">24/7 Availability</h4>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Most facilities are available round-the-clock, providing convenience whenever you need them.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                                    <Users size={20} className="text-white" />
                                </div>
                                <h4 className="font-bold text-white">Community Focused</h4>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Facilities designed to foster community living and create a comfortable environment for all.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Note */}
                <div className="text-center mt-8">
                    <div className="inline-flex items-center gap-3 text-gray-500">
                        <Sparkles size={16} className="text-cyan-500" />
                        <span className="text-sm">All facilities are regularly maintained and upgraded for your comfort</span>
                        <Sparkles size={16} className="text-cyan-500" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;