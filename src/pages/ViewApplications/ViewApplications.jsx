import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewApplications = () => {
    const {job_id} = useParams();
    const applications = useLoaderData();
    return (
        <div className='min-h-[calc(100vh-480px)] max-w-7xl mx-auto px-4 py-8'>
            job id: {job_id}
            Applications: {applications.length}
        </div>
    );
};

export default ViewApplications;