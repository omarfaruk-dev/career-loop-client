
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const AddJob = () => {

    const {user} = useAuth();

    const handleAddJob = (e)=> {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const jobData = Object.fromEntries(formData.entries());
        console.log(jobData);

        //process salary range data
        const {min, max, currency, ...newJob} = jobData;
        newJob.salaryRange = { min, max, currency}
        console.log(newJob);
        //process requirements data
        newJob.requirements = jobData.requirements.split(',').map(req => req.trim());

        //process responsibilities data
        newJob.responsibilities = jobData.responsibilities.split(',').map(res => res.trim());

        //add post to the database
        axios.post('http://localhost:3000/jobs', newJob)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Job has been posted successfully!",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    // form.reset();
                }
            })
            .catch(error => {
                console.error("Error posting job:", error);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Failed to post job. Please try again.",
                    showConfirmButton: true,
                });
            });

    }





    return (
        <div className="mt-16 max-w-5xl py-10 md:py-20 mx-auto flex flex-col items-center">
            <section className="w-full max-w-5xl border-2 p-4 md:p-6 lg:p-8 rounded-lg border-secondary/30 shadow-md">
                <h2 className="text-3xl text-primary font-bold mb-6 text-center">Post a New Job</h2>
                <form  
                onSubmit={handleAddJob} 
                className="space-y-4">
                    {/* Job Title, Location, Job Type in one row */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-primary font-medium">Job Title</span>
                            </label>
                            <input type="text" name="title" className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="Software Engineer" />
                        </div>
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-primary font-medium">Location</span>
                            </label>
                            <input type="text" name="location" className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="Halishohor, Chittagong" />
                        </div>
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-primary font-medium">Job Type</span>
                            </label>
                            <select
                                name="jobType"
                                className="select select-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                            >
                                <option>Hybrid</option>
                                <option>Remote</option>
                                <option>Onsite</option>
                                <option>Part Time</option>
                                <option>Full Time</option>
                            </select>
                        </div>
                    </div>
                    {/* Category, Application Deadline, Status in one row */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-primary font-medium">Category</span>
                            </label>
                            <select name="category" className="select select-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary">
                                <option>Engineering</option>
                                <option>Design</option>
                                <option>Marketing</option>
                                <option>Finance</option>
                                <option>Management</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-primary font-medium">Application Deadline</span>
                            </label>
                            <input type="date" name="applicationDeadline" className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary" defaultValue="2024-12-31" />
                        </div>
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-primary font-medium">Status</span>
                            </label>
                            <select name="status" className="select select-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary">
                                <option>active</option>
                                <option>inactive</option>
                            </select>
                        </div>
                    </div>
                    {/* Salary Min/Max/Currency in one row */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-primary font-medium">Salary Min</span>
                            </label>
                            <input type="number" name="min" className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="40000" />
                        </div>
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-primary font-medium">Salary Max</span>
                            </label>
                            <input type="number" name="max" className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="60000" />
                        </div>
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-primary font-medium">Currency</span>
                            </label>
                            <select name="currency" className="select select-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary">
                                <option>bdt</option>
                                <option>usd</option>
                                <option>eur</option>
                                <option>gbp</option>
                            </select>
                        </div>
                    </div>
                    {/* Company Name, Company Logo URL in one row */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-primary font-medium">Company Name</span>
                            </label>
                            <input type="text" name="company" className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="Favorite IT" />
                        </div>
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-primary font-medium">Company Logo URL</span>
                            </label>
                            <input type="url" name="company_logo" className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="https://company.com/logo.png" />
                        </div>
                    </div>
                    {/* Description */}
                    <div>
                        <label className="label">
                            <span className="label-text text-primary font-medium">Description</span>
                        </label>
                        <textarea name="description" rows={6} className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary min-h-[120px]" placeholder="We are seeking a skilled Software Engineer to join our dynamic team...."></textarea>
                    </div>
                    {/* Requirements, Responsibilities in one row */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-primary font-medium">Requirements (comma separated)</span>
                            </label>
                            <input type="text" name="requirements" className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="JavaScript, React, Node.js, MongoDB" />
                        </div>
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-primary font-medium">Responsibilities (comma separated)</span>
                            </label>
                            <input type="text" name="responsibilities" className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="Develop and maintain software, Collaborate with the team, Participate in code reviews" />
                        </div>
                    </div>
                    {/* HR Name/Email in one row */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-primary font-medium">HR Name</span>
                            </label>
                            <input type="text" name="hr_name" defaultValue={user.displayName} className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="Farhan Rahman" />
                        </div>
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-primary font-medium">HR Email</span>
                            </label>
                            <input type="email" name="hr_email" value={user.email} readOnly className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="hr@techsolutions.com" />
                        </div>
                    </div>
                    {/* Submit Button */}
                    <button type="submit" className="btn btn-secondary text-white w-full rounded-md mt-4">
                        Post Job
                    </button>
                </form>
            </section>
        </div>
    );
};

export default AddJob;