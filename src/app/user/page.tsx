"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import ChatInput from "@/components/layout/ChatInput";
import Link from "next/link";
import SideSection from "@/components/layout/SideSection";

export default function Home() {
    
    const [messages, setMessages] = useState([
        { text: "Hello!", isUser: false },
        { text: "Hi there!", isUser: true },
        { text: "Hello!", isUser: false },
        { text: "Hi there!", isUser: true },
        { text: "Hi there!", isUser: true },
        { text: "Hi there!", isUser: true },
        { text: "Hi there!", isUser: true },
        { text: "Hi there!", isUser: true },
        { text: "Hi there!", isUser: true },
    ]);
    
    
    function handleSubmit(): import("react").FormEventHandler<HTMLFormElement> | undefined {
        throw new Error("Function not implemented.");
    }


    return (
        <div className="relative min-h-screen m-0 overflow-hidden flex ">
            {/* chat bot ui */}
            <SideSection/>

            <div className="rounded-lg m-3 bg-neutral-100 w-4/5 overflow-hidden flex flex-col justify-between">
                {/* local nav bar */}
                <div 
                className="w-full p-3 shadow-md">
                    Your Department's Own AI Assistent &nbsp;
                    {/* <span className="p-1 bg-orange-500/80 text-white border-2 border-orange-500  rounded-md">HR Department</span> */}
                </div>

                {/* chats */}
                <div
                    className=" w-full h-full overflow-y-scroll"
                >
                    <div className="p-3 h-full">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${
                                    msg.isUser ? "justify-end" : "justify-start"
                                }`}
                            >
                                <div
                                    className={`p-2 px-3 m-2 rounded-xl shadow-md ${
                                        msg.isUser
                                            ? "bg-cyan-600 text-white rounded-e-sm"
                                            : "bg-white text-neutral-900 rounded-s-sm"
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* chat input fields */}
                <div className=" w-full flex flex-col justify-center align-middle">
                    <form action="" method="post" className="">
                        <ChatInput/>
                    </form>
                    <span className="pb-2 text-center text-xs font-semibold text-neutral-600">This version is under development mode, hence in this version the history won't be stored. For more info <Link href="/docs" className="text-cyan-600">visit our docs.</Link></span>
                </div>
            </div>
            
            

            {/* prompt ask field */}
            
        </div>
    );
}
