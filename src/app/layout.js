import "./globals.css";
import { Inter } from "next/font/google";
import ClientLayout from "./client-layout";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pony Party",
  description: "IV Hydration Services Delivered to Your Doorstep",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>
          {children}
          <Toaster reverseOrder={false} />
        </ClientLayout>
      </body>
    </html>
  );
}