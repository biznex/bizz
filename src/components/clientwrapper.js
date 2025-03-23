"use client";  // Make this a client component

import { usePathname } from "next/navigation";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <div className={`relative min-h-screen ${isDashboard ? "" : "bg-black"}`}>
      {/* Show Background Only on Non-Dashboard Pages */}
      {!isDashboard && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-999]" 
          style={{ backgroundImage: "url('/landingbg.jpg')" }}>
        </div>
      )}
      {children}
    </div>
  );
}
