import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { FaBabyCarriage } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const navLinks = (
    <>
      <li><NavLink to="/" className="hover:text-pink-600 text-2xl">Home</NavLink></li>
      <li><NavLink to="/blogs" className="hover:text-pink-600 text-2xl">Blogs</NavLink></li>
      <li><NavLink to="/about" className="hover:text-pink-600 text-2xl">About</NavLink></li>
    </>
  );

  return (
    <div className="bg-gradient-to-r from-[#fdf3f0] via-[#faf0fa] to-[#f5f7fa] shadow-md sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-6">
        <div className="navbar-start">
          <Link to="/" className="flex items-center gap-2 text-pink-600 font-bold text-2xl">
            <FaBabyCarriage className="text-3xl" />
            ToyTopia
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 text-gray-700 font-medium">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-3">
          {user ? (
            <>
              <span className="text-gray-700 text-sm hidden sm:block">
                Hi, {user.email}
              </span>
              <button
                onClick={logout}
                className="btn btn-outline btn-sm border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-outline btn-sm border-pink-500 text-xl text-pink-600 hover:bg-pink-500 hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-sm bg-pink-500 text-xl text-white hover:bg-pink-600 border-none"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

