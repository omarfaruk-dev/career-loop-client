import React, { use } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise);
    return (
        <div className='max-w-7xl mx-auto bg-base-100 py-10 md:py-20 px-4 md:px-8'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 '>
                {
                    jobs.map(job => <JobCard key={job._id} job ={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;