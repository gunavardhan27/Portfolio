import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    MyLogo
                </div>
                <div className="hidden md:flex space-x-6 items-center">
                    <a href="#home" className="text-white hover:text-gray-300">
                        Home
                    </a>
                    <a href="#about" className="text-white hover:text-gray-300">
                        About
                    </a>
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="text-white hover:text-gray-300 focus:outline-none"
                        >
                            Services
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                <a
                                    href="#web-development"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Web Development
                                </a>
                                <a
                                    href="#design"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Design
                                </a>
                                <a
                                    href="#seo"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    SEO
                                </a>
                            </div>
                        )}
                    </div>
                    <a href="#contact" className="text-white hover:text-gray-300">
                        Contact
                    </a>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <a href="#home" className="block text-white py-2 px-4 hover:bg-blue-700">
                        Home
                    </a>
                    <a href="#about" className="block text-white py-2 px-4 hover:bg-blue-700">
                        About
                    </a>
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="block text-white w-full text-left py-2 px-4 hover:bg-blue-700 focus:outline-none"
                        >
                            Services
                        </button>
                        {isDropdownOpen && (
                            <div className="mt-1 bg-white rounded-md shadow-lg">
                                <a
                                    href="#web-development"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Web Development
                                </a>
                                <a
                                    href="#design"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Design
                                </a>
                                <a
                                    href="#seo"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    SEO
                                </a>
                            </div>
                        )}
                    </div>
                    <a href="#contact" className="block text-white py-2 px-4 hover:bg-blue-700">
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
