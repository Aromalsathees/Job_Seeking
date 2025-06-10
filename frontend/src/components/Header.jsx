import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { Menu, X } from 'lucide-react'; // Icons (install with: npm install lucide-react)

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="bg-white fixed w-full top-0 shadow-md z-50">
        <div className="flex items-center justify-between px-4 py-3 lg:px-8">
          {/* Logo */}
          <h1 className="font-bold text-green-300 text-xl">JOB TRACKER</h1>

          {/* Hamburger for small screens */}
          <div className="lg:hidden">
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Menu for large screens */}
          <nav className="hidden lg:block">
            <ul className="flex gap-8 text-gray-600 font-semibold text-sm">
              <Link path to ="/">
              <li className="hover:bg-green-100 px-4 py-2 rounded-full cursor-pointer">Home</li>
              </Link>
              <Link path to ="/joblisting">
              <li className="hover:bg-green-100 px-4 py-2 rounded-full cursor-pointer">Jobs</li>
              </Link>
              <Link path to ="/joblisting">
              <li className="hover:bg-green-100 px-4 py-2 rounded-full cursor-pointer">About</li>
              </Link>
              <li className="hover:bg-green-100 px-4 py-2 rounded-full cursor-pointer">Contact</li>
              <li className="bg-green-300 text-white px-4 py-2 rounded-lg cursor-pointer">Login</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Sidebar for small screens */}
      {sidebarOpen && (
        <div className="fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg z-40 p-4 lg:hidden">
          <ul className="flex flex-col gap-4 text-gray-700 font-semibold text-base mt-16">
             <Link path to ="/">
              <li className="hover:bg-green-100 px-4 py-2 rounded-full cursor-pointer">Home</li>
              </Link>
                <Link path to ="/joblisting">
            <li className="hover:bg-green-100 px-4 py-2 rounded cursor-pointer">Jobs</li>
            </Link>
            <li className="hover:bg-green-100 px-4 py-2 rounded cursor-pointer">About</li>
            <li className="hover:bg-green-100 px-4 py-2 rounded cursor-pointer">Contact</li>
            <li className="bg-green-300 text-white px-4 py-2 rounded-lg cursor-pointer">Login</li>
          </ul>
        </div>
      )}

      {/* Add space below header */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Header;
