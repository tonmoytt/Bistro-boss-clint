import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import contactimg from '../../../../assets/sadid/shop/banner2.jpg';

const ContactUs = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    // The form content extracted to reuse
    const formContent = (
        <>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Your Details</h2>
            <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-3 bg-[#121212] text-sm border border-gray-700 rounded-md focus:outline-none focus:border-yellow-400"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 bg-[#121212] text-sm border border-gray-700 rounded-md focus:outline-none focus:border-yellow-400"
                    />
                </div>
                <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-[#121212] text-sm border border-gray-700 rounded-md focus:outline-none focus:border-yellow-400"
                />
                <textarea
                    placeholder="Comments / Questions"
                    className="w-full h-32 px-4 py-3 bg-[#121212] text-sm border border-gray-700 rounded-md focus:outline-none focus:border-yellow-400 resize-none"
                ></textarea>
                <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md transition w-full sm:w-auto"
                >
                    Contact Us
                </button>
            </form>
        </>
    );

    return (
        <div className="bg-[#111] text-white w-full">
            {/* Header */}
            <header className="relative w-full overflow-hidden">
                <img
                    src={contactimg}
                    alt="Contact Banner"
                    className="w-full h-[50vh] sm:h-[65vh] object-cover brightness-[.7]"
                />
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 flex items-center justify-center text-3xl sm:text-5xl font-bold uppercase tracking-wider"
                >
                    Contact Us
                </motion.h1>
            </header>

            {/* Contact Section */}
            <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Get In Touch</h2>
                    <p className="text-gray-300 mb-6 text-sm sm:text-base">
                        Have questions? We’re here to help. Reach out for reservations, queries, or feedback.
                    </p>
                    <div className="text-sm text-gray-400 space-y-3 leading-6">
                        <div><strong>📍 Address:</strong> Seyujgari , Bogura</div>
                        <div><strong>📞 Phone:</strong> +880 123 456 7890</div>
                        <div><strong>✉️ Email:</strong> contact@sovybd.com</div>
                        <div><strong>🕒 Open:</strong> Everyday 10AM - 11PM</div>
                    </div>
                    <div className="mt-6">
                        <p className="uppercase text-gray-500 text-sm mb-2">Follow Us</p>
                        <div className="flex flex-wrap gap-4 text-lg text-yellow-400">
                            <a href="#">Facebook</a>
                            <a href="#">Instagram</a>
                            <a href="#">Twitter</a>
                        </div>
                    </div>
                </motion.div>

                {/* Right Form */}
                {isMobile ? (
                    <div className="bg-[#1b1b1b] p-6 rounded-lg shadow-lg">
                        {formContent}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-[#1b1b1b] p-6 rounded-lg shadow-lg"
                    >
                        {formContent}
                    </motion.div>
                )}
            </section>

            {/* CTA Section */}
            <motion.section
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="min-h-[40vh] bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9')"
                }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Reserve A Table Now</h2>
                <p className="text-gray-200 mb-6 text-sm sm:text-base">Fine dining awaits. Book your experience today!</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-medium transition">
                    Make a Reservation
                </button>
            </motion.section>

            {/* Footer */}
            <footer className="bg-[#0f0f0f] text-gray-500 text-sm text-center py-6 mt-10">
                <p>Tonmoy © {new Date().getFullYear()} | Facebook • Twitter • Instagram • TripAdvisor</p>
            </footer>
        </div>
    );
};

export default ContactUs;
