'use client'
import { PulseLoader } from "react-spinners";
import React, { useEffect, useState } from "react";

export default function AddService() {
    const [inputs, setInputs] = useState([{
        name: "",
        icon: "",
    }]);
    const [service, setService] = useState({
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
    const [image, setImage] = useState(null);
    const [icon, setIcon] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setService((prevService) => ({
            ...prevService,
            uses: inputs,
        }));
    }, [inputs]);

    const handleInputChange = (index, event) => {
        const { name, type, value, files } = event.target;
        const updatedInputs = [...inputs];

        if (type === "file" && files.length > 0) {
            const file = files[0];
            updatedInputs[index].icon = file;
            setInputs(updatedInputs);
        } else {
            updatedInputs[index][name] = value;
            setInputs(updatedInputs);
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
                console.error('Upload failed:', imageData.error);
                return null;
            }
        } catch (error) {
            console.log(error.message);
            return null;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setButtonDisabled(true);
        setLoading(true);
        try {
            const uploadedImage = await uploadImage(image, 'Pony-Party/Services');
            const uploadedIcon = await uploadImage(icon, 'Pony-Party/Services/icons');

            const updatedUses = await Promise.all(inputs.map(async (input) => {
                if (input.icon) {
                    const uploadedUseIcon = await uploadImage(input.icon, 'Pony-Party/Services/assets');
                    return { ...input, icon: { url: uploadedUseIcon.secure_url, publicId: uploadedUseIcon.public_id } };
                }
                return input;
            }));

            const updatedService = {
                ...service,
                image: { url: uploadedImage.secure_url, publicId: uploadedImage.public_id },
                icon: uploadedIcon ? { url: uploadedIcon.secure_url, publicId: uploadedIcon.public_id } : {},
                uses: updatedUses,
            };

            const response = await fetch('/admin/api/add-service', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedService),
            });

            const data = await response.json();
            if (response.ok) {
                console.log("Service added successfully");
            } else {
                console.error("Error:", data.error);
            }

        } catch (error) {
            console.error("Service not added:", error);
        } finally {
            setLoading(false);
            setButtonDisabled(false);
        }
    }

    return (
        <div className="flex flex-col items-center w-full max-w-[1200px] m-auto py-[60px]">
            <div className="flex flex-rox justify-center w-full mb-[40px]">
                <h2 className="text-[28px] font-medium">ADD SERVICE</h2>
            </div>
            <div className='flex flex-col items-center w-full md:flex-row md:justify-center md:items-start'>
                <div className={`flex flex-col items-start ${service.category === 'Injection' ? 'w-full max-w-[600px]' : 'w-full'} px-[25px] md:py-[40px]`}>
                    <h3 className='text-[18px] font-bold mb-[10px]'>Service Image</h3>
                    <div className="flex flex-col w-full p-[20px] mb-[20px] border-[0.5px] border-black border-opacity-10 rounded-lg">
                        <label htmlFor="file-upload" className="w-full cursor-pointer">
                            <div className="border-2 border-dashed border-gray-300 p-4 text-center rounded-xl hover:border-black transition-all duration-200">
                                {!image ? (
                                    <p className="text-gray-500">Click to select an image</p>
                                ) : (
                                    <div className="flex flex-col items-center">
                                        <img
                                            className="h-[200px] w-auto object-fit mb-2"
                                            src={URL.createObjectURL(image)}
                                            alt="Selected"
                                        />
                                        <p className="text-black mt-2">{image.name}</p>
                                    </div>
                                )}
                            </div>
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                    <h3 className='text-[18px] font-bold mb-[10px]'>Category</h3>
                    <div className="w-full p-[20px] mb-[20px] border-[0.5px] border-black border-opacity-10 rounded-lg">
                        <label className="text-[14px] text-black">Service Category</label><br />
                        <div className="relative w-full">
                            <select
                                className="w-full p-[15px] text-[14px] border-[1px] border-black border-opacity-10 rounded-md focus:outline-none pr-[30px] appearance-none"
                                id="category"
                                value={service.category}
                                onChange={(e) => setService({ ...service, category: e.target.value })}
                                required
                            >
                                <option value="Drip">Drip</option>
                                <option value="Injection">Injection</option>
                            </select>
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
                                            {!icon ? (
                                                <p className="text-gray-500">Click to select an icon</p>
                                            ) : (
                                                <div className="flex flex-col items-center">
                                                    <img
                                                        className="h-[80px] w-auto mb-2"
                                                        src={URL.createObjectURL(icon)}
                                                        alt="Selected Icon"
                                                    />
                                                    <p className="text-black mt-2">{icon.name}</p>
                                                </div>
                                            )}
                                        </div>
                                    </label>
                                    <input
                                        id="icon-upload"
                                        type="file"
                                        className="hidden"
                                        onChange={(e) => setIcon(e.target.files[0])}
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
                                type="number"
                                id="price"
                                value={service.price}
                                placeholder='Enter price'
                                onChange={(e) => setService({ ...service, price: e.target.value })}
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
                                                {!inputs[index].icon ? (
                                                    <p className="text-gray-500">Click to select an icon</p>
                                                ) : (
                                                    <div className="flex flex-col items-center">
                                                        <img
                                                            className="h-[80px] w-auto mb-2"
                                                            src={inputs[index].icon instanceof File ? URL.createObjectURL(inputs[index].icon) : inputs[index].icon}
                                                            alt={`Selected Image ${index + 1}`}
                                                        />
                                                        <p className="text-black mt-2">{inputs[index].icon.name}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </label>
                                        <input
                                            id={`file-upload-${index}`}
                                            type="file"
                                            name="icon"
                                            className="hidden"
                                            onChange={(e) => handleInputChange(index, e)}
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
                                            onClick={() => {
                                                if (inputs.length > 1) {
                                                    setInputs(inputs.slice(0, -1));
                                                }
                                            }}
                                        >
                                            Remove use
                                        </button>
                                    )
                                }
                                <button
                                    className="flex justify-center items-center text-[14px] bg-black text-white py-2 px-4 rounded"
                                    type="button"
                                    onClick={() => {
                                        setInputs([...inputs, { name: "", icon: "" }]);
                                    }}
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
                    className="bg-black hover:shadow-lg text-white w-[140px] py-[10px] px-[20px] rounded-md"
                    type="submit"
                    disabled={buttonDisabled}
                    onClick={handleSubmit}
                >
                    {loading ? <PulseLoader color="#ffffff" size={8} /> : "Add Service"}
                </button>
            </div>
        </div>
    );
}