import React, { useState, useEffect } from 'react';
import hero1 from "../assets/hero1.png"
import hero2 from "../assets/hero2.png"
import { Link } from 'react-router-dom';

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const heroImages = [
        hero1,
        hero2
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
            {/* Background Image Slider */}
            <div className="absolute inset-0">
                {heroImages.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: window.innerWidth < 768 ? 'center center' : '60% 40%',
                            backgroundRepeat: 'no-repeat',
                            // Mobile performance
                            imageRendering: window.innerWidth < 768 ? 'crisp-edges' : 'auto'
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    </div>
                ))}
            </div>

            {/* Animated Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-move"></div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.2}s`,
                            animationDuration: `${3 + Math.random() * 5}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 pt-24 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-4">
                        {/* Animated Badge */}
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/30 animate-pulse-border">
                            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                            <span className="text-cyan-300 font-medium tracking-wider">ECONOMY PG • AHMEDABAD</span>
                        </div>

                        {/* Main Title with Gradient Text */}
                        <div className="space-y-4">
                            <h1 className=" font-black leading-none">
                                <span className="block bg-gradient-to-r text-6xl md:text-7xl from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                                    SIYARAM
                                </span>
                                <span className="block bg-gradient-to-r text-6xl md:text-5xl from-blue-400 to-cyan-300 bg-clip-text text-transparent mt-2">
                                    BOYS PG
                                </span>
                            </h1>

                            {/* Animated Underline */}
                            <div className="relative w-48 h-1 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-shimmer"></div>
                            </div>
                        </div>

                        {/* Tagline */}
                        <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                            Where ambition meets comfort. A premium living space designed for students and professionals in the Ahmedabad.
                        </p>

                        {/* Location Badge */}
                        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-800">
                            <div className="flex items-start gap-4">
                                <div className="text-2xl text-cyan-400">📍</div>
                                <div>
                                    <h4 className="text-white font-bold mb-2">Prime Location</h4>
                                    <p className="text-gray-400 text-sm">
                                        Station, Preksha Bhumi Apartment, A/302, Stadium Cross Rd, near SARDAR PATEL STADIUM, Swastik Society, Navrangpura, Ahmedabad
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-2 rounded-xl text-lg font-bold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300">
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    <Link to="/contact">Book Your Room</Link>
                                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-card {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-card-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(15px); opacity: 0; }
        }
        @keyframes pulse-border {
          0%, 100% { border-color: rgba(59, 130, 246, 0.3); }
          50% { border-color: rgba(34, 211, 238, 0.6); }
        }
        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
        .animate-float-card {
          animation: float-card 3s ease-in-out infinite;
        }
        .animate-float-card-delayed {
          animation: float-card-delayed 4s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-scroll {
          animation: scroll 1.5s infinite;
        }
        .animate-pulse-border {
          animation: pulse-border 2s infinite;
        }
      `}</style>
        </section>
    );
};

export default Hero;