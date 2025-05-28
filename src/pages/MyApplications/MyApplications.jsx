import  { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import Spinner from '../Shared/Spinner';
import useAuth from '../../hooks/useAuth';
import { MyApplicationsPromise } from '../../api/applicationsApi';



const MyApplications = () => {

    const { user } = useAuth();

    return (
        <div className='mt-30 max-w-[1326px] mx-auto'>
            <ApplicationStats />
            <Suspense fallback={<Spinner />}>
                <ApplicationList MyApplicationsPromise={MyApplicationsPromise(user.email)}/>
            </Suspense>
        </div>
    );
};

export default MyApplications;