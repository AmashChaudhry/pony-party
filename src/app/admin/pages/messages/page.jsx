'use client'
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

export default function Messages() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState(null);

    const getMessagesData = async () => {
        try {
            const response = await fetch('/admin/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const messageData = await response.json();
            setMessages(messageData.data);
        } catch (error) {
            console.error('Error fetching Messages:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMessagesData();
    }, []);

    messages.sort((a, b) => new Date(b.sendAt) - new Date(a.sendAt));

    if (loading) {
        return (
            <div className='flex flex-col items-center justify-center w-full min-w-screen' style={{ minHeight: 'calc(100vh - 140px)' }}>
                <PulseLoader color="#A1A1AA" size={10} />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-start w-full">
            <div className="grid grid-cols-1 gap-[20px] items-start w-full px-[20px] py-[20px]">
                {
                    messages.map((message, index) => (
                        <div
                            className="flex flex-row items-start w-full border rounded-md p-[20px] cursor-pointer"
                            key={index}
                            onClick={() => {
                                setSelectedMessage(message);
                                setIsModalOpen(true);
                            }}
                        >
                            <div className='flex flex-col items-start w-full'>
                                <div className='flex flex-col items-start'>
                                    <p className="text-[14px] text-start font-bold">
                                        {`${message.firstName} ${message.lastName}`}
                                    </p>
                                    <p className="text-[14px] text-start text-black text-opacity-40 mb-[20px]">
                                        {
                                            new Date(message.sendAt).toLocaleString(undefined, {
                                                year: 'numeric',
                                                month: 'long',
                                                day: '2-digit',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                hour12: true,
                                            })
                                        }
                                    </p>
                                    <p className="text-[14px] text-start text-black line-clamp-2 text-opacity-60">
                                        {message.message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                isModalOpen && selectedMessage && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="w-11/12 bg-white rounded-xl p-6 lg:w-1/2">
                            <div className="flex flex-row items-center justify-between w-full">
                                <h2 className="text-xl font-medium mb-4">Message Details</h2>
                                <div
                                    className="bg-gray-100 hover:bg-gray-200 p-[10px] rounded-full cursor-pointer"
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        setSelectedMessage(null);
                                    }}
                                >
                                    <RxCross1 size={20} color="gray" />
                                </div>
                            </div>
                            <p className="text-[18px]">{`${selectedMessage.firstName} ${selectedMessage.lastName}`}</p>
                            <p className="text-[14px] text-start text-black text-opacity-40 mb-[10px]">
                                {
                                    new Date(selectedMessage.sendAt).toLocaleString(undefined, {
                                        year: 'numeric',
                                        month: 'long',
                                        day: '2-digit',
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        hour12: true,
                                    })
                                }
                            </p>
                            <p className="text-[14px] mb-[20px]">{selectedMessage.category}</p>
                            <p className="text-[14px] opacity-80 mb-[40px]">{selectedMessage.message}</p>
                            <p className="text-[14px]"><b>City: </b>{selectedMessage.city}</p>
                            <p className="text-[14px]"><b>Phone: </b>+1{selectedMessage.phoneNumber}</p>
                            <p className="text-[14px] text-blue-500"><b className="text-black">Email: </b>{selectedMessage.email}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
}