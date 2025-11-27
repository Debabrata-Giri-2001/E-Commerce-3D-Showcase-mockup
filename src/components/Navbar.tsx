import { useState } from "react";
import { CiSearch, CiShoppingCart, CiShop, CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";




const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Accessories", path: "/accessories" },
        { name: "Digital", path: "/digital" },
    ];

    return (
        <header className='w-full'>
            <nav className=' mx-auto flex items-center justify-between p-4'>

                {/* 1. LEFT SIDE: Logo and Navigation Links */}
                <div className="flex items-center space-x-8">

                    {/* Logo Section - Uses Link to go home */}
                    <Link to="/" className="logo flex items-center space-x-2 text-gray-800 hover:text-gray-200 transition duration-150">
                        <CiShop size={30} className='text-gray-800' />
                        <span className="text-xl font-bold tracking-wider hidden sm:block">E-Shop</span>
                    </Link>

                    {/* Navigation Links (Desktop) */}
                    <ul className='hidden md:flex flex-row gap-6 text-lg font-medium'>
                        {navItems.map(item => (
                            <li key={item.name}>
                                {/* Crucial: Use Link instead of <a> or simple <li> */}
                                <Link
                                    to={item.path}
                                    className="text-gray-700 hover:text-gray-300 transition duration-150 cursor-pointer"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 2. RIGHT SIDE: Search Bar and Cart */}
                <div className='flex items-center space-x-4'>

                    {/* Search Bar Section */}
                    <div className="search-bar flex items-center bg-gray-100 rounded-full border border-gray-200">
                        <input
                            type="text"
                            placeholder='Search...'
                            className='bg-transparent outline-none p-2 text-sm sm:text-base placeholder-gray-500 w-24 sm:w-40 focus:ring-2 focus:ring-gray-200 rounded-l-full transition duration-150'
                        />
                        <button className="p-2 text-gray-600 hover:text-gray-300 transition duration-150">
                            <CiSearch size={20} />
                        </button>
                    </div>

                    {/* Shopping Cart Icon */}
                    <div className="cart relative text-gray-600 hover:text-blue-600 transition duration-150 cursor-pointer">
                        <CiShoppingCart size={28} />
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">3</span>
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <button
                        className="md:hidden text-gray-600 hover:text-blue-600 p-1"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <CiMenuBurger size={28} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-50 border-t border-gray-200 py-2">
                    {navItems.map(item => (
                        <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition duration-150 text-base font-medium"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar