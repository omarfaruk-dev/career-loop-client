
import { motion } from "motion/react"


const Hero = () => {
    return (
        <section className="bg-[#f6f9fc] py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
                {/* Left: Text & Search */}
                <div className="flex-1 max-w-xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0a2259] mb-6">
                        The <motion.span
                            animate={
                                { color: ['#00b88e', '#00D','#0a2259', ],
                                    transition: {duration: 3, repeat: Infinity}
                                 }
                            }
                            className="text-blue-500">Easiest Way</motion.span><br />
                        to Get Your New Job
                    </h1>
                    <p className="text-gray-500 text-lg mb-8 max-w-md">
                        Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day
                    </p>
                    {/* Search Bar */}
                    <form className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg p-4 gap-2 md:gap-4 w-full max-w-2xl mb-6">
                        <div className="flex items-center gap-2 flex-1">
                            <span className="text-gray-400 text-xl">
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 3v4M8 3v4"></path></svg>
                            </span>
                            <select className="bg-transparent outline-none w-full text-gray-700">
                                <option>Industry</option>
                                <option>IT</option>
                                <option>Finance</option>
                                <option>Education</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2 flex-1">
                            <span className="text-gray-400 text-xl">
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 1 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </span>
                            <select className="bg-transparent outline-none w-full text-gray-700">
                                <option>Location</option>
                                <option>Dhaka</option>
                                <option>Chittagong</option>
                                <option>Remote</option>
                            </select>
                        </div>
                        <input type="text" className="flex-1 bg-transparent outline-none px-2 py-2 text-gray-700" placeholder="Your keyword..." />
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition-all">
                            <span className="hidden md:inline">Search</span>
                            <span className="md:hidden">
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
                            </span>
                        </button>
                    </form>
                    {/* Popular Searches */}
                    <div className="text-gray-600 text-sm font-medium">
                        <span className="font-semibold text-gray-700">Popular Searches:</span>
                        <a href="#" className="ml-2 text-blue-500 underline">Designer</a>,
                        <a href="#" className="ml-2 text-blue-500 underline">Web</a>,
                        <a href="#" className="ml-2 text-blue-500 underline">IOS</a>,
                        <a href="#" className="ml-2 text-blue-500 underline">Developer</a>,
                        <a href="#" className="ml-2 text-blue-500 underline">PHP</a>,
                        <a href="#" className="ml-2 text-blue-500 underline">Senior</a>,
                        <a href="#" className="ml-2 text-blue-500 underline">Engineer</a>
                    </div>
                </div>
                {/* Right: Images */}
                <div className="flex-1 flex flex-col items-end gap-6 mt-12 md:mt-0">
                    <div className=" relative flex flex-col items-end">
                        <motion.img
                            animate={{ y: [0, 50, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            src="https://i.postimg.cc/P56skFWS/inspire-your-teamwork-keep-achieving-group-asian-team-creative-business-people-hand-raise-up-partner.jpg" alt="Teamwork" className="w-3/4 rounded-t-3xl border-s-8 border-b-8 border-secondary object-cover object-center shadow-lg mb-6" />
                        <motion.img
                            animate={{ x: [100, 150, 100] }}
                            transition={{ duration: 10, repeat: Infinity }}
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Business Meeting" className="w-1/2 rounded-t-3xl border-s-8 border-b-8 border-secondary object-cover object-center shadow-lg absolute -bottom-30 -right-30" />

                    </div>
                </div>
            </div>
            {/* Decorative background shapes */}
            <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-blue-50 to-transparent -z-10"></div>
        </section>
    );
};

export default Hero;