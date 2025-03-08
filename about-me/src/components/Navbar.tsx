import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-yellow-200 p-6 shadow-lg">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link to="/" className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:text-blue-600 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:text-blue-600 transition">
            About Me
          </Link>
        </li>
        <li>
          <Link to="/hobbies" className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:text-blue-600 transition">
            Hobbies
          </Link>
        </li>
        <li>
          <Link to="/pets" className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:text-blue-600 transition">
            Pets
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
