import axios from 'axios';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    // const { job_id } = useParams();
    const applications = useLoaderData();
    console.log(applications);

    const handleStatusChange = (e, app_id) => {
        const newStatus = e.target.value;
        console.log(newStatus, app_id);

        // send to the server/ db
        axios.patch(`http://localhost:3000/applications/${app_id}`, { status: newStatus })
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
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications.map((application, index) => (
                                <tr key={application._id}>
                                    <th>{index + 1}</th>
                                    <td>{application.name}</td>
                                    <td>{application.email}</td>
                                    <td>
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
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;