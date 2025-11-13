import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  // menu open/close state
  const [isOpen, setIsOpen] = useState(false);

  // navbar link data
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Listed Books", path: "/listed-books" },
    { id: 3, name: "Pages to Read", path: "/pages-to-read" },
  ];

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 drop-shadow-green-500 shadow-md">
        <nav className="flex items-center justify-between px-6 md:px-20 py-4 shadow-sm bg-white relative">
      {/* Logo */}
      <h1 className="text-xl font-bold">Book Vibe</h1>

      {/* Desktop menu */}
      <div className="flex items-center">
        <div className="hidden md:flex gap-6 text-gray-700 font-medium ">
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-green-600": "text-black"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      </div>

      {/* Desktop buttons */}
      <div className="hidden md:flex gap-3">
        <button className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600">
          Sign In
        </button>
        <button className="bg-sky-400 text-white px-4 py-1 rounded-md hover:bg-sky-500">
          Sign Up
        </button>
      </div>

      {/* Mobile menu icon */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 py-5 shadow-md md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "border border-green-500 text-green-600 px-3 py-1 rounded-md"
                  : "hover:text-green-600"
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile buttons */}
          <div className="flex gap-3">
            <button className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600">
              Sign In
            </button>
            <button className="bg-sky-400 text-white px-4 py-1 rounded-md hover:bg-sky-500">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
      </div>
    </div>
  );
};

export default Navbar;
