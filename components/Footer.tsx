'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Send, Youtube } from 'lucide-react';
import T from '@/components/ui/T';

export default function Footer() {
    return (
        <footer id="footer" className="bg-[#101828] text-white pt-24 pb-12 rounded-t-[3rem] mt-12 relative overflow-hidden">

            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D92D20] via-[#FDB022] to-[#D92D20]"></div>

            <div className="w-full max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logos/kn-icon.png"
                                alt="KN"
                                width={40}
                                height={40}
                                className="w-10 h-10 rounded-lg"
                            />
                            <span className="text-2xl font-nunito font-extrabold tracking-tight">KNOWLY</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            <T>Your AI-powered learning companion for Cambridge, Edexcel, and more.</T>
                        </p>
                        <div className="flex gap-4">
                            <a href="https://instagram.com/knowly.uz" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D92D20] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://t.me/knowlyuz" aria-label="Telegram" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D92D20] transition-colors">
                                <Send className="w-5 h-5" />
                            </a>
                            <a href="https://youtube.com/@knowlyuz" aria-label="YouTube" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D92D20] transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6"><T>Platform</T></h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="https://www.knowly.uz/#curriculums" className="hover:text-[#FDB022] transition-colors"><T>Curriculums</T></a></li>
                            <li><a href="https://www.knowly.uz/#teachers" className="hover:text-[#FDB022] transition-colors"><T>Teachers</T></a></li>
                            <li><a href="https://www.knowly.uz/#mission" className="hover:text-[#FDB022] transition-colors"><T>Our Mission</T></a></li>
                            <li><a href="https://teacher.knowly.uz/apply" className="hover:text-[#FDB022] transition-colors"><T>Become a Teacher</T></a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact (Dynamic) */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="font-bold text-lg mb-6"><T>Contact Us</T></h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            {/* Phone */}
                            <a href="tel:+998944101777" className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800/50 hover:bg-gray-800 transition-colors border border-gray-700">
                                <div className="w-10 h-10 rounded-full bg-[#FDB022]/10 flex items-center justify-center text-[#FDB022]">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider"><T>Call Us</T></p>
                                    <p className="font-bold text-lg">+998 94 410 17 77</p>
                                </div>
                            </a>

                            {/* Email */}
                            <a href="mailto:contact@knowly.uz" className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800/50 hover:bg-gray-800 transition-colors border border-gray-700">
                                <div className="w-10 h-10 rounded-full bg-[#D92D20]/10 flex items-center justify-center text-[#D92D20]">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider"><T>Email</T></p>
                                    <p className="font-bold text-lg">contact@knowly.uz</p>
                                </div>
                            </a>

                            {/* Location */}
                            <div className="md:col-span-2 flex items-center gap-4 p-4 rounded-2xl bg-gray-800/50 border border-gray-700">
                                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider"><T>Location</T></p>
                                    <p className="font-bold text-lg">Ferghana, Uzbekistan</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p><T>© 2026 KNOWLY. All rights reserved.</T></p>
                    <div className="flex gap-6">
                        <a href="/privacy" className="hover:text-white"><T>Privacy Policy</T></a>
                        <a href="/terms" className="hover:text-white"><T>Terms of Service</T></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
