import { Link } from "react-router-dom";
import image from "../assets/logo.jpeg";

const Header = () => {
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
      <div className="flex items-center gap-8">
        <Link
          className="relative inline-block group"
          to="/team"
        >
          Team
          <div className="absolute bg-white left-0 -bottom-1 w-0 h-[4px] rounded-sm transition-all ease-in-out duration-500 group-hover:w-full"></div>
        </Link>
        <Link
          className="relative inline-block group"
          to="/docs"
        >
          Docs
          <div className="absolute bg-white left-0 -bottom-1 w-0 h-[4px] rounded-sm transition-all ease-in-out duration-500 group-hover:w-full"></div>
        </Link>
        <Link
          className="relative inline-block group"
          to="/forum"
        >
          Forum
          <div className="absolute bg-white left-0 -bottom-1 w-0 h-[4px] rounded-sm transition-all ease-in-out duration-500 group-hover:w-full"></div>
        </Link>
      </div>
    </div>
  );
};

export default Header;