import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#f6f9fc] border-t border-secondary/10 mt-16">
            <div className="max-w-[1326px] mx-auto px-4 md:px-8 py-12">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                    {/* Brand & Social */}
                    <div className="w-full lg:w-1/6 min-w-[180px] mb-8 md:mb-0 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                            <img src="/logo.png" alt="JobBox Logo" className="w-8 h-8" />
                            <span className="text-2xl font-bold text-[#0a2259]">Job<span className="text-secondary">Box</span></span>
                        </div>
                        <p className="text-gray-500 text-sm mb-5 max-w-xs">
                            JobBox is the heart of the design community and the best resource to discover and connect with designers and jobs worldwide
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-secondary hover:text-primary transition text-xl bg-white rounded-full p-2 shadow border border-secondary/10">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-secondary hover:text-primary transition text-xl bg-white rounded-full p-2 shadow border border-secondary/10">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-secondary hover:text-primary transition text-xl bg-white rounded-full p-2 shadow border border-secondary/10">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                    {/* Footer Links */}
                    <div className="w-full lg:w-5/6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                        <div className="min-w-0">
                            <h4 className="font-semibold text-primary mb-3">Resources</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Candidates</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="min-w-0">
                            <h4 className="font-semibold text-primary mb-3">Community</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#">Feature</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Credit</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="min-w-0">
                            <h4 className="font-semibold text-primary mb-3">Quick links</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#">iOS</a></li>
                                <li><a href="#">Android</a></li>
                                <li><a href="#">Microsoft</a></li>
                                <li><a href="#">Desktop</a></li>
                            </ul>
                        </div>
                        <div className="min-w-0">
                            <h4 className="font-semibold text-primary mb-3">More</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Helps</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="min-w-0">
                            <h4 className="font-semibold text-primary mb-3">Download App</h4>
                            <p className="text-gray-600 text-xs mb-3">
                                Download our Apps and get extra 15% Discount on your first Order...!
                            </p>
                            <div className="flex gap-2">
                                <a href="#">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="App Store" className="h-8" />
                                </a>
                                <a href="#">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Divider */}
                <div className="border-t border-secondary/10 my-8"></div>
                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-gray-500 text-sm">
                        Copyright © {new Date().getFullYear()}. JobBox all right reserved
                    </div>
                    <div className="flex gap-6 text-sm text-gray-600">
                        <a href="#" className="hover:text-secondary">Privacy Policy</a>
                        <a href="#" className="hover:text-secondary">Terms & Conditions</a>
                        <a href="#" className="hover:text-secondary">Security</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;