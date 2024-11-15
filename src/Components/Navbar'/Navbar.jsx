import { NavLink } from "react-router-dom";
import logo from '../../assets/Images/logo.png'

const Navbar = () => {
    const navLinks =
        <>
            <NavLink className='px-5 btn border-none bg-white text-[#1e1b4b] hover:text-white hover:bg-[#1e1b4b] ' to={'/physixtry'}>Home</NavLink>
            <NavLink className='px-5 btn border-none bg-white text-[#1e1b4b] hover:text-white hover:bg-[#1e1b4b]' to={'/physixtry/details'}>Course Details</NavLink>
            <NavLink className='px-5  btn border-none bg-white text-[#1e1b4b] hover:text-white hover:bg-[#1e1b4b]' to={'/physixtry/classes'}>My Classes</NavLink>
            <NavLink className='px-5 btn border-none bg-white text-[#1e1b4b] hover:text-white hover:bg-[#1e1b4b]' to={'/physixtry/notification'}>Notifications</NavLink>
        </>
    return (
        <div className="navbar bg-white text-[#1e1b4b] md:px-6 sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm font-bold dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                    <img className="w-9 h-10 md:w-12 md:h-16" src={logo} alt="" />
                    <a className="text-xl md:text-2xl font-extrabold"><i>PHYSIXTRY</i></a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn w-28 md:w-44 text-xsm md:text-md  text-white bg-[#1e1b4b] hover:text-white hover:border-none hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"><i>LOGIN</i></a>
            </div>
        </div>
    );
};

export default Navbar;