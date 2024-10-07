'use client'
import { PulseLoader } from "react-spinners";
import React, { useEffect, useState } from "react";

export default function EditService({ params }) {
    const { id } = params;
    const [inputs, setInputs] = useState([{
        name: "",
        icon: { url: "", publicId: "" },
    }]);
    const [service, setService] = useState({
        _id: id,
        title: "",
        subTitle: "",
        ingredients: "",
        effects: "",
        category: "Drip",
        price: "",
        description: "",
        image: { url: "", publicId: "" },
        icon: { url: "", publicId: "" },
        uses: inputs,
    });
    const [image, setImage] = useState({
        url: "",
        publicId: "",
    });
    const [icon, setIcon] = useState({
        url: "",
        publicId: "",
    });
    const [loading, setLoading] = useState(false);
    const [screenLoading, setScreenLoading] = useState(true);

    const getServiceData = async () => {
        setScreenLoading(true);
        try {
            const response = await fetch('/api/service', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id: id }),
            });
            const serviceData = await response.json();
            setService(serviceData.data);
            setInputs(serviceData.data.uses);
            setImage(serviceData.data.image);
            setIcon(serviceData.data.icon);
        } catch (error) {
            console.error('Error fetching treatment:', error);
        } finally {
            setScreenLoading(false);
        }
    };

    useEffect(() => {
        getServiceData();
    }, []);

    useEffect(() => {
        setService((prevService) => ({
            ...prevService,
            uses: inputs,
        }));
    }, [inputs]);

    const addMoreInputs = () => {
        setInputs([...inputs, { name: "", icon: "" }]);
    };

    const removeInput = () => {
        if (inputs.length > 1) {
            setInputs(inputs.slice(0, -1));
        }
    };

    const handleInputChange = (index, event) => {
        const { name, type, value, files } = event.target;
        const updatedInputs = [...inputs];

        if (type === "file" && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                updatedInputs[index].icon = file;
                setInputs(updatedInputs);
            };
            reader.readAsDataURL(file);
        } else {
            updatedInputs[index][name] = value;
            setInputs(updatedInputs);
        }
    };

    const handleSubmit = async () => {
        setLoading(true);
        await updateService(service);
        setLoading(false);
    }

    const updateService = async (updatedService) => {
        try {
            const response = await fetch('/admin/api/update-service', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedService),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Service updated successfully:', data);
            } else {
                console.error('Error updating service:', data.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const uploadImage = async (file, path) => {
        try {
            const formData = new FormData();
            formData.append('image', file);
            formData.append('path', path);

            const response = await fetch('/admin/api/upload-image', {
                method: 'POST',
                body: formData,
            });

            const imageData = await response.json();

            if (response.ok) {
                console.log('Uploaded successfully:', imageData);
                return imageData.data;
            } else {
                console.error('Upload failed:', data.error);
                return null;
            }
        } catch (error) {
            console.log(error.message);
            return null;
        }
    }

    const deleteImage = async (publicId) => {

        const response = await fetch('/admin/api/delete-image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ publicId }),
        });

        if (response.ok) {
            console.log('Image deleted successfully');
        }
    }

    if (screenLoading) {
        return (
            <div className='flex flex-col items-center justify-center w-full min-w-screen'>
                <PulseLoader color="#ffa9f9" size={10} />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center w-full max-w-[1200px] m-auto py-[60px]">
            <div className="flex flex-rox justify-center w-full mb-[40px]">
                <h2 className="text-[28px] font-medium">UPDATE SERVICE</h2>
            </div>
            <div className='flex flex-col items-center w-full md:flex-row md:justify-center md:items-start'>
                <div className={`flex flex-col items-start ${service.category === 'Injection' ? 'w-full max-w-[600px]' : 'w-full'} px-[25px] md:py-[40px]`}>
                    <h3 className='text-[18px] font-bold mb-[10px]'>Service Image</h3>
                    <div className="flex flex-col w-full p-[20px] mb-[20px] border-[0.5px] border-black border-opacity-10 rounded-lg">
                        <label htmlFor="file-upload" className="w-full cursor-pointer">
                            <div className="border-2 border-dashed border-gray-300 p-4 text-center rounded-xl hover:border-black transition-all duration-200">
                                {
                                    loading ? (
                                        <div className='flex flex-col items-center justify-center h-[200px]'>
                                            <PulseLoader color="#ffa9f9" size={10} />
                                        </div>
                                    ) : (
                                        !image ? (
                                            <p className="text-gray-500">Click to select an image</p>
                                        ) : (
                                            <div className="flex flex-col items-center">
                                                <img
                                                    className="h-[200px] w-auto object-fit"
                                                    src={image.url instanceof File ? URL.createObjectURL(image.url) : image.url}
                                                    alt="Selected"
                                                />
                                            </div>
                                        )
                                    )
                                }
                            </div>
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            disabled={loading}
                            onChange={async (e) => {
                                if (e.target.files.length > 0) {
                                    setLoading(true);
                                    setImage((prevImage) => ({ ...prevImage, url: e.target.files[0] }));
                                    await deleteImage(image.publicId);
                                    const imageData = await uploadImage(e.target.files[0], 'Pony-Party/Services');
                                    await updateService({ _id: id, image: { url: imageData.secure_url, publicId: imageData.public_id } });
                                    setLoading(false);
                                }
                            }}
                        />
                    </div>
                    <h3 className='text-[18px] font-bold mb-[10px]'>Category</h3>
                    <div className="w-full p-[20px] mb-[20px] border-[0.5px] border-black border-opacity-10 rounded-lg">
                        <label className="text-[14px] text-black">Service Category</label><br />
                        <div className="relative w-full">
                            <div className="w-full p-[15px] text-[14px] border-[1px] border-black border-opacity-10 rounded-md focus:outline-none pr-[30px] appearance-none">
                                <p>{service.category}</p>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-[15px] pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-[18px] font-bold mb-[10px]'>Basic Information</h3>
                    <div className="flex flex-col w-full p-[20px] mb-[20px] border-[0.5px] border-black border-opacity-10 rounded-lg">
                        <div className="mb-[15px] w-full">
                            <label className="text-[14px] text-black">Service title</label><br />
                            <input className='w-full p-[15px] text-[14px] border-[1px] border-black border-opacity-10 rounded-md focus:outline-none'
                                type="text"
                                id="title"
                                value={service.title}
                                placeholder='Enter service title'
                                onChange={(e) => setService({ ...service, title: e.target.value })}
                                required
                            />
                        </div>
                        {
                            service.category === 'Drip' ?
                                <div className="mb-[15px] w-full">
                                    <label className="text-[14px] text-black">Service sub-title</label><br />
                                    <input className="w-full p-[15px] text-[14px] border-[1px] border-black border-opacity-10 rounded-md focus:outline-none"
                                        type="text"
                                        id="subTitle"
                                        value={service.subTitle}
                                        placeholder='Enter sub-title'
                                        onChange={(e) => setService({ ...service, subTitle: e.target.value })}
                                        required
                                    />
                                </div> : null
                        }
                        <div className="w-full">
                            <label className="text-[14px] text-black">Description</label><br />
                            <textarea
                                className="w-full p-[15px] text-[14px] border-[1px] border-black border-opacity-10 rounded-md focus:outline-none resize-none"
                                id="description"
                                value={service.description}
                                placeholder='Description...'
                                onChange={(e) => setService({ ...service, description: e.target.value })}
                                rows="4"
                                required
                            />
                        </div>
                    </div>
                    {
                        service.category === 'Injection' ? (
                            <div className='w-full'>
                                <h3 className='text-[18px] font-bold mb-[10px]'>Icon <span className='text-[14px] font-medium'>(Represents your service)</span></h3>
                                <div className="flex flex-col w-full p-[20px] mb-[20px] border-[0.5px] border-black border-opacity-10 rounded-lg">
                                    <label className="text-[14px] text-black">Icon</label>
                                    <label htmlFor="icon-upload" className="w-full cursor-pointer">
                                        <div className="border-2 border-dashed border-gray-300 p-4 text-center rounded-xl hover:border-black transition-all duration-200">
                                            {
                                                loading ? (
                                                    <div className='flex flex-col items-center justify-center h-[80px]'>
                                                        <PulseLoader color="#ffa9f9" size={10} />
                                                    </div>
                                                ) : (
                                                    !icon ? (
                                                        <p className="text-gray-500">Click to select an icon</p>
                                                    ) : (
                                                        <div className="flex flex-col items-center">
                                                            <img
                                                                className="h-[80px] w-auto"
                                                                src={icon.url instanceof File ? URL.createObjectURL(icon.url) : icon.url}
                                                                alt="Selected Icon"
                                                            />
                                                        </div>
                                                    )
                                                )
                                            }
                                        </div>
                                    </label>
                                    <input
                                        id="icon-upload"
                                        type="file"
                                        className="hidden"
                                        onChange={async (e) => {
                                            if (e.target.files.length > 0) {
                                                setLoading(true);
                                                setIcon((prevIcon) => ({ ...prevIcon, url: e.target.files[0] }));
                                                await deleteImage(icon.publicId);
                                                const iconData = await uploadImage(e.target.files[0], 'Pony-Party/Services/icons');
                                                await updateService({ _id: id, icon: { url: iconData.secure_url, publicId: iconData.public_id } });
                                                setLoading(false);
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        ) : null
                    }
                    <h3 className='text-[18px] font-bold mb-[10px]'>Details</h3>
                    <div className="flex flex-col w-full p-[20px] mb-[20px] border-[0.5px] border-black border-opacity-10 rounded-lg">
                        {
                            service.category === 'Drip' ?
                                <div className="mb-[15px] w-full">
                                    <label className="text-[14px] text-black">Ingredients</label><br />
                                    <input className="w-full p-[15px] text-[14px] border-[1px] border-black border-opacity-10 rounded-md focus:outline-none"
                                        type="text"
                                        id="ingredients"
                                        value={service.ingredients}
                                        placeholder='Enter ingredients'
                                        onChange={(e) => setService({ ...service, ingredients: e.target.value })}
                                        required
                                    />
                                </div> : null
                        }
                        <div className="mb-[15px] w-full">
                            <label className="text-[14px] text-black">Effects</label><br />
                            <input className="w-full p-[15px] text-[14px] border-[1px] border-black border-opacity-10 rounded-md focus:outline-none"
                                type="text"
                                id="effects"
                                value={service.effects}
                                placeholder='Enter effects'
                                onChange={(e) => setService({ ...service, effects: e.target.value })}
                                required
                            />
                        </div>
                        <div className="mb-[15px] w-full">
                            <label className="text-[14px] text-black">Price</label><br />
                            <input
                                className="w-full p-[15px] text-[14px] border-[1px] border-black border-opacity-10 rounded-md focus:outline-none"
                                type="text"
                                id="price"
                                value={service.price}
                                placeholder="Enter price"
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^\d*\.?\d*$/.test(value)) {
                                        setService({ ...service, price: value });
                                    }
                                }}
                                required
                            />
                        </div>
                    </div>
                </div>
                {
                    service.category === 'Drip' ? (
                        <div className="flex flex-col items-end w-full px-[25px] md:py-[40px]">
                            <div className='items-start w-full mb-[10px]'>
                                <h3 className='text-[18px] font-bold'>Uses</h3>
                            </div>
                            {inputs.map((input, index) => (
                                <div key={index} className="w-full p-[20px] mb-[20px] border-[0.5px] border-black border-opacity-10 rounded-lg">
                                    <div className="mb-[15px]">
                                        <div className='flex flex-row justify-center items-center px-[40px] mb-[15px]'>
                                            <div className='h-[1px] w-full bg-gray-300'></div>
                                            <p className='text-gray-400 text-[12px] tracking-widest w-fit whitespace-nowrap mx-[20px]'>USE {index + 1}</p>
                                            <div className='h-[1px] w-full bg-gray-300'></div>
                                        </div>
                                        <label htmlFor={`file-upload-${index}`} className="w-full cursor-pointer">
                                            <div className="border-2 border-dashed border-gray-300 p-4 text-center rounded-xl hover:border-black transition-all duration-200">
                                                {
                                                    loading ? (
                                                        <div className='flex flex-col items-center justify-center h-[80px]'>
                                                            <PulseLoader color="#ffa9f9" size={10} />
                                                        </div>
                                                    ) : (
                                                        !inputs[index].icon ? (
                                                            <p className="text-gray-500">Click to select an icon</p>
                                                        ) : (
                                                            <div className="flex flex-col items-center">
                                                                <img
                                                                    className="h-[80px] w-auto"
                                                                    src={inputs[index].icon instanceof File ? URL.createObjectURL(inputs[index].icon) : inputs[index].icon.url}
                                                                    alt={`Selected Image ${index + 1}`}
                                                                />
                                                            </div>
                                                        )
                                                    )
                                                }
                                            </div>
                                        </label>
                                        <input
                                            id={`file-upload-${index}`}
                                            type="file"
                                            name="icon"
                                            className="hidden"
                                            disabled={loading}
                                            onChange={async (e) => {
                                                if (e.target.files.length > 0) {
                                                    setLoading(true);
                                                    await deleteImage(service.uses[index].icon.publicId);
                                                    const imageData = await uploadImage(e.target.files[0], 'Pony-Party/Services/assets');
                                                    const updatedInputs = [...inputs];
                                                    updatedInputs[index].icon = {
                                                        url: imageData.secure_url,
                                                        publicId: imageData.public_id,
                                                    };
                                                    await updateService({ _id: id, uses: updatedInputs });
                                                    setLoading(false);
                                                }
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[14px] text-black">Title</label><br />
                                        <input className='w-full p-[15px] text-[14px] border-[1px] border-black border-opacity-10 rounded-md focus:outline-none'
                                            type="text"
                                            name='name'
                                            value={input.name}
                                            placeholder="Enter title"
                                            onChange={(e) => handleInputChange(index, e)}
                                            required
                                        />
                                    </div>
                                </div>
                            ))}
                            <div className='flex flex-row justify-end w-full gap-x-[10px]'>
                                {
                                    inputs.length > 1 && (
                                        <button
                                            className="flex justify-center items-center text-[14px] bg-red-500 text-white py-2 px-4 rounded"
                                            type="button"
                                            onClick={removeInput}
                                        >
                                            Remove use
                                        </button>
                                    )
                                }
                                <button
                                    className="flex justify-center items-center text-[14px] bg-black text-white py-2 px-4 rounded"
                                    type="button"
                                    onClick={addMoreInputs}
                                >
                                    Add use
                                </button>
                            </div>
                        </div>
                    ) : (
                        null
                    )
                }
            </div>
            <div className="flex flex-rox justify-center w-full mt-[40px]">
                <button
                    className="bg-black hover:shadow-lg text-white w-[160px] py-[10px] px-[20px] rounded-md"
                    type="submit"
                    disabled={loading}
                    onClick={handleSubmit}
                >
                    {loading ? <PulseLoader color="#ffffff" size={8} /> : "Update Service"}
                </button>
            </div>
        </div>
    );
}