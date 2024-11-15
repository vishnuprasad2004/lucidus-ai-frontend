"use client";

import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { Button } from "../ui/button";
import { Input } from "../ui/input";



const ChatInput = ({ onSendMessage }:any) => {
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim()) {
            onSendMessage(input);
            setInput("");
        }
    };
    

    return (
        <div className="flex items-center p-2">
            <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Start typing"
                className="flex-grow p-2 border rounded-lg active:outline-none focus:outline-none w-[32rem] "
            />
            <Button
                onClick={handleSend}
                className="ml-2 bg-orange-600 text-white px-4 py-2 rounded-lg"
            >
                <IoSend className="rotate-[-45deg]"/>
            </Button>
        </div>
    )
}

export default ChatInput