import { TfiMenuAlt } from "react-icons/tfi";
const Header2 = ()=>{
    return(
        <div className="flex flex-row w-full justify-center  ">
        <div className="flex flex-row h-12 sm:w-[700px] w-[380px] md:gap-8 gap-4 ">
             <div className="bg-orange-600 text-white flex flex-row gap-2  items-center font-bold justify-center md:text-xl text-xs w-[225px]  ">
        <TfiMenuAlt />
        <p>Shop by Category</p>
        </div>
        <div className="flex flex-row md:gap-8 gap-4 items-center md:text-xl ">
        <p>About us</p>
        <p>Business Partnership</p>
        <p>Contact us</p> 
        </div>
       
        </div>
           </div>
    )
}

export default Header2;