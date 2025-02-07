import Image from "next/image";
import { InputDemo } from "@/components/ui/inputSearch";
import { IoMdSearch } from "react-icons/io";
import { BiSolidCart } from "react-icons/bi";
import { FaGreaterThan } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";


const SectionTwo = ()=>{
    return(
       <div className="flex flex-row items-center  sm:gap-4 gap-0 lg:pl-16 pl-0  lg:pr-7 pr-4 h-24  bg-white w-full">
        <Image 
        src ="/kikkusho.webp"
        alt="kikku shop logo"
        width={220}
        height={50}
        />
      {/* THE SEARCH BAR SECTION */}
        <div className="flex  flex-row border-[1px] gap-2 border-orange-600 rounded-3xl sm:w-[500px] w-[200px] h-[40px] items-center  pl-4 ">
         <IoMdSearch className="text-orange-600 text-2xl " />
         <InputDemo/>
        <div className="bg-orange-600 font-extrabold h-full w-[100px]  rounded-r-3xl text-white sm:flex hidden items-center px-3 text-lg  " >Search</div>
        </div> 
         {/* THE LAST PART OF SECTION TWO */}
         <div className="lg:flex flex-row lg:gap-5  lg:justify-start justify-between  lg:ml-20 hidden">
            {/* CART SECTION */}
           <div className="border-[1px] border-orange-600 text-orange-600 gap-4 rounded-3xl w-[120px] h-[40px] flex items-center justify-center">
               <BiSolidCart className=" text-2xl" />
                <div className="flex flex-row items-center gap-1">
                    <p>Cart</p>
                    <FaGreaterThan />
                </div>
            </div>
            {/* LOGIN AND REGISTER  */}
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
       </div> 
       
    )
}

export default SectionTwo;