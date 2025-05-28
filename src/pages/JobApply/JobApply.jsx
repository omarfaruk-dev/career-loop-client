import useAuth from '../../hooks/useAuth';
import { useParams, useNavigate } from 'react-router';

const JobApply = () => {
    const {id: jobId} = useParams();
    const {user} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        const portfolio = form.portfolio.value;
        const coverLetter = form.coverLetter.value;

        const application = {name, email, phone, linkedin, github, portfolio, resume, coverLetter};
        
        // Here you would handle the form submission (API call, etc.)
    };

    return (
        <>
            <div className="mt-30 flex items-center justify-between max-w-xl mx-auto mb-4 px-2">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="text-primary border border-secondary/20 px-4 py-2 rounded-lg font-semibold hover:bg-secondary/10 transition"
                >
                    &larr; Back
                </button>
                <button
                    type="button"
                    onClick={() => navigate(`/job-details/${jobId}`)}
                    className="text-primary border border-secondary/20 px-4 py-2 rounded-lg font-semibold hover:bg-secondary/10 transition"
                >
                    Job Details
                </button>
            </div>
            <section className="max-w-xl mx-auto mt-10 bg-white rounded-xl shadow p-6 md:p-10 mb-16">
                <h2 className="text-2xl font-bold text-primary mb-6 text-center">Job Application Form</h2>
                
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-primary mb-1">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={user.displayName}
                                required
                                className="w-full px-4 py-2 border border-secondary/20 rounded-lg focus:outline-none focus:border-secondary"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-primary mb-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                required
                                className="w-full px-4 py-2 border border-secondary/20 rounded-lg focus:outline-none focus:border-secondary"
                                placeholder="you@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-primary mb-1">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                className="w-full px-4 py-2 border border-secondary/20 rounded-lg focus:outline-none focus:border-secondary"
                                placeholder="+880123456789"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-primary mb-1">Linkedin Profile URL</label>
                            <input
                                type="url"
                                name="linkedin"
                                required
                                className="w-full px-4 py-2 border border-secondary/20 rounded-lg focus:outline-none focus:border-secondary"
                                placeholder="linkedin/in/username"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-primary mb-1">Github Profile URL</label>
                            <input
                                type="url"
                                name="github"
                                required
                                className="w-full px-4 py-2 border border-secondary/20 rounded-lg focus:outline-none focus:border-secondary"
                                placeholder="github.com/username"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-primary mb-1">Portfolio URL</label>
                            <input
                                type="url"
                                name="portfolio"
                                required
                                className="w-full px-4 py-2 border border-secondary/20 rounded-lg focus:outline-none focus:border-secondary"
                                placeholder="yourwebsite.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-primary mb-1">Resume URL</label>
                            <input
                                type="url"
                                name="resume"
                                required
                                className="w-full px-4 py-2 border border-secondary/20 rounded-lg focus:outline-none focus:border-secondary"
                                placeholder="Your resume url"
                            />
                        </div>
                        {/* <div>
                            <label className="block text-sm font-medium text-primary mb-1">Resume <span className="text-xs text-gray-400">(PDF, DOCX)</span></label>
                            <input
                                type="file"
                                name="resume"
                                accept=".pdf,.doc,.docx"
                                required
                                className="w-full px-4 py-2 border border-secondary/20 rounded-lg focus:outline-none focus:border-secondary bg-white"
                            />
                        </div> */}
                        <div>
                            <label className="block text-sm font-medium text-primary mb-1">Cover Letter</label>
                            <textarea
                                name="coverLetter"
                                rows={5}
                                className="w-full px-4 py-2 border border-secondary/20 rounded-lg focus:outline-none focus:border-secondary"
                                placeholder="Write a short cover letter..."
                            />
                        </div>
                        <div className='text-center'>
                            <button
                            type="submit"
                            className="btn btn-secondary text-base-100 rounded-lg transition-all text-lg mt-2"
                        >
                            Submit Application
                        </button>
                        </div>
                    </form>
            </section>
        </>
    );
};

export default JobApply;