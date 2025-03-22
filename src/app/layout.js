import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative text-white min-h-screen">
        {/* Fixed Background Image */}
        <div 
          className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-999]" 
          style={{ backgroundImage: "url('/landingbg.jpg')" }}>
        </div>

        {/* Transparent Header */}
        <Header className="absolute top-0 left-0 w-full z-50 bg-transparent" />

        {/* Main Content with Scrolling */}
        <main className="flex flex-col items-center justify-center text-center">
          {children}  {/* Page content (Landing Page Section 1) */}

        

        </main>

        {/* Transparent Footer */}
        <Footer className="absolute bottom-0 left-0 w-full z-50 bg-transparent !bg-opacity-0" />
      </body>
    </html>
  );
}
