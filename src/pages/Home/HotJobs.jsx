import React, { use, useState } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const categories = [...new Set(jobs.map(job => job.category))];
    const filteredJobs = selectedCategory ? jobs.filter(job => job.category === selectedCategory) : jobs;
   
    return (
        <section className="max-w-[1326px] mx-auto bg-base-100 py-10 md:py-20 px-4 md:px-8">
            {/* Header Section */}
            <div className="mb-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Jobs of the day</h2>
                <p className="text-gray-500 text-base md:text-lg mb-8">Search and connect with the right candidates faster</p>
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((cat, i) => (
                        <button
                            key={cat + i}
                            className={`px-6 py-2 rounded-lg border-2 font-semibold shadow-sm text-sm md:text-base transition-all
                                ${selectedCategory === cat
                                    ? 'border-secondary text-secondary bg-secondary/10 '
                                    : 'border-secondary/20 text-primary bg-accent hover:bg-secondary/5'}
                            `}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
            {/* Jobs Grid */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 '>
                {
                    filteredJobs.map(job => <JobCard key={job._id} job ={job}></JobCard>)
                }
            </div>
        </section>
    );
};

export default HotJobs;