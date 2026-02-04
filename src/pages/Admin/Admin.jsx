import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Edit3, Trash2, Save, CheckCircle, Clock, LogIn, Shield, Users } from 'lucide-react';

const API_BASE = 'http://localhost:5000/api';

const AdminPanel = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [user, setUser] = useState(null);
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        name: '', sharing: '', rent: '', availability: 0, features: ''
    });

    // Set axios defaults
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            localStorage.setItem('token', token);
            setIsLoggedIn(true);
            fetchRooms();
        } else {
            delete axios.defaults.headers.common['Authorization'];
            localStorage.removeItem('token');
        }
    }, [token]);

    const login = async (e) => {
        e.preventDefault();
        try {
            console.log('🔐 Logging in...', loginData);
            const res = await axios.post(`${API_BASE}/auth/login`, loginData, {
                headers: { 'Content-Type': 'application/json' }
            });
            console.log('✅ Login success:', res.data);
            setToken(res.data.token);
            setUser(res.data.user);
            setLoginData({ username: '', password: '' });
        } catch (err) {
            console.error('❌ Login error:', err.response?.data || err.message);
            alert(err.response?.data?.message || 'Login failed! Use: admin / admin123');
        }
    };

    const logout = () => {
        setToken('');
        setUser(null);
        setIsLoggedIn(false);
        setRooms([]);
    };

    const fetchRooms = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${API_BASE}/rooms`);
            setRooms(res.data);
            console.log('📋 Rooms loaded:', res.data.length);
        } catch (err) {
            console.error('Error fetching rooms:', err.response?.data || err.message);
        } finally {
            setLoading(false);
        }
    };

    const saveRoom = async (e) => {
        e.preventDefault();
        try {
            const roomData = {
                ...formData,
                features: formData.features.split(',').map(f => f.trim()).filter(f => f)
            };

            if (editingId) {
                await axios.put(`${API_BASE}/rooms/${editingId}`, roomData);
            } else {
                await axios.post(`${API_BASE}/rooms`, roomData);
            }
            fetchRooms();
            setFormData({ name: '', sharing: '', rent: '', availability: 0, features: '' });
            setEditingId(null);
            alert('Room saved successfully!');
        } catch (err) {
            console.error('Save error:', err.response?.data);
            alert('Error saving room: ' + (err.response?.data?.message || 'Try again'));
        }
    };

    const editRoom = (room) => {
        setFormData({
            name: room.name,
            sharing: room.sharing,
            rent: room.rent,
            availability: room.availability,
            features: room.features.join(', ')
        });
        setEditingId(room._id);
    };

    const deleteRoom = async (id) => {
        if (confirm('Delete this room?')) {
            try {
                await axios.delete(`${API_BASE}/rooms/${id}`);
                fetchRooms();
                alert('Room deleted!');
            } catch (err) {
                alert('Delete failed!');
            }
        }
    };

    const quickUpdate = async (roomId, newAvail) => {
        try {
            const room = rooms.find(r => r._id === roomId);
            const status = newAvail === 0 ? 'full' : newAvail <= 1 ? 'limited' : 'available';
            await axios.put(`${API_BASE}/rooms/${roomId}`, {
                ...room,
                availability: newAvail,
                status
            });
            fetchRooms();
        } catch (err) {
            alert('Update failed!');
        }
    };

    // LOGIN SCREEN
    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center p-8 py-30">
                <div className="bg-gray-800/50 backdrop-blur-xl p-12 rounded-3xl w-full max-w-md border border-white/10 shadow-2xl">
                    <div className="text-center mb-12">
                        <Shield className="mx-auto text-blue-400" size={80} />
                        <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                            Admin Login
                        </h1>
                    </div>

                    <form onSubmit={login} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                placeholder="Username"
                                value={loginData.username}
                                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                                className="w-full p-5 bg-gray-700/50 backdrop-blur-sm rounded-2xl border-2 border-gray-600 hover:border-blue-500 focus:border-blue-500 focus:outline-none text-white text-lg transition-all duration-300"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                value={loginData.password}
                                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                className="w-full p-5 bg-gray-700/50 backdrop-blur-sm rounded-2xl border-2 border-gray-600 hover:border-blue-500 focus:border-blue-500 focus:outline-none text-white text-lg transition-all duration-300"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 p-5 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                        >
                            <LogIn size={28} />
                            Login to Admin Panel
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // ADMIN DASHBOARD
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-8 py-22">
            {/* Header */}
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-12 p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-white/10">
                    <div className="flex items-center gap-6">
                        <div className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/30">
                            <Shield className="text-blue-400" size={40} />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                                Admin Dashboard
                            </h1>
                            <p className="text-xl text-gray-300">Welcome back, <span className="text-cyan-400 font-bold">{user?.username}</span></p>
                        </div>
                    </div>
                    <button
                        onClick={logout}
                        className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-3"
                    >
                        Logout
                    </button>
                </div>

                {/* Add/Edit Form */}
                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl mb-12 border border-gray-700/50">
                    <h2 className="text-3xl font-bold mb-8">{editingId ? 'Edit Room' : 'Add New Room'}</h2>
                    <form onSubmit={saveRoom} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <select
                            value={formData.name}
                            onChange={(e) => {
                                const selectedName = e.target.value;
                                setFormData({
                                    ...formData,
                                    name: selectedName
                                });
                            }}
                            className="p-5 bg-gray-700/50 backdrop-blur-sm rounded-2xl border-2 border-gray-600 hover:border-blue-500 focus:border-blue-500 focus:outline-none text-white text-lg transition-all cursor-pointer appearance-none bg-no-repeat bg-right pr-12"
                            required
                        >
                            <option value="">Select Room Type</option>
                            <option value="DOUBLE SHARING">DOUBLE SHARING</option>
                            <option value="TRIPLE SHARING">TRIPLE SHARING</option>
                            <option value="FOUR PERSON SHARING">4 PERSON SHARING</option>
                            <option value="FIVE PERSON SHARING">5 PERSON SHARING</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Sharing (e.g. SOLO OCCUPANCY)"
                            value={formData.sharing}
                            onChange={(e) => setFormData({ ...formData, sharing: e.target.value })}
                            className="p-5 bg-gray-700/50 backdrop-blur-sm rounded-2xl border-2 border-gray-600 hover:border-blue-500 focus:border-blue-500 focus:outline-none text-white text-lg transition-all"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Rent (e.g. ₹6,500 / MONTH)"
                            value={formData.rent}
                            onChange={(e) => setFormData({ ...formData, rent: e.target.value })}
                            className="p-5 bg-gray-700/50 backdrop-blur-sm rounded-2xl border-2 border-gray-600 hover:border-blue-500 focus:border-blue-500 focus:outline-none text-white text-lg transition-all"
                            required
                        />
                        <input
                            type="number"
                            placeholder="Available Beds (0-10)"
                            value={formData.availability}
                            onChange={(e) => setFormData({ ...formData, availability: parseInt(e.target.value) || 0 })}
                            min="0" max="10"
                            className="p-5 bg-gray-700/50 backdrop-blur-sm rounded-2xl border-2 border-gray-600 hover:border-blue-500 focus:border-blue-500 focus:outline-none text-white text-lg transition-all"
                            required
                        />
                        <textarea
                            placeholder="Features (comma separated: Private Space, AC, WiFi)"
                            value={formData.features}
                            onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                            className="p-5 bg-gray-700/50 backdrop-blur-sm rounded-2xl border-2 border-gray-600 hover:border-blue-500 focus:border-blue-500 focus:outline-none text-white text-lg lg:col-span-2 transition-all resize-vertical"
                            rows="4"
                        />
                        <button
                            type="submit"
                            className="lg:col-span-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 p-6 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
                        >
                            <Save size={24} />
                            {editingId ? 'Update Room' : 'Add New Room'}
                        </button>
                    </form>
                </div>

                {/* Rooms List */}
                {loading ? (
                    <div className="text-center py-20">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                        <p className="mt-4 text-xl text-gray-400">Loading rooms...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {rooms.length === 0 ? (
                            <div className="col-span-full text-center py-20 bg-gray-800/50 rounded-3xl">
                                <Users className="mx-auto text-gray-500" size={64} />
                                <h3 className="text-2xl font-bold mt-6 mb-2">No Rooms Yet</h3>
                                <p className="text-gray-400 mb-8">Add your first room using the form above</p>
                                <button
                                    onClick={() => setEditingId(null)}
                                    className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-2xl font-bold text-lg"
                                >
                                    Add First Room
                                </button>
                            </div>
                        ) : (
                            rooms.map(room => (
                                <div key={room._id} className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border-2 border-gray-700/50 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-2xl lg:text-3xl font-bold mb-2">{room.name}</h3>
                                            <p className="text-xl text-gray-400">{room.sharing}</p>
                                        </div>
                                        <div className={`px-4 py-2 rounded-full text-sm font-bold ${room.status === 'available' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' :
                                                room.status === 'limited' ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' :
                                                    'bg-red-500/20 text-red-400 border-red-500/30'
                                            } border py-2 px-4`}>
                                            {room.status?.toUpperCase() || 'AVAILABLE'}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6 mb-8 p-6 bg-gray-900/30 rounded-2xl">
                                        <div>
                                            <div className="text-3xl lg:text-4xl font-bold text-white">{room.rent}</div>
                                            <div className="text-gray-400 mt-1">Rent per person</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl lg:text-4xl font-bold text-cyan-400">{room.availability}</div>
                                            <div className="text-gray-400 mt-1">Beds available</div>
                                        </div>
                                    </div>

                                    {/* Quick Update Buttons */}
                                    <div className="grid grid-cols-4 gap-3 mb-8">
                                        {[3, 2, 1, 0].map(num => (
                                            <button
                                                key={num}
                                                onClick={() => quickUpdate(room._id, num)}
                                                className={`p-4 rounded-xl font-bold text-xl transition-all group-hover:scale-105 ${room.availability === num
                                                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                                                        : 'bg-gray-700/50 hover:bg-gray-600 text-gray-300 border border-gray-600 hover:border-gray-500'
                                                    }`}
                                            >
                                                {num}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Features */}
                                    {room.features?.length > 0 && (
                                        <div className="mb-8">
                                            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                                <CheckCircle size={20} className="text-emerald-400" />
                                                Features
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {room.features.map((feature, idx) => (
                                                    <span key={idx} className="bg-gray-700/50 px-4 py-2 rounded-xl text-sm border border-gray-600">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Action Buttons */}
                                    <div className="flex gap-4 pt-6 border-t border-gray-700">
                                        <button
                                            onClick={() => editRoom(room)}
                                            className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 p-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                                        >
                                            <Edit3 size={20} />
                                            Edit Room
                                        </button>
                                        <button
                                            onClick={() => deleteRoom(room._id)}
                                            className="flex-1 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 p-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                                        >
                                            <Trash2 size={20} />
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
