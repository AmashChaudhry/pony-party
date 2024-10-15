import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/admin-sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Admin Panel | Pony Party",
    description: "Manage Pony Party Services",
};

export default function Layout({ children }) {
    return (
        <div className={inter.className}>
            <div className='flex flex-col w-full md:flex-row'>
                <Sidebar />
                {children}
            </div>
        </div>
    );
}
