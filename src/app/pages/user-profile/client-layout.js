'use client'
import { usePathname } from "next/navigation";
import UserProfileSidebar from "@/components/user-profile-sidebar";

export default function ClientLayout({ children }) {
    const pathname = usePathname();

    const getRouteName = () => {
        const path = pathname.split("/").pop();

        if (path === "user-profile") {
            return "Account Details";
        }

        return path
            ? path
                .replace(/-/g, " ")
                .split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")
            : "Account Details";
    };

    return (
        <div className='flex flex-col w-full max-w-[1200px] mx-auto' style={{ minHeight: 'calc(100vh - 80px)' }}>
            <div className='p-[20px] mt-[20px] sm:mt-[40px]'>
                <h1 className='text-[22px] font-medium mb-5'>{getRouteName()}</h1>
            </div>
            <div className="flex flex-col w-full sm:flex-row">
                <UserProfileSidebar />
                {children}
                <span className='h-[80px]'></span>
            </div>
        </div>
    );
}
