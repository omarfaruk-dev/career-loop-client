import { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import Spinner from '../Shared/Spinner';
import useAuth from '../../hooks/useAuth';
import useApplicationApi from '../../api/useApplicationApi';



const MyApplications = () => {

    const { user } = useAuth();
    const { myApplicationsPromise } = useApplicationApi();

    return (
        <div className='min-h-[calc(100vh-480px)] max-w-7xl mx-auto px-4 py-8'>
            <h2 className='text-center text-primary font-semibold text-3xl py-10'>My Applications</h2>
            <ApplicationStats />
            <Suspense fallback={<Spinner />}>
                <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)} />
            </Suspense>
        </div>
    );
};

export default MyApplications;