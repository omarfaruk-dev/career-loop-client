import { Link, useLoaderData } from 'react-router';
import { FaMapMarkerAlt, FaBriefcase, FaClock } from 'react-icons/fa';
import { TbCurrencyTaka } from 'react-icons/tb';

const JobDetails = () => {
    const job = useLoaderData();
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
        responsibilities,
        company_logo,
        hr_name,
        hr_email
    } = job;

    return (
        <section className='min-h-[calc(100vh-480px)] max-w-7xl mx-auto px-4 py-8'>
            {/* Cover Photo Section */}
            <div className=" h-40 md:h-56 flex items-center justify-center bg-gradient-to-br from-secondary/30 via-base-100/20 to-secondary/30 rounded-2xl mb-8">
                <h1 className="text-secondary text-2xl md:text-4xl font-bold drop-shadow-lg">{title}</h1>
            </div>
            <div className="max-w-4xl mx-auto bg-base-100 rounded-xl shadow p-6 md:p-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Left: Logo & Info */}
                    <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/3">
                        <img src={company_logo} alt={company} className="w-24 h-24 rounded-2xl object-cover border border-secondary/10 bg-gray-100" />
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-bold text-primary mb-1">{company}</h2>
                            <div className="flex items-center gap-2 text-gray-500 text-sm mb-1 justify-center md:justify-start">
                                <FaMapMarkerAlt className="text-secondary" />
                                <span>{location}</span>
                            </div>
                            <div className="text-xs text-gray-400 mb-1">Category: <span className="text-primary font-semibold">{category}</span></div>
                            <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                                <FaBriefcase className="text-secondary" /> {jobType}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                                <FaClock className="text-secondary" /> Deadline: {applicationDeadline}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                                <TbCurrencyTaka className="text-secondary text-base" />
                                <span className="text-primary font-semibold">{salaryRange?.min} - {salaryRange?.max} {salaryRange?.currency?.toUpperCase()}</span>
                            </div>
                        </div>
                        <div className="mt-4 text-xs text-gray-500">
                            <div>HR: <span className="font-semibold text-primary">{hr_name}</span></div>
                            <div>Email: <a href={`mailto:${hr_email}`} className="text-secondary underline">{hr_email}</a></div>
                        </div>
                    </div>
                    {/* Right: Details */}
                    <div className="flex-1 w-full">
                        <h1 className="text-3xl font-bold text-primary mb-4">{title}</h1>
                        <p className="text-gray-600 text-base mb-6">{description}</p>
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-primary mb-2">Requirements</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {requirements && requirements.map((req, i) => (
                                    <li key={i}>{req}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-primary mb-2">Responsibilities</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {responsibilities && responsibilities.map((res, i) => (
                                    <li key={i}>{res}</li>
                                ))}
                            </ul>
                        </div>
                        <Link to={`/job-apply/${_id}`} className="bg-secondary text-base-100 font-semibold px-8 py-3 rounded-lg shadow hover:bg-secondary/90 transition-all text-lg mt-4">Apply Now</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobDetails;