// import jwt from "jsonwebtoken";

// export const getDataFromToken = (request) => {
//     try {
//         const token = request.cookies.get("token")?.value || "";
//         const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
//         return decodedToken.id;
//     } catch (error) {
//         throw new Error(error.message);
//     }
// }



import jwt from "jsonwebtoken";

export const getDataFromToken = (request) => {
    try {
        // Ensure this runs server-side only
        if (!request.cookies) {
            throw new Error("No cookies found");
        }
        
        const token = request.cookies.get("token")?.value || "";
        if (!token) {
            throw new Error("Token not found");
        }
        
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        return decodedToken.id;
    } catch (error) {
        throw new Error(error.message);
    }
};
