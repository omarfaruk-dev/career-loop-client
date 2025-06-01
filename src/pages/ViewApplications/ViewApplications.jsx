import axios from 'axios';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { FaArrowLeft } from "react-icons/fa";

const ViewApplications = () => {
    const applications = useLoaderData();
    const navigate = useNavigate();
    console.log(applications);

    const handleStatusChange = (e, app_id) => {
        const newStatus = e.target.value;
        console.log(newStatus, app_id);

        // send to the server/ db
        axios.patch(`https://career-loop-server.vercel.app/applications/${app_id}`, { status: newStatus })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Status updated successfully!",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
            .catch(error => {
                console.error("Error updating status:", error);
            });

    }

    return (
        <div className='min-h-[calc(100vh-480px)] max-w-7xl mx-auto px-4 py-8'>
            <div className="flex items-center mb-2">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="btn btn-outline btn-sm btn-secondary flex items-center gap-2"
                >
                    <FaArrowLeft size={15} /> Back
                </button>
            </div>
            <h2 className='text-center text-primary font-semibold text-3xl py-10'>View Applications</h2>
            <div className="overflow-x-auto rounded-lg shadow border border-secondary/20">
                <table className="table w-full rounded-lg overflow-hidden">
                    <thead className="bg-secondary/10 text-secondary uppercase text-sm font-semibold">
                        <tr>
                            <th className="py-3 px-4">Serial</th>
                            <th className="py-3 px-4 text-left">Name</th>
                            <th className="py-3 px-4 text-left">Email</th>
                            <th className="py-3 px-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-secondary/10">
                        {applications.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="py-8 px-4 text-center text-secondary text-lg font-semibold">
                                    No applications found for this job yet.
                                </td>
                            </tr>
                        ) : (
                            applications.map((application, index) => (
                                <tr key={application._id} className="hover:bg-secondary/5 transition-colors">
                                    <td className="py-2 px-4">{index + 1}</td>
                                    <td className="py-2 px-4">{application.name}</td>
                                    <td className="py-2 px-4">{application.email}</td>
                                    <td className="py-2 px-4">
                                        <select
                                            onChange={(e) => handleStatusChange(e, application._id)}

                                            defaultValue={application.status || 'Update Status'}
                                            className="select select-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                                        >
                                            <option disabled={true}>Update Status</option>
                                            <option >Pending</option>
                                            <option >Rejected</option>
                                            <option >Interview</option>
                                            <option >Hired</option>
                                        </select>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;