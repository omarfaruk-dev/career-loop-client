import React, { use, useState } from 'react';
import ApplicationRow from './ApplicationRow';
import Swal from 'sweetalert2';
import axios from 'axios';

const ApplicationList = ({ MyApplicationsPromise }) => {
    const applications = use(MyApplicationsPromise);
    const [jobApp, setJobApp] = useState(applications);
    console.log(jobApp);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/applications/${id}`)
                    .then(res => {

                        console.log(res.data);
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Application has been deleted.",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            
                            // Remove the deleted application from the state
                            const updatedApplications = jobApp.filter(application => application._id !== id);
                            setJobApp(updatedApplications);
                        }
                    })
                    .catch(error => {
                        console.error("Error deleting application:", error);
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong while deleting the application.",
                        });
                    }
                    )
            }
        });


    }


    return (

        <div className="overflow-x-auto rounded-lg shadow border border-secondary/20">
            <table className="table w-full rounded-lg overflow-hidden">
                <thead className="bg-secondary/10 text-secondary uppercase text-sm font-semibold">
                    <tr>
                        <th className="py-3 px-4 text-left">Company</th>
                        <th className="py-3 px-4 text-left">Job Type</th>
                        <th className="py-3 px-4 text-left">Status</th>
                        <th className="py-3 px-4 text-left">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-secondary/10">
                    {jobApp.length === 0 ? (
                        <tr>
                            <td colSpan={4} className="py-8 px-4 text-center text-secondary text-lg font-semibold">
                                You Haven't Apply for any job yet.
                            </td>
                        </tr>
                    ) : (
                        jobApp.map(application =>
                            <ApplicationRow
                                key={application._id}
                                handleDelete={handleDelete}
                                application={application}
                                setJobApp={setJobApp}
                                rowClassName="hover:bg-secondary/5 transition-colors"
                            />)
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ApplicationList;