import React, {useState} from 'react';
import {Menu} from 'lucide-react';
import {Link, NavLink} from 'react-router-dom';
import Logo from '@/assets/logo-1.svg'

export default function Header() {
    const [open, setOpen] = useState(false);

    const navItems = [
        {label: 'Home', path: '/'},
        // {label: 'About', path: '/about'},
        {label: 'Services', path: '/services'},
        {label: 'Contact', path: '/contact'},
    ];

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-white/50 backdrop-blur-md shadow-sm">
            <div className="container mx-auto flex items-center justify-between py-1 sm:py-4  px-4 lg:px-6">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2 font-semibold text-primary">
                    <img src={Logo} alt="Logo" className="absolute w-25 h-15 mt-2 sm:h-20 sm:w-32"/>
                </Link>

                {/* Hamburger */}
                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none"
                >
                    <Menu className="h-6 w-6"/>
                </button>

                {/* Desktop nav */}
                <nav className="hidden lg:block">
                    <ul className="flex items-center space-x-8 text-sm font-medium">
                        {navItems.map((item) => (
                            <li key={item.label} className="group relative">
                                {item.children ? (
                                    <>
                    <span className="cursor-pointer text-gray-700 hover:text-primary">
                      {item.label}
                    </span>
                                        <ul className="absolute left-0 mt-3 hidden min-w-[150px] rounded-md bg-white py-2 shadow-lg group-hover:block">
                                            {item.children.map((child) => (
                                                <li key={child.label}>
                                                    <NavLink
                                                        to={child.path}
                                                        className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-primary"
                                                    >
                                                        {child.label}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <NavLink
                                        to={item.path}
                                        className={({isActive}) =>
                                            `text-gray-700 hover:text-primary ${isActive ? 'text-red-500 font-bold' : 'text-gray-100 hover:text-red-300'}`
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Mobile dropdown */}
            {open && (
                <nav className="lg:hidden bg-white shadow-inner">
                    <ul className="flex flex-col space-y-1 px-6 py-4 text-sm font-medium">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                {item.children ? (
                                    <details className="group" open>
                                        <summary
                                            className="cursor-pointer py-2 text-gray-700 hover:text-primary flex justify-between items-center">
                                            {item.label}
                                        </summary>
                                        <ul className="pl-4">
                                            {item.children.map((child) => (
                                                <li key={child.label}>
                                                    <NavLink
                                                        to={child.path}
                                                        className="block py-1 text-gray-600 hover:text-primary"
                                                    >
                                                        {child.label}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                ) : (
                                    <NavLink
                                        to={item.path}
                                        className="block py-2 text-gray-700 hover:text-primary"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.label}
                                    </NavLink>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}
