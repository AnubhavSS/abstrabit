"use client"
import Image from "next/image"
import logo from '../../public/logo.png'
import user from '../../public/user.png'
import down from '../../public/down.png'
import up from '../../public/up.png'
import { useState } from "react"
const Header = () => {

  const [show, setshow] = useState(false)

  return (
    <div className="w-full h-[85px] bg-white flex justify-between items-center relative">

       <Image src={logo} width={50} height={48} className="ml-20"/>
<div className="flex flex-row items-center justify-center gap-10 mr-20">
    <p className="text-center text-[#1A1B1E] text-[17px] font-medium ">Dashboard</p>
    <p className="text-center text-[#1A1B1E] text-[17px] font-medium ">FAQs</p>
    <p className="text-center text-[#1A1B1E] text-[17px] font-medium ">Support</p>
    <div onMouseEnter={()=>setshow(true)} onMouseLeave={()=>setshow(false)} className="w-[71px] cursor-pointer h-[42px] bg-white border border-[#4A4ED4] rounded-[24px] gap-2 flex items-center justify-center">
        <Image src={user} alt="user" width={22} height={22} />
        {show? <Image src={up} alt="up" width={8} height={5}/>:<Image src={down} alt="down" width={8} height={5}/>}
        
    </div>


 { show &&   <div className="w-[238px] h-[226px] rounded-[5px] bg-white absolute top-16 right-12 shadow-sm shadow-[#0000001A]">
{/* My Profile */}
<div className="flex items-center gap-5 m-5">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 19.968 20">
  <g id="Group_128" data-name="Group 128" transform="translate(-667.979 -1226)">
    <circle id="Ellipse_40" data-name="Ellipse 40" cx="5.149" cy="5.149" r="5.149" transform="translate(672.813 1226)" fill="#3b39d9"/>
    <path id="Subtraction_2" data-name="Subtraction 2" d="M9.984,0A10.141,10.141,0,0,0,0,8.368H19.968A10.129,10.129,0,0,0,9.984,0Z" transform="translate(667.979 1237.632)" fill="#fa9d17"/>
  </g>
</svg>

<p className="font-medium text-left text-[20px] text-black/70">My Profile</p>

</div>

{/* My FDs */}
<div className="flex items-center gap-5 m-5">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18.762" viewBox="0 0 20 18.762">
  <g id="Group_130" data-name="Group 130" transform="translate(-1564.979 717.784) rotate(-90)">
    <path id="Subtraction_3" data-name="Subtraction 3" d="M10,8.381a10.118,10.118,0,0,1-3.555-.64A10.119,10.119,0,0,1,3.438,5.977,10.166,10.166,0,0,1,0,0H20a10.165,10.165,0,0,1-3.438,5.977,10.116,10.116,0,0,1-3.006,1.765A10.118,10.118,0,0,1,10,8.381Z" transform="translate(699.022 1584.979) rotate(-90)" fill="#3b39d9"/>
    <path id="Subtraction_4" data-name="Subtraction 4" d="M10,8.381a10.118,10.118,0,0,1-3.555-.64A10.119,10.119,0,0,1,3.438,5.977,10.166,10.166,0,0,1,0,0H20a10.165,10.165,0,0,1-3.438,5.977,10.116,10.116,0,0,1-3.006,1.765A10.118,10.118,0,0,1,10,8.381Z" transform="translate(709.403 1584.979) rotate(-90)" fill="#a4d92c"/>
  </g>
</svg>

<p className="font-medium text-left text-[20px] text-black/70">My FDs</p>

</div>

{/*My Transactions*/}
<div className="flex items-center gap-5 m-5">
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="18.011" viewBox="0 0 22 18.011">
  <g id="Group_129" data-name="Group 129" transform="translate(0 -4.741)">
    <path id="Rectangle_695" data-name="Rectangle 695" d="M2.957,0h0A2.957,2.957,0,0,1,5.914,2.957V18.011a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V2.957A2.957,2.957,0,0,1,2.957,0Z" transform="translate(0 4.741)" fill="#fa9d17"/>
    <path id="Rectangle_696" data-name="Rectangle 696" d="M2.957,0h0A2.957,2.957,0,0,1,5.914,2.957V13.808a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V2.957A2.957,2.957,0,0,1,2.957,0Z" transform="translate(8.042 8.944)" fill="#3b39d9"/>
    <path id="Rectangle_709" data-name="Rectangle 709" d="M2.957,0h0A2.957,2.957,0,0,1,5.914,2.957V8.9a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V2.957A2.957,2.957,0,0,1,2.957,0Z" transform="translate(16.086 13.848)" fill="#3b39d9"/>
  </g>
</svg>
<p className="font-medium text-left text-[20px] text-black/70">My Transactions</p>

</div>


{/*Logout*/}
<div className="flex items-center gap-5 m-5">
<svg xmlns="http://www.w3.org/2000/svg" width="18.904" height="20" viewBox="0 0 18.904 20">
  <g id="Group_151" data-name="Group 151" transform="translate(-16.566 -225.629)">
    <path id="Subtraction_5" data-name="Subtraction 5" d="M10,8.381a10.118,10.118,0,0,1-3.555-.64A10.119,10.119,0,0,1,3.438,5.977,10.166,10.166,0,0,1,0,0H20a10.165,10.165,0,0,1-3.438,5.977,10.116,10.116,0,0,1-3.006,1.765A10.118,10.118,0,0,1,10,8.381Z" transform="translate(16.566 245.629) rotate(-90)" fill="#3b39d9"/>
    <path id="Rectangle_711" data-name="Rectangle 711" d="M5.457,0h0a5.457,5.457,0,0,1,5.457,5.457V8.9a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V5.457A5.457,5.457,0,0,1,5.457,0Z" transform="translate(35.471 229.543) rotate(90)" fill="#fa9d17"/>
  </g>
</svg>
<p className="font-medium text-left text-[20px] text-black/70">Logout</p>

</div>

    </div>}
</div>
    </div>
  )
}

export default Header