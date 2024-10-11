import "./globals.css";
import { Inter } from "next/font/google";
import ClientLayout from "./client-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "User Profile | Pony Party",
    description: "Manage your profile",
};

export default function Layout({ children }) {
    return (
        <div className={inter.className}>
            <ClientLayout>
                {children}
            </ClientLayout>
        </div>
    );
}
