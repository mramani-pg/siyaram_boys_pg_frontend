import React, { useState } from 'react';
import {
  Phone, Mail, MapPin, MessageCircle, Send, Clock, User, MessageSquare,
  CheckCircle, ArrowRight, Shield, Sparkles, Target, Home, Wifi, Utensils, Car,
  Bed, Users
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    roomType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone Number',
      value: '+91 78787 55058',
      subtext: 'Call us anytime 24/7',
      color: 'text-blue-400',
      bgColor: 'bg-gradient-to-br from-blue-900/20 to-transparent',
      action: () => window.location.href = 'tel:+917878755058'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      value: 'Navrangpura, Ahmedabad',
      subtext: 'Near Sardar Patel Stadium',
      color: 'text-amber-400',
      bgColor: 'bg-gradient-to-br from-amber-900/20 to-transparent',
      action: () => window.open('https://maps.app.goo.gl/vdjmhe4Rz3KqGBw87', '_blank')
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'WhatsApp',
      value: '+91 78787 55058',
      subtext: 'Instant messaging',
      color: 'text-green-400',
      bgColor: 'bg-gradient-to-br from-green-900/20 to-transparent',
      action: () => {
        const message = `Hello! I'm interested in Siyaram Boys PG. Please share room availability.`;
        window.open(`https://wa.me/917878755058?text=${encodeURIComponent(message)}`, '_blank');
      }
    }
  ];

  const roomTypes = [
    { value: '', label: 'Select Room Type' },
    { value: 'DOUBLE SHARING', label: 'DOUBLE SHARING (2)', icon: <Users size={16} className="text-blue-400" /> },
    { value: 'TRIPLE SHARING', label: 'TRIPLE SHARING (3)', icon: <Users size={16} className="text-indigo-400" /> },
    { value: 'FOUR PERSON SHARING', label: '4 PERSON SHARING', icon: <Users size={16} className="text-purple-400" /> },
    { value: 'FIVE PERSON SHARING', label: '5 PERSON SHARING', icon: <Users size={16} className="text-pink-400" /> }
  ];

  const visitingHours = [
    { day: 'Monday - Saturday', time: '9:00 AM - 8:00 PM' },
    { day: 'Sunday', time: '10:00 AM - 6:00 PM' },
    { day: 'Emergency', time: '24/7 Available', highlight: true }
  ];

  const facilities = [
    { icon: <Home size={20} />, text: 'AC Rooms', color: 'text-blue-400' },
    { icon: <Wifi size={20} />, text: 'High Speed WiFi', color: 'text-cyan-400' },
    { icon: <Utensils size={20} />, text: 'Quality Food', color: 'text-amber-400' },
    { icon: <Car size={20} />, text: 'Parking Space', color: 'text-green-400' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendMessage = () => {
    // 🔥 PERFECT WhatsApp Format - No breaking!
    const whatsappMessage = `*SIYARAM BOYS PG - NEW INQUIRY*

    *Name:* ${formData.name}
    *Phone:* ${formData.phone}
    *Email:* ${formData.email || 'Not provided'}
    *Room Type:* ${formData.roomType || 'Not selected'}
    *Message:* ${formData.message || 'No message'}

    ---
    *Sent from website contact form*`;

    window.open(`https://wa.me/917878755058?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        roomType: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-black via-gray-900 to-black pt-30 md:pt-44 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              CONTACT US
            </span>
            <span className="block text-cyan-300 mt-2">SIYARAM BOYS PG</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Reach out for room bookings, inquiries, or schedule a visit
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`${info.bgColor} backdrop-blur-sm rounded-2xl border border-gray-800 p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] group cursor-pointer`}
              onClick={info.action}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-gray-900 to-black ${info.color}`}>
                  {info.icon}
                </div>
                <div>
                  <div className="text-sm text-gray-400">{info.title}</div>
                  <div className="text-lg font-bold text-white">{info.value}</div>
                </div>
              </div>
              <div className="text-gray-500 text-sm">{info.subtext}</div>
              <div className="mt-4 text-blue-400 text-sm font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Click to connect</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form & Info Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Send className="text-cyan-400" size={24} />
              <h2 className="text-2xl font-bold text-white">Send Inquiry</h2>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">
                  WhatsApp opened with your details. Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm font-medium">
                      <User size={16} className="inline mr-2" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 rounded-2xl bg-gray-800/50 border-2 border-gray-700 hover:border-cyan-500 focus:border-cyan-500 focus:outline-none text-white placeholder-gray-400 transition-all backdrop-blur-sm"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2 text-sm font-medium">
                      <Phone size={16} className="inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-4 rounded-2xl bg-gray-800/50 border-2 border-gray-700 hover:border-green-500 focus:border-green-500 focus:outline-none text-white placeholder-gray-400 transition-all backdrop-blur-sm"
                      placeholder="+91 XXXXXXXXXX"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2 text-sm font-medium">
                    <Mail size={16} className="inline mr-2" />
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 rounded-2xl bg-gray-800/50 border-2 border-gray-700 hover:border-blue-500 focus:border-blue-500 focus:outline-none text-white placeholder-gray-400 transition-all backdrop-blur-sm"
                    placeholder="name@example.com"
                  />
                </div>

                {/* 🔥 ROOM TYPE DROPDOWN */}
                <div>
                  <label className="block text-gray-400 mb-2 text-sm font-medium">
                    <Bed size={16} className="inline mr-2" />
                    Interested Room Type
                  </label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full p-4 rounded-2xl bg-gray-800/50 border-2 border-gray-700 hover:border-purple-500 focus:border-purple-500 focus:outline-none text-white placeholder-gray-400 transition-all backdrop-blur-sm cursor-pointer appearance-none bg-no-repeat bg-right pr-12"
                    required
                  >
                    {roomTypes.map((room) => (
                      <option key={room.value} value={room.value}>
                        {room.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2 text-sm font-medium">
                    <MessageSquare size={16} className="inline mr-2" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 rounded-2xl bg-gray-800/50 border-2 border-gray-700 hover:border-emerald-500 focus:border-emerald-500 focus:outline-none text-white placeholder-gray-400 transition-all backdrop-blur-sm h-32 resize-none"
                    placeholder="Tell us your requirements, preferred move-in date, or any questions..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
                >
                  <Send size={20} />
                  Send WhatsApp Message
                </button>
              </form>
            )}
          </div>

          {/* Location & Info - SAME ORIGINAL */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl border border-gray-800 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-amber-400" size={24} />
                <h3 className="text-xl font-bold text-white">Our Location</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Station, Preksha Bhumi Apartment, A/302, Stadium Cross Rd, near SARDAR PATEL STADIUM, Swastik Society, Navrangpura, Ahmedabad, Gujarat 380009
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Shield size={14} className="text-green-400" />
                  <span>Licensed and verified PG establishment</span>
                </div>
                <button
                  onClick={() => window.open('https://maps.app.goo.gl/vdjmhe4Rz3KqGBw87', '_blank')}
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                >
                  <MapPin size={18} />
                  Open in Google Maps
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-cyan-400" size={24} />
                <h3 className="text-xl font-bold text-white">Visiting Hours</h3>
              </div>
              <div className="space-y-4">
                {visitingHours.map((slot, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-3 border-b ${slot.highlight ? 'border-cyan-500/30' : 'border-gray-800'} last:border-0`}
                  >
                    <div>
                      <div className={`font-medium ${slot.highlight ? 'text-cyan-300' : 'text-gray-300'}`}>
                        {slot.day}
                      </div>
                      {slot.highlight && (
                        <div className="text-xs text-cyan-400 mt-1">For urgent inquiries</div>
                      )}
                    </div>
                    <div className={`font-bold ${slot.highlight ? 'text-green-400' : 'text-white'}`}>
                      {slot.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-gradient-to-br from-emerald-900/20 to-green-900/20 rounded-2xl border border-gray-800 p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Sparkles className="text-emerald-400" size={24} />
                Included Facilities
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-black/30 hover:bg-white/5 transition-all">
                    <div className={`p-2 rounded-lg bg-white/10 ${facility.color}`}>
                      {facility.icon}
                    </div>
                    <span className="font-medium text-gray-200">{facility.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-12">
          <div className="inline-flex items-center gap-3 text-gray-400 bg-black/50 px-8 py-4 rounded-2xl backdrop-blur-sm border border-gray-700/50">
            <Sparkles size={18} className="text-cyan-400" />
            <span className="text-lg">We respond within 24 hours • Your comfort is our priority ✨</span>
            <Sparkles size={18} className="text-cyan-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
