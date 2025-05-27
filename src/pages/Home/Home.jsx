
import Hero from './Hero';
import HotJobs from './HotJobs';

const jobsPromise = fetch('http://localhost:3000/jobs').then(res=>res.json());

const Home = () => {
    return (
        <div>
            <Hero/>
            <HotJobs jobsPromise={jobsPromise}/>
        </div>
    );
};

export default Home;