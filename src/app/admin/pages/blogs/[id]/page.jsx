'use client'
import { PulseLoader } from "react-spinners";
import React, { useEffect, useState } from "react";

export default function EditBlog({ params }) {
    const { id } = params;
    const [loading, setLoading] = useState(false);
    const [screenLoading, setScreenLoading] = useState(true);
    const [categories, setCategories] = useState([""]);
    const [image, setImage] = useState({
        url: "",
        publicId: "",
    });
    const [subTopics, setSubTopics] = useState([{
        title: "",
        description: "",
        image: { url: "", publicId: "" },
    }]);
    const [blog, setBlog] = useState({
        _id: id,
        title: "",
        description: "",
        image: { url: "", publicId: "" },
        subTopics: subTopics,
        categories: categories,
        author: "",
        conclusion: "",
    });

    const getBlogData = async () => {
        try {
            const response = await fetch('/api/blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id: id }),
            });
            const blogData = await response.json();
            setBlog(blogData.data);
            setImage(blogData.data.image);
            setCategories(blogData.data.categories);
            setSubTopics(blogData.data.subTopics);
        } catch (error) {
            console.error('Error fetching treatment:', error);
        } finally {
            setScreenLoading(false);
        }
    };

    useEffect(() => {
        getBlogData();
    }, []);

    useEffect(() => {
        setBlog((prevBlog) => ({
            ...prevBlog,
            subTopics: subTopics,
            categories: categories,
        }));
    }, [subTopics, categories, image]);

    const handleSubTopicChange = (index, event) => {
        const { name, type, value, files } = event.target;
        const updatedInputs = [...subTopics];

        if (type === "file" && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                updatedInputs[index].image = file;
                setSubTopics(updatedInputs);
            };
            reader.readAsDataURL(file);
        } else {
            updatedInputs[index][name] = value;
            setSubTopics(updatedInputs);
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

    const updateBlog = async (updatedBlog) => {
        try {
            const response = await fetch('/admin/api/update-blog', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedBlog),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Blog updated successfully:', data);
            } else {
                console.error('Error updating Blog:', data.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

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
                <h2 className="text-[28px] font-medium">UPDATE BLOG</h2>
            </div>
            <div className='flex flex-col items-center w-full md:flex-row md:justify-center md:items-start'>
                <div className='flex flex-col items-start w-full px-[25px] md:py-[40px]'>
                    <h3 className='text-[18px] font-bold mb-[10px]'>Blog Title Image</h3>
                    <div className="flex flex-col w-full p-[20px] mb-[20px] border-[0.5px] border-black border-opacity-10 rounded-lg">
                        <label htmlFor="file-upload" className="w-full cursor-pointer">
                            <div className="border-2 border-dashed border-gray-300 p-4 text-center rounded-xl hover:border-black transition-all duration-200">
                                {
                                    loading ? (
                                        <div className='flex flex-col items-center justify-center h-[200px]'>
                                            <PulseLoader color="#ffa9f9" size={10} />
                                        </div>
                                    ) : (
                                        !image.url ? (
                                            <p className="text-gray-500">Click to select an image</p>
                                        ) : (
                                            <div className="flex flex-col items-center">
                                                <img
                                                    className="h-full w-auto object-fit rounded-xl"
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
                                    const imageData = await uploadImage(e.target.files[0], 'Pony-Party/Blogs');
                                    console.log("Image url: ", imageData.secure_url);
                                    await updateBlog({ _id: id, image: { url: imageData.secure_url, publicId: imageData.public_id } });
                                    setLoading(false);
                                }
                            }}
                        />
                    </div>
                    <h3 className='text-[18px] font-bold mb-[10px]'>Category</h3>
                    <div className="w-full p-[20px] mb-[20px] border-[0.5px] border-black border-opacity-10 rounded-lg">
                        <label className="text-[14px] text-black">Blog Category</label><br />
                        {
                            categories.map((category, index) => (
                                <input
                                    className='w-full p-[15px] text-[14px] mb-[15px] border-[1px] border-black border-opacity-10 rounded-md focus:outline-none'
                                    key={index}
                                    type="text"
                                    value={category}
                                    placeholder='Enter category'
                                    onChange={(event) => {
                                        const updatedCategories = [...categories];
                                        updatedCategories[index] = event.target.value;
                                        setCategories(updatedCategories);
                                    }}
                                    required
                                />
                            ))
                        }
                        <div className="flex flex-row justify-end w-full gap-x-[10px]">
                            {
                                categories.length > 1 && (
                                    <button
                                        className="flex justify-center items-center text-[14px] bg-red-500 text-white py-2 px-4 rounded"
                                        type="button"
                                        onClick={() => {
                                            if (categories.length > 1) {
                                                setCategories(categories.slice(0, -1));
                                            }
                                        }}
                                    >
                                        Remove
                                    </button>
                                )
                            }
                            <button
                                className="flex justify-center items-center text-[14px] bg-black text-white py-2 px-4 rounded"
                                type="button"
                                onClick={() => {
                                    setCategories([...categories, ""]);
                                }}
                            >
                                Add Category
                            </button>
                        </div>
                    </div>
                    <h3 className='text-[18px] font-bold mb-[10px]'>Basic Information</h3>
                    <div className="flex flex-col w-full p-[20px] mb-[20px] border-[0.5px] border-black border-opacity-10 rounded-lg">
                        <div className="mb-[15px] w-full">
                            <label className="text-[14px] text-black">Blog title</label><br />
                            <input className='w-full p-[15px] text-[14px] border-[1px] border-black border-opacity-10 rounded-md focus:outline-none'
                                type="text"
                                id="title"
                                value={blog.title}
                                placeholder='Enter blog title'
                                onChange={(e) => setBlog({ ...blog, title: e.target.value })}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="text-[14px] text-black">Description of blog</label><br />
                            <textarea
                                className="w-full p-[15px] text-[14px] border-[1px] border-black border-opacity-10 rounded-md focus:outline-none resize-none"
                                id="description"
                                value={blog.description}
                                placeholder='Description...'
                                onChange={(e) => setBlog({ ...blog, description: e.target.value })}
                                rows="4"
                                required
                            />
                        </div>
                    </div>
                    <h3 className='text-[18px] font-bold mb-[10px]'>Details</h3>
                    <div className="flex flex-col w-full p-[20px] mb-[20px] border-[0.5px] border-black border-opacity-10 rounded-lg">
                        <div className="mb-[15px] w-full">
                            <label className="text-[14px] text-black">Arthur name</label><br />
                            <input className="w-full p-[15px] text-[14px] border-[1px] border-black border-opacity-10 rounded-md focus:outline-none"
                                type="text"
                                id="effects"
                                value={blog.author}
                                placeholder='Enter arthor name'
                                onChange={(e) => setBlog({ ...blog, author: e.target.value })}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="text-[14px] text-black">Conclusion</label><br />
                            <textarea
                                className="w-full p-[15px] text-[14px] border-[1px] border-black border-opacity-10 rounded-md focus:outline-none resize-none"
                                id="description"
                                value={blog.conclusion}
                                placeholder='Conclusion...'
                                onChange={(e) => setBlog({ ...blog, conclusion: e.target.value })}
                                rows="4"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end w-full px-[25px] md:py-[40px]">
                    <div className='items-start w-full mb-[10px]'>
                        <h3 className='text-[18px] font-bold'>Sub-Topics</h3>
                    </div>
                    {subTopics.map((subTopic, index) => (
                        <div key={index} className="w-full p-[20px] mb-[20px] border-[0.5px] border-black border-opacity-10 rounded-lg">
                            <div className="mb-[15px]">
                                <div className='flex flex-row justify-center items-center px-[40px] mb-[15px]'>
                                    <div className='h-[1px] w-full bg-gray-300'></div>
                                    <p className='text-gray-400 text-[12px] tracking-widest w-fit whitespace-nowrap mx-[20px]'>SUB-TOPIC {index + 1}</p>
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
                                                !subTopics[index].image ? (
                                                    <p className="text-gray-500">Click to select an image</p>
                                                ) : (
                                                    <div className="flex flex-col items-center">
                                                        <img
                                                            className="h-full w-auto rounded-xl"
                                                            src={subTopics[index].image instanceof File ? URL.createObjectURL(subTopics[index].image) : subTopics[index].image.url}
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
                                    name="image"
                                    className="hidden"
                                    disabled={loading}
                                    onChange={async (e) => {
                                        handleSubTopicChange(index, e)
                                        if (e.target.files.length > 0) {
                                            setLoading(true);
                                            if (blog.subTopics[index].image) {
                                                await deleteImage(blog.subTopics[index].image.publicId);
                                            }
                                            const imageData = await uploadImage(e.target.files[0], 'Pony-Party/Blogs/Sub-Topics');
                                            const updatedSubTopics = [...subTopics];
                                            updatedSubTopics[index].image = {
                                                url: imageData.secure_url,
                                                publicId: imageData.public_id,
                                            };
                                            await updateBlog({ _id: id, subTopics: updatedSubTopics });
                                            setLoading(false);
                                        }
                                    }}
                                />
                            </div>
                            <div className="mb-[15px]">
                                <label className="text-[14px] text-black">Sub-Title</label><br />
                                <input className='w-full p-[15px] text-[14px] border-[1px] border-black border-opacity-10 rounded-md focus:outline-none'
                                    type="text"
                                    name='title'
                                    value={subTopic.title}
                                    placeholder="Enter title"
                                    onChange={(e) => handleSubTopicChange(index, e)}
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <label className="text-[14px] text-black">Description</label><br />
                                <textarea
                                    className="w-full p-[15px] text-[14px] border-[1px] border-black border-opacity-10 rounded-md focus:outline-none resize-none"
                                    name='description'
                                    value={subTopic.description}
                                    placeholder='Description...'
                                    onChange={(e) => handleSubTopicChange(index, e)}
                                    rows="4"
                                    required
                                />
                            </div>
                        </div>
                    ))}
                    <div className='flex flex-row justify-end w-full gap-x-[10px]'>
                        {
                            subTopics.length > 1 && (
                                <button
                                    className="flex justify-center items-center text-[14px] bg-red-500 text-white py-2 px-4 rounded"
                                    type="button"
                                    onClick={() => {
                                        if (subTopics.length > 1) {
                                            setSubTopics(subTopics.slice(0, -1));
                                        }
                                    }}
                                >
                                    Remove
                                </button>
                            )
                        }
                        <button
                            className="flex justify-center items-center text-[14px] bg-black text-white py-2 px-4 rounded"
                            type="button"
                            onClick={() => {
                                setSubTopics([...subTopics, { title: "", description: "", image: "" }]);
                            }}
                        >
                            Add topic
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-rox justify-center w-full mt-[40px]">
                <button
                    className="bg-black hover:shadow-lg text-white w-[160px] py-[10px] px-[20px] rounded-md"
                    type="submit"
                    disabled={loading}
                    onClick={async () => {
                        setLoading(true);
                        await updateBlog(blog);
                        setLoading(false);
                    }}
                >
                    {loading ? <PulseLoader color="#ffffff" size={8} /> : "Update Blog"}
                </button>
            </div>
        </div>
    );
}