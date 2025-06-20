import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import PostedJobLists from './PostedJobLists';
import Spinner from '../Shared/Spinner';
import useJobApi from '../../api/useJobApi';

const MyPostedJobs = () => {

    const { user } = useAuth();
    const {jobsCreatedByPromise} = useJobApi();

    return (
        <div className='min-h-[calc(100vh-480px)] max-w-7xl mx-auto px-4 py-8'>
            <h2 className='text-center text-primary font-semibold text-3xl py-10'>My Posted Jobs</h2>
            <Suspense fallback={<Spinner />}>
                <PostedJobLists jobsCreatedByPromise={jobsCreatedByPromise(user.email)} />
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;