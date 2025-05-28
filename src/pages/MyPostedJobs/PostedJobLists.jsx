import React, { use } from 'react';

const PostedJobLists = ({ jobsCreatedByPromise }) => {
    const jobs = use(jobsCreatedByPromise);
    console.log(jobs);
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Title</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        jobs.map((job, index) => (
                            <tr key={job._id}>
                                <td>{index + 1}</td>
                                <td>{job.title}</td>
                                <td>{job.jobType}</td>
                                <td>{job.favoriteColor}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default PostedJobLists;