import { Link } from "react-router";
import { NavLink } from "react-router";

const Navbar = () => {
  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/listed-books", text: "Listed Books" },
    { path: "/pages-to-read", text: "Pages to Read" },
  ];

  const getNavLinkClass = ({ isActive }, path) => {
    if (path === "/") {
      return isActive
        ? "border border-green-500 text-green-600 px-3 py-1 rounded-md"
        : "hover:text-green-600";
    } else {
      return isActive ? "text-green-600 font-semibold" : "hover:text-green-600";
    }
  };

  return (
    <nav className="flex items-center justify-between px-10 py-4 shadow-sm bg-white">

      <div className="flex gap-6 text-gray-700 font-medium">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={(navData) => getNavLinkClass(navData, link.path)}
          >
            {link.text}
          </NavLink>
        ))}
      </div>
      <div className="flex gap-3">
        <button className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600">
          Sign In
        </button>
        <button className="bg-sky-400 text-white px-4 py-1 rounded-md hover:bg-sky-500">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
