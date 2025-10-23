// import { Link, NavLink } from "react-router-dom";
// import { FaPuzzlePiece } from "react-icons/fa"; 

// const Navbar = () => {
//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Login", path: "/login" },
//     { name: "Register", path: "/register" },
//   ];

//   return (
//     <div className="navbar bg-base-100 shadow-md px-4">
//       <div className="flex-1">
//         <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
//           <FaPuzzlePiece /> ToyTopia
//         </Link>
//       </div>
//       <div className="flex-none">
//         <ul className="menu menu-horizontal px-1">
//           {navItems.map((item) => (
//             <li key={item.path}>
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   isActive ? "text-primary font-semibold" : ""
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { Link, NavLink } from "react-router-dom";
import { FaBabyCarriage } from "react-icons/fa";

const Navbar = () => {
  const navLinks = (
    <>
      <li><NavLink to="/" className="hover:text-pink-600 text-2xl">Home</NavLink></li>
      <li><NavLink to="/blogs" className="hover:text-pink-600 text-2xl">Blogs</NavLink></li>
      <li><NavLink to="/about" className="hover:text-pink-600 text-2xl">About</NavLink></li>
    </>
  );

  return (
    <div className="bg-gradient-to-r from-[#fdf3f0] via-[#faf0fa] to-[#f5f7fa] shadow-md">
      <div className="navbar max-w-7xl mx-auto px-6">
        {/* Logo & Brand */}
        <div className="navbar-start">
          <Link to="/" className="flex items-center gap-2 text-pink-600 font-bold text-2xl">
            <FaBabyCarriage className="text-3xl" />
            ToyTopia
          </Link>
        </div>

        {/* Menu for Large Screen */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 text-gray-700 font-medium">
            {navLinks}
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end">
          <div className="flex gap-3">
            <Link to="/login" className="btn btn-outline text-xl btn-sm border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white">
              Login
            </Link>
            <Link to="/register" className="btn btn-sm bg-pink-500 text-xl text-white hover:bg-pink-600 border-none">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

