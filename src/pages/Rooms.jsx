import React, { useState, useEffect } from 'react';
import {
    Users, MessageCircle, Phone, Bed, CheckCircle, Shield, Clock, MapPin,
    ArrowRight, Sparkles, TrendingUp, Award, Target
} from 'lucide-react';
import api from '../api';

const Rooms = () => {
    const [activeRoom, setActiveRoom] = useState(null);
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    // 🔥 LIVE DATA FROM ADMIN PANEL
    useEffect(() => {
        fetchLiveRooms();
        const interval = setInterval(fetchLiveRooms, 30000);
        return () => clearInterval(interval);
    }, []);

    const fetchLiveRooms = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            const res = await api.get("/rooms");

            setRooms(res.data);
            if (res.data.length > 0) {
                setActiveRoom(res.data[0]._id);
            }
        } catch (err) {
            console.log('Using fallback rooms'.err.message);
            setRooms([
                {
                    _id: '1', name: 'SINGLE ROOM', sharing: 'SOLO OCCUPANCY',
                    rent: '₹6,500 / MONTH', availability: 3, status: 'available',
                    features: ['Private Space', 'Study Desk', 'AC Available']
                },
                {
                    _id: '2', name: 'DOUBLE SHARING', sharing: '2 PERSONS SHARING',
                    rent: '₹4,500 / PERSON', availability: 1, status: 'limited',
                    features: ['Cost Effective', 'Two Beds', 'Friendly Environment']
                },
                {
                    _id: '3', name: 'TRIPLE SHARING', sharing: '3 PERSONS SHARING',
                    rent: '₹3,800 / PERSON', availability: 2, status: 'available',
                    features: ['Most Economical', 'Group Living', 'Budget Friendly']
                }
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleBookCall = () => {
        window.location.href = 'tel:+917878755058';
    };

    const handleWhatsApp = (roomName) => {
        const message = `Hello, I'm interested in ${roomName} at Siyaram Boys PG.`;
        window.open(`https://wa.me/917878755058?text=${encodeURIComponent(message)}`, '_blank');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-xl text-gray-400">Loading rooms...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-b from-black via-gray-900 to-black pt-20 px-4 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
                <div className="relative max-w-6xl mx-auto text-center py-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="block bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                            SELECT YOUR
                        </span>
                        <span className="block text-cyan-300 mt-2">PERFECT ROOM</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Live availability • Updated every 30 seconds from admin panel
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Dynamic Limited Alert */}
                {rooms.find(r => r.status === 'limited') && (
                    <div className="mb-8 max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 backdrop-blur-sm border-l-4 border-amber-500 p-6 rounded-r-2xl">
                            <div className="flex items-start gap-4">
                                <Target className="text-amber-400 mt-1" size={24} />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">⚠️ LIMITED AVAILABILITY</h3>
                                    <p className="text-amber-200">
                                        {rooms.find(r => r.status === 'limited')?.name} has only{' '}
                                        <span className="font-bold text-amber-300">
                                            {rooms.find(r => r.status === 'limited')?.availability} BED{rooms.find(r => r.status === 'limited')?.availability > 1 ? 'S' : ''}
                                        </span>{' '}
                                        left! Book now!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 🎨 COLORFUL Rooms Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
                    {rooms.map((room) => {
                        // Dynamic colors based on room type
                        const roomColors = {
                            'DOUBLE SHARING': {
                                icon: <Users className="text-blue-400" size={24} />,
                                border: 'border-blue-500/30 hover:border-blue-500',
                                bg: 'bg-gradient-to-br from-blue-900/20 to-transparent',
                                badge: 'bg-gradient-to-r from-amber-500 to-orange-500',
                                glow: 'shadow-blue-500/25 shadow-lg'
                            },
                            'TRIPLE SHARING': {
                                icon: <Users className="text-indigo-400" size={24} />,
                                border: 'border-indigo-500/30 hover:border-indigo-500',
                                bg: 'bg-gradient-to-br from-indigo-900/20 to-transparent',
                                badge: 'bg-gradient-to-r from-emerald-500 to-green-500',
                                glow: 'shadow-indigo-500/25 shadow-lg'
                            },
                            'FORE PERSON SHARING': {
                                icon: <Users className="text-purple-400" size={24} />,
                                border: 'border-purple-500/30 hover:border-purple-500',
                                bg: 'bg-gradient-to-br from-purple-900/20 to-transparent',
                                badge: 'bg-gradient-to-r from-violet-500 to-purple-500',
                                glow: 'shadow-purple-500/25 shadow-lg'
                            },
                            'FIVE PERSON SHARING': {
                                icon: <Users className="text-pink-400" size={24} />,
                                border: 'border-pink-500/30 hover:border-pink-500',
                                bg: 'bg-gradient-to-br from-pink-900/20 to-rose-900/20',
                                badge: 'bg-gradient-to-r from-rose-500 to-pink-500',
                                glow: 'shadow-pink-500/25 shadow-lg'
                            }
                        };


                        const colors = roomColors[room.name] || roomColors['SINGLE ROOM'];

                        return (
                            <div
                                key={room._id}
                                className={`relative group transition-all duration-500 ${activeRoom === room._id ? 'scale-[1.02]' : ''
                                    }`}
                                onMouseEnter={() => setActiveRoom(room._id)}
                            >
                                {/* Glow Effect for Limited Rooms */}
                                {room.status === 'limited' && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity animate-pulse py-5"></div>
                                )}

                                {/* 🎨 Colorful Room Card */}
                                <div className={`relative rounded-2xl border-2 ${colors.border} ${colors.bg} backdrop-blur-sm overflow-hidden transition-all duration-500 ${colors.glow} hover:shadow-2xl hover:shadow-cyan-500/50`}>

                                    {/* Dynamic Status Badge */}
                                    <div className="absolute top-2 right-2 z-10">
                                        <div className={`${room.status === 'limited' ? 'bg-gradient-to-r from-amber-500 to-orange-500' : colors.badge} text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2`}>
                                            {room.status === 'limited' ? (
                                                <>
                                                    <Clock size={14} />
                                                    LIMITED
                                                </>
                                            ) : (
                                                <>
                                                    <CheckCircle size={14} />
                                                    AVAILABLE
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6 md:p-8 relative z-10">
                                        {/* Room Header */}
                                        <div className="mb-8 pt-5">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-3 rounded-xl bg-black/50 border border-white/20 shadow-lg">
                                                        {colors.icon}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                                                            {room.name}
                                                        </h3>
                                                        <p className="text-gray-300 font-medium mt-1">{room.sharing}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Price & Availability */}
                                        <div className="mb-8">
                                            <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
                                                {room.rent}
                                            </div>
                                            <div className="flex items-center gap-3 mt-4 p-3 bg-black/30 rounded-xl">
                                                <div className={`w-3 h-3 rounded-full shadow-lg ${room.availability > 0 ? 'bg-green-500 shadow-green-500/50 animate-pulse' : 'bg-red-500 shadow-red-500/50'}`}></div>
                                                <span className="text-lg font-semibold text-gray-200">
                                                    {room.availability} BED{room.availability !== 1 ? 'S' : ''} LEFT
                                                </span>
                                            </div>
                                        </div>

                                        {/* ✨ Features */}
                                        <div className="mb-10">
                                            <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                                <Sparkles size={16} />
                                                Key Features
                                            </h4>
                                            <div className="space-y-2">
                                                {room.features.slice(0, 4).map((feature, index) => (
                                                    <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all group">
                                                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-md"></div>
                                                        <span className="text-gray-200 text-sm">{feature}</span>
                                                    </div>
                                                ))}
                                                {room.features.length > 4 && (
                                                    <div className="text-xs text-gray-500 mt-2 pl-5">+{room.features.length - 4} more features</div>
                                                )}
                                            </div>
                                        </div>

                                        {/* 🔥 Action Buttons */}
                                        <div className="space-y-3">
                                            <button
                                                onClick={handleBookCall}
                                                className={`w-full py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group ${room.status === 'limited'
                                                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-amber-500/50 hover:shadow-amber-500/70 hover:scale-[1.02] hover:shadow-xl'
                                                        : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-[1.02]'
                                                    } text-white`}
                                            >
                                                {room.status === 'limited' ? (
                                                    <>
                                                        <TrendingUp size={20} className="group-hover:rotate-12 transition-transform" />
                                                        QUICK BOOK NOW
                                                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                                    </>
                                                ) : (
                                                    <>
                                                        <Bed size={20} />
                                                        BOOK ROOM
                                                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                                    </>
                                                )}
                                            </button>

                                            <button
                                                onClick={() => handleWhatsApp(room.name)}
                                                className="w-full py-3 rounded-xl font-bold border-2 border-gray-600/50 text-gray-300 hover:border-green-500 hover:text-green-400 hover:bg-green-900/20 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-green-500/25 hover:scale-[1.01]"
                                            >
                                                <MessageCircle size={20} />
                                                WHATSAPP CHAT
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Contact & Location Section - Same */}
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8 md:p-12 mb-12 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <Award className="text-cyan-400" size={32} />
                                <div>
                                    <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Why Choose Us?</h3>
                                    <p className="text-gray-400 mt-1">10+ Years Excellence</p>
                                </div>
                            </div>
                            <div className="space-y-6 mb-10">
                                <div className="flex items-center gap-4 p-4 bg-black/30 rounded-2xl hover:bg-white/5 transition-all">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center shadow-lg">
                                        <Phone className="text-cyan-400" size={22} />
                                    </div>
                                    <div>
                                        <div className="text-gray-400 text-sm">Call 24/7</div>
                                        <div className="text-2xl font-bold text-white">+91 78787 55058</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-black/30 rounded-2xl hover:bg-white/5 transition-all">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center shadow-lg">
                                        <MessageCircle className="text-green-400" size={22} />
                                    </div>
                                    <div>
                                        <div className="text-gray-400 text-sm">WhatsApp</div>
                                        <div className="text-2xl font-bold text-white">+91 78787 55058</div>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={handleBookCall}
                                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300"
                            >
                                📞 CALL NOW TO BOOK
                            </button>
                        </div>

                        <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 border border-blue-500/20 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-8">
                                <MapPin className="text-amber-400" size={32} />
                                <div>
                                    <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Prime Location</h3>
                                    <p className="text-gray-400 mt-1">Heart of Ahmedabad</p>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                                5 mins from Sardar Patel Stadium • Colleges within 2km • Easy transport access
                            </p>
                            <a
                                href="https://maps.app.goo.gl/vdjmhe4Rz3KqGBw87"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-xl hover:shadow-white/20 hover:scale-[1.02]"
                            >
                                <MapPin size={20} />
                                GET DIRECTIONS
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Message */}
                <div className="text-center py-12">
                    <div className="inline-flex items-center gap-3 text-gray-400 bg-black/50 px-8 py-4 rounded-2xl backdrop-blur-sm border border-gray-700/50">
                        <Sparkles size={18} className="text-cyan-400" />
                        <span className="text-lg">Live data from admin panel • Daily housekeeping included ✨</span>
                        <Sparkles size={18} className="text-cyan-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rooms;
