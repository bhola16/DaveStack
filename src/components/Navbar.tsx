import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/logo-text.png";
import "../index.css"


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white py-2">
      <div className="container mx-auto max-w-full px-3 sm:px-5 md:px-8 lg:px-20">
        {/* Desktop Navbar */}
        <div className="hidden h-14 items-center justify-between lg:flex">
          <img src={Logo} alt="Dev Stack logo" className="w-32 xl:w-35" />

          <ul className="flex items-center gap-3 font-semibold xl:gap-5">
            <li className="nav-item">Home</li>
            <li className="nav-item">Technologies</li>
            <li className="nav-item">Projects</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
          </ul>

          {/* Buttons */}
          <div className="flex items-center gap-3 xl:gap-4">
            <button className="font-semibold text-gray-600 transition hover:text-[#df1680]">
              Sign In
            </button>

            <button className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 px-3 py-2 text-sm font-semibold text-white transition hover:opacity-90 xl:px-4">
              Sign Up
            </button>
          </div>
        </div>

        {/*  Tablet Navbar */}
        <div className="relative hidden h-14 items-center justify-between md:flex lg:hidden">
          <button aria-label="Open menu" className="text-2xl text-gray-700">
            <RxHamburgerMenu />
          </button>

          <img
            src={Logo}
            alt="Dev Stack logo"
            className="absolute left-1/2 w-28 -translate-x-1/2"
          />

          <div className="ml-auto flex items-center gap-3">
            <button className="text-sm font-semibold text-gray-600 transition hover:text-[#df1680]">
              Sign In
            </button>

            <button className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:opacity-90">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Navbar  */}
        <div className="relative flex h-14 items-center justify-between md:hidden">
          <button
            aria-label="Open menu"
            className="text-xl text-gray-700 sm:text-2xl"
          >
            <RxHamburgerMenu />
          </button>

          <img
            src={Logo}
            alt="Dev Stack logo"
            className="absolute left-1/2 w-24 -translate-x-1/2 sm:w-28"
          />

          {/* Buttons */}
          <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
            <button className="text-xs font-semibold text-gray-600 transition hover:text-[#df1680] sm:text-sm">
              Sign In
            </button>

            <button className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 px-2.5 py-1.5 text-[11px] font-semibold text-white transition hover:opacity-90 sm:px-3 sm:text-xs">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
