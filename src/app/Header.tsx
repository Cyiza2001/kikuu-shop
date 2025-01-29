
import Image from "next/image";
import { IoMdHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { MdPhoneAndroid } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { NavigationMenuDemo } from "@/components/navigationMenu";

const Header = () => {
  return (
    <div className="flex px-16 justify-between items-center h-8 bg-gray-200">
      {/* THE LEFT SIDE OF THE HEADER */}
      <div className="flex flex-row gap-6 text-sm">
        {/* THE FIRST PART OF THE LEFT HEADER SECTION */}
        <div className="flex flex-row justify-center h-10 items-center gap-2 text-gray-600 font-light hover:text-orange-400 hover:cursor-pointer">
          <IoMdHome className="h-5 w-5" />
          <p className="m-0 p-0">KiKUU Home</p>
        </div>
        {/* THE SECOND PART OF THE LEFT HEADER SECTION */}
        <div className="flex flex-row items-center gap-2 text-gray-600 font-light">
          <IoPersonSharp className="h-7" />
          <p className="flex flex-row gap-1">
            <span className="hover:text-orange-400 hover:cursor-pointer">
              Login
            </span>
            |
            <span className="hover:text-orange-400 hover:cursor-pointer">
              Register
            </span>
          </p>
        </div>
      </div>
      {/* THE RIGHT SIDE OF THE HEADER */}
      <div className="flex flex-row gap-6 text-sm text-gray-400 font-light">
        {/* THE FIRST PART OF THE RIGHT HEADER SECTION */}
        <div className="flex flex-row items-center gap-2 hover:text-orange-400 hover:cursor-pointer">
          <MdPhoneAndroid className="h-4" />
          <p>Save big on our app</p>
        </div>
        {/* LANGUAGE DROPDOWN MENU */}
        <NavigationMenuDemo />
      </div>
    </div>
  );
};

export default Header;
