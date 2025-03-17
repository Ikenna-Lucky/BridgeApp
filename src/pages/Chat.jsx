import React from "react";
import Leftsidebar from "../components/Leftsidebar";
import Chatbox from "../components/Chatbox";
import Rightsidebar from "../components/Rightsidebar";

const Chat = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#596aff] to-[#383699] grid place-items-center">
      <div className="w-[95%] h-[75vh] max-w-5xl bg-[aliceblue] grid grid-cols-[1fr_2fr_1fr]">
        <Leftsidebar />
        <Chatbox />
        <Rightsidebar />
      </div>
    </div>
  );
};

export default Chat;
