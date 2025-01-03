// import Image from 'next/image';
// import { IoMdHome } from "react-icons/io";
// import { IoPersonSharp } from "react-icons/io5";
// import { MdPhoneAndroid } from "react-icons/md";
// import { IoIosArrowDown } from "react-icons/io";

// const Header = ()=>{
//     return(
//         <div className="flex px-16 justify-between items-center h-8 bg-gray-200">
//         {/* THE LEFT SIDE OF THE HEADER */}
//         <div className="flex flex-row gap-6 text-sm">
//             {/* THE FIRST PART OF THE LEFT HEADER SECTION */}
//             <div className="flex flex-row gap-2 text-gray-400 font-light hover:text-orange-400 hover:cursor-pointer  ">
//             <IoMdHome className="h-4" />
//             <p>KiKUU Home</p>
//             </div>
//             {/* THE SECOND PART OF THE LEFT HEADER SECTION */}
//             <div className="flex flex-row gap-2 text-gray-400 font-light ">
//             <IoPersonSharp className="h-4" />
//             <p className="flex flex-row gap-1"> <span className="hover:text-orange-400 hover:cursor-pointer">Login</span>|<span className="hover:text-orange-400 hover:cursor-pointer">Register</span> </p>
//             </div>
//         </div>
//         {/* THE RIGHT SIDE OF THE HEADER */}
//         <div className="flex flex-row gap-6 text-sm text-gray-400 font-light">
//             {/* THE FIRST PART OF THE  RIGHT HEADER SECTION */}
//             <div className="flex flex-row gap-2 hover:text-orange-400 hover:cursor-pointer">
//             <MdPhoneAndroid className="h-4" />
//             <p>Save big on our app</p>
//             </div>
//             {/* THE MIDDLE PART OF THE RIGHT HEADER SECTION */}
//             <div className="flex flex-row gap-1 hover:text-orange-400 hover:cursor-pointer">
//             <p>Language</p>
//             <IoIosArrowDown className="h-5" />

//             </div>
//            {/* THE THIRD PART OF THE RIGHT HEADER SECTION */}
//            <div className="flex flex-row gap-1 hover:text-orange-400 hover:cursor-pointer">
//            <Image
//               src="/rwanda.jpg"
//               alt="National Flag"
//               width={20}
//               height={20}
//              className='rounded-3xl'
//             />
//             <p>Rwanda</p>
//             <IoIosArrowDown className="h-5" />

//             </div>

//         </div>

//         </div>

//     )
// }

// export default Header;

import Image from "next/image";
import { IoMdHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { MdPhoneAndroid } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; // Adjust path based on your setup
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
        <div className="flex flex-row gap-2 text-gray-400 font-light">
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
        <div className="flex flex-row gap-2 hover:text-orange-400 hover:cursor-pointer">
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
