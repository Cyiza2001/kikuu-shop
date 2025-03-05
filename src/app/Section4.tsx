import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
const cards =[{img:"/tripod.webp", desc1:"New electric money spit ",desc2:"money prop let it rain",  cost:"17,255 RWF"},{img:"/k-s-oss-1676086072905ySCdaMwe3E.webp", desc1:"New electric money spit ",desc2:"money prop let it rain",  cost:"17,255 RWF"},{img:"/casualsuit.webp", desc1:"New electric money spit ",desc2:"money prop let it rain",  cost:"17,255 RWF"},{img:"/compass.webp", desc1:"New electric money spit ", cost:"17,255 RWF"},{img:"/k-s-oss-1676086072905ySCdaMwe3E.webp", desc1:"New electric money spit ", cost:"17,255 RWF"},{img:"/k-s-oss-1676086072905ySCdaMwe3E.webp", desc1:"New electric money spit ", cost:"17,255 RWF"},{img:"/tatoo.webp", desc1:"New electric money spit ", cost:"17,255 RWF"}]


const Section4 = ()=>{
    return(
        <div className="flex flex-row h-72 w-[87vw] lg:mx-16 sm:justify-center lg:justify-start mb-10">
            {/* THE TIMER AND PROMOTION SECTION */}
            <div className="flex-none bg-[#DA1736] h-full min-w-[15%] px-4 py-8 ">
                {/* THE DESCRIPTION OF THE PROMOTION */}
                <div className="flex flex-col  gap-4">
                    <p className="text-white font-bold text-2xl">Flash Sale</p>
                    <p className="text-white font-bold text-lg">Up to 60% OFF</p>
                    <p className="text-white font-bold text-base">This round ends in</p>
                </div>

                {/* THE ACTUAL TIMER */}
                <div className="flex flex-row gap-1 font-bold mt-4" >
                    <button className="bg-black text-white text-lg px-2 py-1 rounded-sm">13</button>
                    <button className=" text-black text-3xl">:</button>
                    <button className="bg-black text-white text-lg px-2 py-1 rounded-sm">58</button>
                    <button className=" text-black text-3xl">:</button>
                    <button className="bg-black text-white text-lg px-2 py-1 rounded-sm">23</button>
                </div>
                {/* THE LOWER BUTTON */}
               
                <button className=" flex flex-row items-center justify-center gap-2 rounded-2xl bg-white w-full  text-red-700 font-bold mt-8 py-1"> <p>View All </p>{<FaAngleRight />}</button>

              
            </div>

            {/* THE LEFT CARDS */} 
            <div className="relative flex flex-1 max-w-[85%]">
            <div className=" flex flex-row bg-white gap-10 w-full  h-full px-6 py-4 overflow-x-scroll ">
                
                {
                   cards.map((card, index)=>(
                       <div key={index} className="flex flex-col gap-2 min-w-[20%] "> 
                       {/* DIV FOR AN IMAGE */}
                        <div className="relative h-[70%] ">
                           <Image 
                                   src ={card.img}
                                   alt="picture"
                                   fill
                                   style={{ objectFit: "cover" }}
                                 />
                        </div>
                        <div className="flex flex-col">
                        <p className="flex text-black text-sm">{card.desc1}</p>
                        <p className="flex text-black text-sm">{card.desc2}</p>
                        </div>
                 
                        <p className="flex text-red-700 text-xl font-bold">{card.cost}</p>
                     

                       </div>
                   ))
                }
   
           </div>
           <button className="bg-gray-400 text-white absolute left-0 top-1/2 transform -translate-y-1/2 py-4 px-1 text-xl ">{<FaAngleLeft />}</button>
           <button className="bg-gray-400 text-white absolute right-0 top-1/2 transform -translate-y-1/2 py-4 px-1  text-xl">{<FaAngleRight />}</button>  
            </div>
         
           
        </div>
    )
}

export default Section4;