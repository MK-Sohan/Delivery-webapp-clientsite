import React from 'react';
import { Link, NavLink } from 'react-router';
import ProfastLogo from '../ProfastLogo/ProfastLogo';
import { MoveUpRight } from 'lucide-react';
const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
];

const Navbar = () => {
    const navLink = <>
        <NavLink>Services</NavLink>
        <NavLink>Coverage</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>Contact</NavLink>


    </>
    return (
        <div className='w-[94%] m-auto  pt-[20px]  '>
            <div className="navbar bg-base-100 shadow-sm rounded-3xl pl-[20px] pr-[20px]">
                <div className="navbar-start py-2">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  p-2 shadow">
                            {navLink}
                        </ul>
                    </div>
                    <NavLink to="/" className=""><ProfastLogo /></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-5 justify-center text-[15px] tracking-widest">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <NavLink
                                    to={link.path}
                                    end={link.path === "/"} // important: ensures "/" only active on exact match
                                    className={({ isActive }) =>
                                        `transition-transform duration-200 ease-in-out inline-block px-2 py-1 ${isActive ? "text-green-500 font-semibold" : "text-gray-700"
                                        } hover:text-green-500 hover:scale-105`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="navbar-end flex justify-center gap-2">
                    <button className="bg-transparent border rounded-xl  border-gray-400 h-[46px] w-[100px] font-bold tracking-wider"><Link to='/login'>Sign In</Link></button>
                    <Link ><button className='rounded-xl bg-[#CAEB66] border-gray-400 h-[46px] w-[100px] font-bold tracking-wider'>Be a Rider</button></Link>
                    <Link className=""><button className='bg-black text-[#CAEB66] rounded-full p-[10px]'><MoveUpRight /></button></Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;