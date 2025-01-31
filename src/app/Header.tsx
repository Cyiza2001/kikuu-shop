"use client"
// import Image from "next/image";
import { IoMdHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { MdPhoneAndroid } from "react-icons/md";
// import { IoIosArrowDown } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { NavigationMenuDemo } from "@/components/navigationMenu";
import {useState} from "react"
// import { PiUserCircleMinusThin } from "react-icons/pi";

// {isNavBarVisible ? : }


const Header = () => {
  const [isHeaderFull, setIsHeaderFull] = useState(false)
const toggleIcon = ()=> setIsHeaderFull(!isHeaderFull)
  return (
    <div className="flex px-16 justify-between items-center h-8 bg-gray-200 relative ">
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
      <div className={`lg:flex flex-row gap-6 text-sm text-gray-400 font-light hidden  ${isHeaderFull? "absolute left-0 top-14 bg-green-500 lg:static lg:bg-transparent":"hidden lg:flex"}`}>
      
        {/* THE FIRST PART OF THE RIGHT HEADER SECTION */}
        <div className="flex flex-row items-center gap-2 hover:text-orange-400 hover:cursor-pointer">
          <MdPhoneAndroid className="h-4" />
          <p>Save big on our app</p>
        </div>
        {/* LANGUAGE DROPDOWN MENU */}
        <NavigationMenuDemo />
      </div>
        {/* THE MENU AND CROSS ICONS  FOR RESPONSIVENESS */}
        <div className="absolute right-4 lg:hidden text-black text-2xl" 
          onClick={() =>
          toggleIcon()
          }
        > {isHeaderFull? <ImCross />: <MdMenu />}</div>
    </div>
  );
};

export default Header;
