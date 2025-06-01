
import Hero from './Hero';
import HotJobs from './HotJobs';

const jobsPromise = fetch('https://career-loop-server.vercel.app/jobs').then(res=>res.json());

const Home = () => {
    return (
        <div>
            <Hero/>
            <HotJobs jobsPromise={jobsPromise}/>
        </div>
    );
};

export default Home;