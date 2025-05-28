import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import PostedJobLists from './PostedJobLists';
import Spinner from '../Shared/Spinner';
import { jobsCreatedByPromise } from '../../api/JobsApi';

const MyPostedJobs = () => {

    const { user } = useAuth();

    return (
        <div className='min-h-[calc(100vh-480px)] max-w-7xl mx-auto px-4 py-8'>
            <h2>My Posted JObs</h2>
            <Suspense fallback={<Spinner />}>
                <PostedJobLists jobsCreatedByPromise={jobsCreatedByPromise(user.email)} />
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;