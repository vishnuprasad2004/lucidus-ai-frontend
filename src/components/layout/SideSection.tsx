"use client";


import React, { useState } from "react";
import { MdOutlineLogout } from "react-icons/md";
import { FiSidebar } from "react-icons/fi";
import Image from "next/image";


const SideSection = () => {

    // const [closed] = useState(false)

    return (
        <section
            className="w-1/5 h-full flex flex-col items-center justify-between p-1 py-5">
            {/* section header */}
            <div className="flex flex-row justify-around align-bottom w-full">
                {/* logo */}
                <Image src="/g1.png" height={150} width={150} alt="logo" className=""/>
                <FiSidebar className="text-neutral-400 scale-150"/>
            </div>
            
            {/* options (if they are there) */}
            <div>
l
            </div>
            
            {/* section footer */}
            <div className="w-full px-4 flex align-middle justify-between text-lg text-neutral-300">
                <span>Logout&nbsp;&nbsp;</span><MdOutlineLogout className="scale-125 translate-y-1"/>
            </div>
                
        </section>
    )
}

export default SideSection