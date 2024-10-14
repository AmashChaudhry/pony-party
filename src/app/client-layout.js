'use client'
import Header from "@/components/header";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const paths = [
    '/',
    '/pages/about-us',
    '/pages/blogs',
    '/pages/contact-us',
    '/pages/in-home-services',
    '/pages/book-iv-therapy',
    '/pages/login-to-account',
    '/pages/forgot-password',
    '/pages/privacy-policy',
    '/pages/register-account',
    '/pages/service',
    '/pages/terms-of-service',
    '/pages/user-profile',
    '/pages/user-profile/address',
    '/pages/user-profile/change-password',
  ];

  const showHeaderAndFooter = paths.includes(pathname) || /^\/pages\/blogs\/\w+/.test(pathname) || /^\/pages\/service\/\w+/.test(pathname);

  return (
    <>
      {showHeaderAndFooter && <Header />}
      {children}
      {showHeaderAndFooter && <Footer />}
    </>
  );
}

