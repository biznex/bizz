"use client";

import "./globals.css"; 
import { usePathname } from "next/navigation";
import Header from "../components/header";
import Footer from "../components/footer";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard"); // Check if on dashboard

  return (
    <html lang="en">
      <body className="relative text-white min-h-screen">
        {/* Background Image (Only for Landing Page) */}
        {!isDashboard && (
          <div 
            className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-999]" 
            style={{ backgroundImage: "url('/landingbg.jpg')" }}>
          </div>
        )}

        {/* Show Header ONLY if NOT in Dashboard */}
        {!isDashboard && <Header className="absolute top-0 left-0 w-full z-50 bg-transparent" />}

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center text-center">
          {children}
        </main>

        {/* Show Footer ONLY if NOT in Dashboard */}
        {!isDashboard && <Footer className="absolute bottom-0 left-0 w-full z-50 bg-transparent" />}
      </body>
    </html>
  );
}