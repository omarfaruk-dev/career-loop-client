import React, { useContext, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { FaUser } from 'react-icons/fa';

const MyProfile = () => {
    const { user } = useAuth();
    const { signOutUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [showEdit, setShowEdit] = useState(false);
    const [editForm, setEditForm] = useState({
        displayName: user?.displayName || '',
        photoURL: user?.photoURL || ''
    });
    const [updating, setUpdating] = useState(false);
    const [imgError, setImgError] = useState(false);

    const handleSignOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will be logged out of your account.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3C65F5',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log out',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                signOutUser();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Sign Out Successful!',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    navigate('/');
                });
            }
        });
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        setUpdating(true);
        try {
            await updateUser({ displayName: editForm.displayName, photoURL: editForm.photoURL });
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Profile updated!',
                showConfirmButton: false,
                timer: 1500
            });
            setShowEdit(false);
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Update failed',
                text: err.message || 'Could not update profile.'
            });
        } finally {
            setUpdating(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto py-16 px-4 min-h-[70vh] flex flex-col items-center justify-center">
            <div className="w-full bg-base-100 rounded-2xl shadow-2xl shadow-secondary/20 border border-secondary/30 p-10 flex flex-col items-center gap-8 relative overflow-visible">
                {/* Colorful light effect shadow using Tailwind */}
                <div className="avatar mb-2 z-10">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                        {/* Gradient border using a parent wrapper and padding */}
                        <div className="w-full h-full rounded-full p-[4px]" style={{background: 'conic-gradient(at top right,  #3C65F5, #00D0FD, #7B9DFF, #3C65F5)'}}>
                            <div className="w-full h-full rounded-full bg-base-100 overflow-hidden shadow-lg flex items-center justify-center">
                                {user?.photoURL && !imgError ? (
                                    <img 
                                        src={user.photoURL} 
                                        alt={user?.displayName || 'User'} 
                                        className="w-full h-full object-cover rounded-full" 
                                        onError={() => setImgError(true)}
                                    />
                                ) : (
                                    <span className="flex items-center justify-center w-full h-full">
                                        <FaUser className="text-secondary text-[5.5rem]" />
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="text-3xl font-extrabold text-primary text-center z-10">{user?.displayName || 'Your Name'}</h2>
                <p className="text-accent text-center text-lg z-10">{user?.email}</p>
                <div className="flex flex-col sm:flex-row gap-6 w-full z-10">
                    <div className="flex-1 bg-secondary/5 rounded-lg p-4 flex flex-col items-center">
                        <span className="text-xs text-gray-500">Role</span>
                        <span className="font-semibold text-secondary text-lg mt-1">{user?.role || 'User'}</span>
                    </div>
                    <div className="flex-1 bg-secondary/5 rounded-lg p-4 flex flex-col items-center">
                        <span className="text-xs text-gray-500">Member Since</span>
                        <span className="font-semibold text-secondary text-lg mt-1">{user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A'}</span>
                    </div>
                    <div className="flex-1 bg-secondary/5 rounded-lg p-4 flex flex-col items-center">
                        <span className="text-xs text-gray-500">Verified</span>
                        <span className={`font-semibold text-lg mt-1 ${user?.emailVerified ? 'text-green-600' : 'text-red-500'}`}>{user?.emailVerified ? 'Yes' : 'No'}</span>
                    </div>
                </div>
                <div className="w-full items-center justify-center flex flex-col sm:flex-row gap-4 mt-8 z-10">
                    <button className="btn btn-secondary w-full sm:w-auto shadow-md" onClick={() => setShowEdit(true)}>Edit Profile</button>
                    <button className="btn btn-outline btn-error w-full sm:w-auto shadow-md" onClick={handleSignOut}>Sign Out</button>
                </div>
                {/* Edit Profile Modal */}
                {showEdit && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                        <form onSubmit={handleEditSubmit} className="bg-base-100 rounded-xl shadow-lg p-8 w-full max-w-md relative">
                            <button type="button" className="absolute top-2 right-2 text-xl text-secondary" onClick={() => setShowEdit(false)}>&times;</button>
                            <h3 className="text-2xl font-bold mb-6 text-primary text-center">Edit Profile</h3>
                            <div className="mb-4">
                                <label className="block text-primary font-medium mb-1">Display Name</label>
                                <input
                                    type="text"
                                    name="displayName"
                                    value={editForm.displayName}
                                    onChange={handleEditChange}
                                    className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-primary font-medium mb-1">Photo URL</label>
                                <input
                                    type="text"
                                    name="photoURL"
                                    value={editForm.photoURL}
                                    onChange={handleEditChange}
                                    className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
                                />
                            </div>
                            <button type="submit" className="btn btn-secondary w-full" disabled={updating}>
                                {updating ? 'Updating...' : 'Save Changes'}
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyProfile;