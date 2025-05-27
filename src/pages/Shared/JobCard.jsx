import React from 'react';
import { FaMapMarkerAlt, FaBriefcase, FaClock } from 'react-icons/fa';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router';

const JobCard = ({ job }) => {
    const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        company_logo
    } = job;

    // Format salary (with BDT icon, dash for range, and smaller font)
    let salary = '';
    let salaryUnit = '';
    if (salaryRange?.currency === 'bdt') {
        salaryUnit = '/Month';
        if (salaryRange?.min && salaryRange?.max) {
            salary = (
                <span className="inline-flex items-center gap-1 text-base">
                    <span className="text-primary">Salary:</span> <TbCurrencyTaka className="text-secondary text-base" />
                    <span className="text-sm">{salaryRange.min}</span>
                    <span className="mx-1 text-gray-400 text-sm">-</span>
                    <span className="text-sm">{salaryRange.max}</span>
                </span>
            );
        } else if (salaryRange?.min) {
            salary = (
                <span className="inline-flex items-center gap-1 text-base">
                    <span className="text-primary">Salary:</span> <TbCurrencyTaka className="text-secondary text-base" />
                    <span className="text-sm">{salaryRange.min}</span>
                </span>
            );
        }
    } else {
        salaryUnit = '/Hour';
        salary = [salaryRange?.min, salaryRange?.max, salaryRange?.currency].filter(Boolean).join(' ');
    }

    // Show applicationDeadline as plain string
    const deadline = applicationDeadline || '';

    return (
        <div className="bg-secondary/5 border hover:bg-base-100 border-secondary/10 rounded-xl p-6 shadow-sm transition hover:shadow-md flex flex-col justify-between min-w-[270px] max-w-xs w-full mx-auto md:max-w-sm lg:max-w-xs">
            {/* Company & Logo */}
            <div className="flex items-center gap-3 mb-2">
                <img src={company_logo} alt={company} className="w-12 h-12 rounded-lg object-cover  border border-secondary/10" />
                <div>
                    <h3 className="font-semibold text-lg text-primary leading-tight">{company}</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                        <FaMapMarkerAlt className="text-secondary" />
                        <span>{location}</span>
                    </div>
                </div>
            </div>
            {/* Title & Meta */}
            <div className="mb-2">
                <div className="font-bold text-primary mb-1">{title}</div>
                <div className="text-sm text-primary font-semibold mb-1">{category}</div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-primary/80 mb-2">
                    <span className="flex items-center gap-1">
                        <FaBriefcase className="text-secondary" />
                        {jobType}
                    </span>
                    <span className="flex items-center gap-1">
                        <FaClock className="text-secondary" /> Deadline:
                        {deadline}
                    </span>
                </div>
            </div>
            {/* Description */}
            <div className="text-gray-500 text-sm mb-3 line-clamp-2 min-h-[40px]">{description}</div>
            {/* Requirements/Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {requirements && requirements.slice(0, 3).map((req, i) => (
                    <span key={i} className="bg-secondary/10 text-primary text-xs font-medium px-3 py-1 rounded-md border border-secondary/10">{req}</span>
                ))}
            </div>
            {/* Salary & Button */}
            <div className="flex flex-col items-center justify-center mt-auto pt-2 gap-3 ">
                <span className="text-secondary font-bold">
                    {salary || '৳800'}
                    <span className="font-normal text-gray-400">{salaryUnit}</span>
                </span>
                <Link to={`/job-details/${_id}`} className="bg-secondary/10 text-secondary font-semibold px-5 py-2 rounded-lg transition hover:bg-secondary hover:text-white border border-secondary/10 text-sm w-full sm:w-auto whitespace-nowrap">Apply Now</Link>
            </div>
        </div>
    );
};

export default JobCard;