import { Link, useNavigate } from "react-router-dom";
import image from "../assets/logo.jpeg";
import { useContext } from "react";
import { AuthContext } from "../context/Authprovider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between px-10 py-2 bg-black text-white">
      {/* Logo and Text Section */}
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center">
          <img
            src={image}
            alt="Logo"
            className="h-10 w-auto" // Ensures aspect ratio is maintained
          />
          <span className="font-semibold ml-2 text-sm">coco-space</span>
        </Link>
      </div>

      {/* Navigation Links */}
      {user ? (
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-emerald-500 text-black font-semibold rounded-md"
        >
          Logout
        </button>
      ) : (
        <div className="flex items-center gap-4">
          <Link className="relative inline-block group" to="/team">
            Team
            <div className="absolute bg-white left-0 -bottom-1 w-0 h-[4px] rounded-sm transition-all ease-in-out duration-500 group-hover:w-full"></div>
          </Link>
          <Link className="relative inline-block group" to="/docs">
            Docs
            <div className="absolute bg-white left-0 -bottom-1 w-0 h-[4px] rounded-sm transition-all ease-in-out duration-500 group-hover:w-full"></div>
          </Link>
          <Link className="relative inline-block group" to="/forum">
            Forum
            <div className="absolute bg-white left-0 -bottom-1 w-0 h-[4px] rounded-sm transition-all ease-in-out duration-500 group-hover:w-full"></div>
          </Link>
          <Link
            to="/service"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            Register as Service
          </Link>
          <Link
            to="/authenticator"
            className="px-4 py-2 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition duration-300"
          >
            Register as Authenticator
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
