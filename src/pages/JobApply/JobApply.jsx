import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const JobApply = () => {
    const {user} = useAuth();
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Here you would handle the form submission (API call, etc.)
    };

    return (
        <section className="max-w-xl mx-auto mt-30 bg-white rounded-xl shadow p-6 md:p-10 mb-16">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Job Application Form</h2>
            {submitted ? (
                <div className="text-green-600 text-center font-semibold text-lg py-10">Thank you for applying! We will review your application soon.</div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={user.displayName}
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            value={form.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-secondary/20 rounded-lg focus:outline-none focus:border-secondary"
                            placeholder="e.g. +880123456789"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Resume <span className="text-xs text-gray-400">(PDF, DOCX)</span></label>
                        <input
                            type="file"
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-secondary/20 rounded-lg focus:outline-none focus:border-secondary bg-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Cover Letter</label>
                        <textarea
                            name="coverLetter"
                            value={form.coverLetter}
                            onChange={handleChange}
                            rows={5}
                            className="w-full px-4 py-2 border border-secondary/20 rounded-lg focus:outline-none focus:border-secondary"
                            placeholder="Write a short cover letter..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-secondary text-white font-semibold py-3 rounded-lg shadow hover:bg-secondary/90 transition-all text-lg mt-2"
                    >
                        Submit Application
                    </button>
                </form>
            )}
        </section>
    );
};

export default JobApply;