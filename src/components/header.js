"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="absolute top-0 left-0 w-full p-4 bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        {/* Clicking on "Biznex" navigates to the homepage */}
        <h1
          className="text-white text-2xl font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          Biznex
        </h1>

        <nav className="hidden md:flex items-center space-x-6">
          {/* Clicking "Home" also navigates to the homepage */}
          <a
            onClick={() => router.push("/")}
            className="text-white text-lg hover:text-gray-300 cursor-pointer"
          >
            Home
          </a>
          <a href="#" className="text-white text-lg hover:text-gray-300">
            Services
          </a>
          <button
            onClick={() => router.push("/login")}
            className="px-4 py-2 bg-[#F16416] text-white rounded-md hover:bg-[#d14b10] transition"
          >
            Login/Register
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 p-6 text-center md:hidden">
          <a
            onClick={() => {
              router.push("/");
              setIsOpen(false);
            }}
            className="block text-white text-lg mb-4 cursor-pointer"
          >
            Home
          </a>
          <a href="#" className="block text-white text-lg mb-4">
            Services
          </a>
          <button
            onClick={() => {
              router.push("/login");
              setIsOpen(false);
            }}
            className="w-full px-4 py-2 bg-[#F16416] text-white rounded-md hover:bg-[#d14b10] transition"
          >
            Login/Register
          </button>
        </div>
      )}
    </header>
  );
}
