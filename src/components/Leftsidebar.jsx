import React, { useState } from "react";
import assets from "../assets/assets";

const Leftsidebar = () => {
  const [onHover, setOnHover] = useState("")
  return (
    <div className="bg-[#001030] text-white overflow-y-hidden ">
      <div className="p-5">
        <div className="flex justify-between items-center">
          <img className="max-w-36" src={assets.logo} alt="" />
          <div className="relative py-2.5">
            <img
              className="max-h-5 opacity-90 cursor-pointer"
              src={assets.menu_icon}
              alt=""
            />
            <div className="absolute top-full right-0 w-[130px] p-5 rounded-sm bg-white text-black hide">
              <p className="text-sm cursor-pointer">Edit Profile</p>
              <hr className="border-0 h-[1px] bg-[#a4a4a4] my-2"/>
              <p className="text-sm cursor-pointer">Logout</p>
            </div>
          </div>
        </div>
        <div className="bg-[#002670] flex items-center gap-2.5 px-3 py-2.5 mt-5">
          <img className="w-4" src={assets.search_icon} alt="" />
          <input
            className="bg-transparent border-0 outline-0 text-white text-xs"
            type="text"
            placeholder="Search here"
          />
        </div>
      </div>
      <div className="flex flex-col h-[74%] overflow-y-scroll">
        {Array(12)
          .fill("")
          .map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 py-2.5 px-5 cursor-pointer text-sm hover:bg-[#077eff] group"
            >
              <img
                className="w-9 aspect-square rounded-full"
                src={assets.profile_img}
                alt=""
              />
              <div className="flex flex-col">
                <p>Ikenna Goodluck</p>
                <span className="text-[#9f9f9f] text-xs group-hover:text-white">
                  Hello, How are you?
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Leftsidebar;
