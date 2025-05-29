
import React, { use } from 'react';
import { Link } from 'react-router';

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
                        <th>Deadline</th>
                        <th>View Applications</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        jobs.map((job, index) => (
                            <tr key={job._id}>
                                <td>{index + 1}</td>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td> <Link className='btn btn-sm btn-secondary btn-outline' to ={`/view-applications/${job._id}`}>View</Link> </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default PostedJobLists;