import React, { use } from 'react';
import ApplicationRow from './ApplicationRow';

const ApplicationList = ({ MyApplicationsPromise }) => {
    const applications = use(MyApplicationsPromise);
    console.log(applications);

    return (
        <div className="overflow-x-auto">
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