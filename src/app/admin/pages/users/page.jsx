'use client'
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { AiOutlineUser } from "react-icons/ai";

export default function Messages() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const getUsersData = async () => {
        try {
            const response = await fetch('/admin/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const userData = await response.json();
            setUsers(userData.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUsersData();
    }, []);

    if (loading) {
        return (
            <div className='flex flex-col items-center justify-center w-full min-w-screen' style={{ minHeight: 'calc(100vh - 140px)' }}>
                <PulseLoader color="#A1A1AA" size={10} />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-start w-full">
            <div className="grid grid-cols-1 gap-[20px] items-start w-full rounded-md px-[20px] py-[20px] lg:grid-cols-2 2xl:grid-cols-3">
                {
                    users.map((user, index) => (
                        <div
                            className="flex flex-row items-start w-full border rounded-xl p-[20px] hover:bg-gray-50 cursor-pointer"
                            key={index}
                            onClick={() => {
                                setSelectedUser(user);
                                setIsModalOpen(true);
                            }}
                        >
                            <div className='flex flex-col items-start w-full'>
                                <div className='flex flex-row items-center'>
                                    <div className="bg-gray-100 rounded-full p-[15px]">
                                        <AiOutlineUser size={25} color="gray" />
                                    </div>
                                    <div className='flex flex-col items-start ml-[20px]'>
                                        <p className="text-[14px] text-start font-bold">
                                            {`${user.firstName} ${user.lastName}`}
                                        </p>
                                        <p className="text-[14px] text-start text-black text-opacity-60">
                                            {user.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                isModalOpen && selectedUser && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="w-11/12 bg-white rounded-xl p-6 lg:w-1/2">
                            <div className="flex flex-row items-center justify-between w-full">
                                <h2 className="text-xl font-medium mb-4">User Details</h2>
                                <div
                                    className="bg-gray-100 hover:bg-gray-200 p-[10px] rounded-full cursor-pointer"
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        setSelectedUser(null);
                                    }}
                                >
                                    <RxCross1 size={20} color="gray" />
                                </div>
                            </div>
                            <div className="flex flex-col items-center w-full mb-[20px]">
                                <div className="bg-gray-100 rounded-full p-[20px] mb-[20px]">
                                    <AiOutlineUser size={40} color="gray" />
                                </div>
                                <p className="text-[18px]">{`${selectedUser.firstName} ${selectedUser.lastName}`}</p>
                                <p className="text-[14px] text-gray-400 mb-[20px]">{selectedUser.email}</p>
                            </div>
                            <p className="text-[18px] font-semibold mb-[5px]">Address: </p>
                            <p className="text-[14px]"><b>State: </b>{selectedUser.state}</p>
                            <p className="text-[14px]"><b>City: </b>{selectedUser.city}</p>
                            <p className="text-[14px]"><b>Zip code: </b>{selectedUser.zipCode}</p>
                            <p className="text-[14px] mb-[20px]"><b>Street address: </b>{selectedUser.address}</p>
                            <p className="text-[18px] font-semibold mb-[5px]">Contact: </p>
                            <p className="text-[14px]"><b>Phone: </b>+1{selectedUser.phoneNumber}</p>
                            <p className="text-[14px]"><b>Email: </b>{selectedUser.email}</p>
                            <p className="text-[14px] mb-[20px]"><b>Email verified: </b>{selectedUser.isVerified ? "Yes" : "No"}</p>
                            <p className="text-[18px] font-semibold mb-[5px]">Other information: </p>
                            <p className="text-[14px]">
                                <b>Date of birth: </b>
                                {
                                    new Date(selectedUser.dateOfBirth).toLocaleString(undefined, {
                                        year: 'numeric',
                                        month: 'long',
                                        day: '2-digit',
                                    })
                                }
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    );
}