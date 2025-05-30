import React, { use } from 'react';
import { Link } from 'react-router';

const PostedJobLists = ({ jobsCreatedByPromise }) => {
    const jobs = use(jobsCreatedByPromise);
    console.log(jobs);
    return (
        <div className="overflow-x-auto rounded-lg shadow border border-secondary/20">
            <table className="table w-full rounded-lg overflow-hidden">
                <thead className="bg-secondary/10 text-secondary uppercase text-sm font-semibold">
                    <tr>
                        <th className="py-3 px-4">#</th>
                        <th className="py-3 px-4 text-left">Title</th>
                        <th className="py-3 px-4 text-left">Deadline</th>
                        <th className="py-3 px-4 text-left">Applicants</th>
                        <th className="py-3 px-4 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-secondary/10">
                    {jobs.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="py-8 px-4 text-center text-secondary text-lg font-semibold">
                                You have not posted any jobs yet.
                            </td>
                        </tr>
                    ) : (
                        jobs.map((job, index) => (
                            <tr key={job._id} className="hover:bg-secondary/5 transition-colors">
                                <td className="py-2 px-4">{index + 1}</td>
                                <td className="py-2 px-4">{job.title}</td>
                                <td className="py-2 px-4">{job.applicationDeadline}</td>
                                <td className="py-2 px-4">{job.application_count}</td>
                                <td className="py-2 px-4">
                                    <Link className='btn btn-sm btn-secondary btn-outline' to={`/view-applications/${job._id}`}>View</Link>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PostedJobLists;