import React from "react";
import assets from "../assets/assets";

const Leftsidebar = () => {
  return (
    <div className="bg-[#001030] text-white h-[75vh]">
      <div className="p-5">
        <div className="flex justify-between items-center">
          <img className="max-w-36" src={assets.logo} alt="" />
          <div>
            <img
              className="max-h-5 opacity-90 cursor-pointer"
              src={assets.menu_icon}
              alt=""
            />
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
      <div className="flex flex-col h-9/12 overflow-y-scroll">
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
