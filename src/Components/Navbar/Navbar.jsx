import { useContext } from "react";
import {NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
    const {user, logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
      }

    const navLinks = <>
        <li>
            <NavLink
                to={"/home"}
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-emerald-300 underline" : ""
                }>
                Home
            </NavLink>
        </li>
        <li>
            <Link
                to="events" spy={true} smooth={true} offset={-10} duration={500}
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-emerald-300 underline" : ""
                }>
                Events
            </Link>
        </li>
        <li>
            <Link
                to="about" spy={true} smooth={true} offset={-40} duration={500}
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-emerald-300 underline" : ""
                }>
                About Us
            </Link>
        </li>
        <li>
            <NavLink
                to={"/contact"}
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-emerald-300 underline" : ""
                }>
                Contact Us
            </NavLink>
        </li>
        <li>
            <Link
                to="speakers" spy={true} smooth={true} offset={-100} duration={500}
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-emerald-300 underline" : ""
                }>
                Speakers
            </Link>
        </li>
        <li>
            <Link
                to="sponsors" spy={true} smooth={true} offset={-10} duration={500}
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-emerald-300 underline" : ""
                }>
                Sponsors
            </Link>
        </li>
    </>

    return (
        <div className="pb-5 px-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
            <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 hover:bg-none">
        {navLinks}
      </ul>
    </div>
    <a className="text-xl font-bold">SkillSpire</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 hover:bg-none">
        {navLinks}
    </ul>
  </div>
  <div className="navbar-end gap-9">
  {
              user ?
              <NavLink onClick={handleLogout} to={"/login"} className="text-white font-semibold px-3 py-2 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none">Log Out</NavLink>
              :
              <div className="flex gap-5">
              <NavLink to={"/signup"} className="text-white font-semibold px-3 py-2 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none">Sign Up </NavLink>
              <NavLink to={"/login"} className="text-white font-semibold px-3 py-2 bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800 focus:outline-none">Login </NavLink>
          </div>
            }

  </div>
</div>
        </div>
    );
};

export default Navbar;