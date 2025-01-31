
import { FaAngleRight } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
// import { TfiMenuAlt } from "react-icons/tfi";

import Image from "next/image";
const categories = [{cat:"Clothing", icon:<FaAngleRight /> },{cat:"Shoes", icon:<FaAngleRight /> },{cat:"Luggage & Bags", icon:<FaAngleRight /> },{cat:"Watch & Jewerly", icon:<FaAngleRight /> },{cat:"Kids & Toys", icon:<FaAngleRight /> },{cat:"Home & Appliances", icon:<FaAngleRight /> },{cat:"Beauty", icon:<FaAngleRight /> },{cat:"Weddings", icon:<FaAngleRight /> },{cat:"Hair", icon:<FaAngleRight /> },{cat:"Phones & Tel", icon:<FaAngleRight /> },{cat:"Electronics", icon:<FaAngleRight /> },{cat:"Computer & Office", icon:<FaAngleRight /> },{cat:"Automobile Accessory &...", icon:<FaAngleRight /> }]
const stuff = [{icon:<FaTruck />, title:"Great Value", detail:"Continous promotions"},{icon:<BiWorld />, title:"Worldwide Delivery", detail:"Supported more than 10 countries."},{icon:<MdOutlinePayment />, title:"Safe Payment", detail:"Popular and safe payment methods"},{icon:<MdPhoneIphone />, title:"Shop with Confidence", detail:"Protect your purchase and delivery."},]
const Section3 = ()=>{
    return(
     

         
          <div className="flex flex-row  gap-4  lg:mx-16 items-center justify-center  h-[520px] mb-10 ">
        {/* CATEGORIES */}
        <div className="lg:flex flex-col w-[250px]  bg-white hidden ">
          {categories.map((cat, i)=>(
              <div key={i} className="flex flex-row gap-2 items-center justify-between h-10 pl-6 pr-3 hover:bg-gray-100 hover:text-orange-600 group">
                <p>{cat.cat}</p>
                <p className="hidden group-hover:block">  {cat.icon}</p>
               
              </div>
          ))}
        </div>

                  {/*  THE MIDDLE SECTION */}
        <div className="flex flex-col gap-2 sm:w-[700px] w-[650px] h-[520px]">
            {/* THE TOP MOST PART OF THE MIDDLE SECTION */}
    
      <div className="h-[320px] relative">
      <Image 
        src ="/market-kikuu.webp"
        alt="market kikuu picture"
        layout="fill"
        objectFit="cover"
        />
      </div>
      {/* THE LOWER PART OF THE MIDDLE SECTION */}
      <div className="flex flex-col gap-1  h-[200px] ">
        {/* THE UPPER PART */}
       <div className="flex flex-row gap-2 h-[100px] w-[700px]">
        <div className="relative w-[350px] ">
        <Image 
        src ="/pc-men-shoes-banner.jpg"
        alt="phone photo"
      layout="fill"
        objectFit="cover"
        />
        </div>

        <div className="relative w-[350px] ">
        <Image 
        src ="/pc-women-shoes-banner.webp"
        alt="phone photo"
        layout="fill"
        objectFit="cover"
        />
        </div>


      
        
       </div>

         {/* THE LOWER PART */}
         <div className="flex flex-row gap-2 h-[100px] w-[700px]">
        <div className="relative w-[350px] ">
        <Image 
        src ="/pc-phone-banner.jpg"
        alt="phone photo"
        layout="fill"
        objectFit="cover"
        />
        </div>

        <div className="relative w-[350px] ">
        <Image 
        src ="/pc-use-cate-banner.jpg"
        alt="phone photo"
       layout="fill"
        objectFit="cover"
        />
        </div>

        </div>
      </div>
        </div>
{/* THE LAST PART OF SECTION3 */}
   <div className="lg:flex flex-col bg-white h-[520px] w-[250px] px-4 hidden">
    <div className="flex justify-center items-center mt-8 mb-6">
      <div className="rounded-full w-[70px] h-[70px]  bg-gray-100 flex items-center justify-center">
      <Image
      src="/kikuu-mall.png"
      width={60}
      height={60}
      alt="kikuu mall logo"
      />
      </div>
  
     
    </div>
    <p className="font-bold flex justify-center text-md" >Welcome to KiKKU</p>
    <div className="flex flex-row gap-2 mt-6 mb-6">
      <button className="bg-orange-500 text-white py-1 px-6 rounded-sm">Login</button>
      <button className="bg-gray-100 py-1 px-6 rounded-sm">Register</button>
    </div>
    {
    stuff.map((item, i)=>
      (
        <div className="bg-gray-50 pl-4 py-3 text-xs">
          <div className="flex flex-row gap-1 items-center mb-1 " key={i}>
           <div className="text-blue-500 text-2xl">{item.icon}</div>
           <div className="flex flex-col ">
            <p className="font-bold">{item.title}</p>
            <p className="text-gray-600">{item.detail}</p>
           </div>
          </div>
        </div>
      )
    )
   }
   </div>

    </div>
      
    )
}

export default Section3;