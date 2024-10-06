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
        <html lang="en">
            <body className={inter.className}>
                <main className='flex flex-row w-full'>
                    <Sidebar />
                    {children}
                </main>
            </body>
        </html>
    );
}
