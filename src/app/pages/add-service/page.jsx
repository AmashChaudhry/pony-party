'use client'
import React, { useEffect, useState } from "react";

export default function AddService() {
    const [service, setService] = useState({
        title: "",
        subTitle: "",
        ingredients: "",
        effects: "",
        category: "",
        price: "",
        description: "",
        image: "",
        icon: "",
        uses: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    const [inputs, setInputs] = useState([{ image: "", description: "" }]);

    // Function to handle adding more image pickers and input bars
    const addMoreInputs = () => {
        setInputs([...inputs, { image: "", description: "" }]);
    };

    // Function to handle changes for both image and description input fields
    const handleInputChange = (index, event) => {
        const updatedInputs = [...inputs];
        updatedInputs[index][event.target.name] = event.target.value;
        setInputs(updatedInputs);
    };

    return (
        <div className="flex flex-col items-center w-full max-w-[1200px] m-auto sm:px-[20px] lg:px-[60px]">
            <form className="flex flex-col items-start w-full max-w-[500px] px-[25px] py-[40px]">
                <div className="flex flex-rox justify-center w-full mb-[30px]">
                    <h2 className="text-[24px] font-bold">Add Service</h2>
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
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">Service sub-title</label><br />
                    <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="text"
                        id="subTitle"
                        value={service.subTitle}
                        onChange={(e) => setService({ ...service, subTitle: e.target.value })}
                        required
                    />
                </div>
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
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">Effects</label><br />
                    <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="text"
                        id="uses"
                        value={service.uses}
                        onChange={(e) => setService({ ...service, uses: e.target.value })}
                        required
                    />
                </div>
                <div className="w-full p-4">
                    {/* Displaying image pickers and input bars dynamically */}
                    {inputs.map((input, index) => (
                        <div key={index} className="mb-4">
                            {/* Image Picker */}
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Select Image {index + 1}
                            </label>
                            <input
                                type="file"
                                name="image"
                                className="w-full p-2 mb-2 border border-gray-300 rounded"
                                onChange={(e) => handleInputChange(index, e)}
                            />

                            {/* Input Bar for description */}
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Description {index + 1}
                            </label>
                            <input
                                type="text"
                                name="description"
                                value={input.description}
                                onChange={(e) => handleInputChange(index, e)}
                                className="w-full p-2 border border-gray-300 rounded mb-4"
                                placeholder="Enter description"
                            />
                        </div>
                    ))}

                    {/* Button to add more image pickers and input bars */}
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
                        className={`${buttonDisabled ? "bg-gray-200 text-gray-400" : "bg-[#ffa9f9] hover:bg-black text-white"} w-fit py-[15px] px-[20px]`}
                        type="submit"
                        disabled={buttonDisabled}
                    >
                        {loading ? "Loading..." : "Register"}
                    </button>
                </div>
            </form>
        </div>
    );
}