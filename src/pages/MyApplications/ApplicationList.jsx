import React, { use } from 'react';
import ApplicationRow from './ApplicationRow';

const ApplicationList = ({ MyApplicationsPromise }) => {
    const applications = use(MyApplicationsPromise);


    return (
        <div className="min-h-[calc(100vh-480px)] max-w-7xl mx-auto px-4 py-8 overflow-x-auto">
            <table className="table border border-secondary/5">
                {/* head */}
                <thead className='bg-secondary/10'>
                    <tr>
                        <th>Company</th>
                        <th>Job Type</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row */}
                    {
                        applications.map(application =>
                            <ApplicationRow
                                key={application._id}
                                application={application}
                            ></ApplicationRow>)
                    }
                </tbody>
                {/* foot */}
            </table>
        </div>
    );
};

export default ApplicationList;