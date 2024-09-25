'use client'
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
        image: "",
        icon: "",
        uses: inputs,
    });
    const [image, setImage] = useState(null);
    const [icon, setIcon] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setService((prevService) => ({
            ...prevService,
            uses: inputs,
        }));
    }, [inputs]);

    const addMoreInputs = () => {
        setInputs([...inputs, { name: "", icon: "" }]);
    };

    const handleInputChange = (index, event) => {
        const { name, type, value, files } = event.target;
        const updatedInputs = [...inputs];

        if (type === "file" && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                updatedInputs[index].icon = reader.result;
                updatedInputs[index].icon = file;
                console.log(updatedInputs[index].icon);
                setInputs(updatedInputs);
            };
            reader.readAsDataURL(file);
        } else {
            updatedInputs[index][name] = value;
            setInputs(updatedInputs);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setButtonDisabled(true);
        setLoading(true);
        try {
            const uploadedImageURL = await uploadImage(image);
            const uploadedIconURL = await uploadImage(icon);

            const updatedUses = await Promise.all(inputs.map(async (input) => {
                if (input.icon) {
                    const uploadedIcon = await uploadImage(input.icon);
                    return { ...input, icon: uploadedIcon };
                }
                return input;
            }));

            const updatedService = {
                ...service,
                image: uploadedImageURL,
                icon: uploadedIconURL,
                uses: updatedUses,
            };

            // const updatedService = {
            //     ...service,
            //     image: uploadedImageURL,
            //     icon: uploadedIconURL
            // };

            const response = await fetch('/api/add-service', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedService),
            });

            const data = await response.json();

            if (response.status === 400) {
                setErrorMessage(data.error);
            } else if (response.ok) {
                console.log("Added successfully");
            } else {
                setErrorMessage("An error occurred. Please try again.");
            }

        } catch (error) {
            console.log("Rgisteration failed");
        }
    }

    const uploadImage = async (file) => {
        try {
            const formData = new FormData();
            formData.append('image', file);

            const response = await fetch('/api/upload-image', {
                method: 'POST',
                body: formData,
            });

            const imageData = await response.json();

            if (response.ok) {
                console.log('Uploaded successfully:', imageData);
                return imageData.data.secure_url;
            } else {
                console.error('Upload failed:', data.error);
                return null;
            }
        } catch (error) {
            console.log(error.message);
            return null;
        }
    }

    return (
        <div className="flex flex-col items-center w-full max-w-[1200px] m-auto sm:px-[20px] lg:px-[60px]">
            <div className="flex flex-col items-start w-full max-w-[500px] px-[25px] py-[40px]">
                <div className="flex flex-rox justify-center w-full mb-[30px]">
                    <h2 className="text-[24px] font-bold">Add Service</h2>
                </div>
                <div className="flex flex-col w-full mb-[15px]">
                    <form>
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </form>
                </div>
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">Category</label><br />
                    <select
                        className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        id="category"
                        value={service.category}
                        onChange={(e) => setService({ ...service, category: e.target.value })}
                        required
                    >
                        <option value="Drip">Drip</option>
                        <option value="Injection">Injection</option>
                    </select>
                </div>
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">Service name</label><br />
                    <input className={`w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none`}
                        type="text"
                        id="title"
                        value={service.title}
                        onChange={(e) => setService({ ...service, title: e.target.value })}
                        required
                    />
                </div>
                {
                    service.category === 'Drip' ?
                        <div className="mb-[15px] w-full">
                            <label className="text-black text-opacity-60">Service sub-title</label><br />
                            <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                                type="text"
                                id="subTitle"
                                value={service.subTitle}
                                onChange={(e) => setService({ ...service, subTitle: e.target.value })}
                                required
                            />
                        </div> : null
                }
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">Ingredients</label><br />
                    <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="text"
                        id="ingredients"
                        value={service.ingredients}
                        onChange={(e) => setService({ ...service, ingredients: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">Effects</label><br />
                    <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="text"
                        id="effects"
                        value={service.effects}
                        onChange={(e) => setService({ ...service, effects: e.target.value })}
                        required
                    />
                </div>
                {
                    service.category === 'Injection' ?
                        <div className="flex flex-col w-full mb-[15px]">
                            <label className="text-black text-opacity-60">Service Icon</label>
                            <form>
                                <input
                                    type="file"
                                    onChange={(e) => setIcon(e.target.files[0])}
                                />
                            </form>
                        </div> : null
                }
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">Price</label><br />
                    <input
                        className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="number"
                        id="price"
                        value={service.price}
                        onChange={(e) => setService({ ...service, price: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">Description</label><br />
                    <textarea
                        className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none resize-none"
                        id="description"
                        value={service.description}
                        onChange={(e) => setService({ ...service, description: e.target.value })}
                        rows="4"
                        required
                    />
                </div>
                <div className="w-full">
                    {inputs.map((input, index) => (
                        <div key={index} className="mb-4">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Select Image {index + 1}
                                </label>
                                <input
                                    type="file"
                                    name="icon"
                                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                                    onChange={(e) => handleInputChange(index, e)}
                                />
                            </div>
                            {input.icon && (
                                <img
                                    src={input.icon}
                                    alt={`icon ${index + 1}`}
                                    className="mt-2 max-w-full h-auto"
                                />
                            )}
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Description {index + 1}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={input.name}
                                    onChange={(e) => handleInputChange(index, e)}
                                    className="w-full p-2 border border-gray-300 rounded mb-4"
                                    placeholder="Enter description"
                                />
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        className="bg-[#ffa9f9] text-white py-2 px-4 rounded hover:bg-[#ff85f1] transition duration-300"
                        onClick={addMoreInputs}
                    >
                        Add Another
                    </button>
                </div>
                <div className="flex flex-rox justify-center w-full">
                    <button
                        className="bg-[#ffa9f9] hover:bg-black text-white w-fit py-[15px] px-[20px]"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Add Service
                    </button>
                </div>
            </div>
        </div>
    );
}