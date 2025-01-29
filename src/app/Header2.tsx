import { TfiMenuAlt } from "react-icons/tfi";
const Header2 = ()=>{
    return(
        <div className="flex flex-row h-12 px-16 gap-8 ">
              <div className="bg-orange-600 text-white flex flex-row gap-2 items-center font-bold justify-center text-xl w-[225px]">
        <TfiMenuAlt />
        <p>Shop by Category</p>
        </div>
        <div className="flex flex-row gap-8 items-center text-xl">
        <p>About us</p>
        <p>Business Partnership</p>
        <p>Contact us</p> 
        </div>
       
        </div>
    )
}

export default Header2;