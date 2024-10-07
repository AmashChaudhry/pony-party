import cloudinary from "@/lib/cloudinary_config";

export const uploadImage = async (file, folder) => {

    const buffer = await file.arrayBuffer();
    const bytes = Buffer.from(buffer);

    return new Promise(async (resolve, reject) => {
        await cloudinary.uploader.upload_stream({
            resource_type: "auto",
            folder: folder,
        }, async(error, result) => {
            if (error) {
                return reject(error.message);
            } else {
                return resolve(result);
            }
        }).end(bytes);
    })
}

export const deleteImage = async (publicId) => {
    return new Promise(async (resolve, reject) => {
        try{
            const result = await cloudinary.uploader.destroy(publicId);
            return resolve(result);

        } catch (error) {
            reject(new Error(error.message));
        }
    })
}