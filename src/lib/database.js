const username = process.env.NEXT_PUBLIC_DB_USERNAME;
const password = process.env.NEXT_PUBLIC_DB_PASSWORD;
export const connectionString = "mongodb+srv://"+username+":"+password+"@cluster0.1de46.mongodb.net/pony_party?retryWrites=true&w=majority&appName=Cluster0";
