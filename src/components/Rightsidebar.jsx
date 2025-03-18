import React from "react";
import assets from "../assets/assets";

const Rightsidebar = () => {
  return (
    <div className="text-white bg-[#001030] relative overflow-y-hidden">
      <div className="pt-[60px] text-center max-w-[70%] m-auto flex flex-col items-center justify-center">
        <img
          width={110}
          className="aspect-square rounded-full"
          src={assets.profile_img}
          alt=""
        />
        <h3 className="text-lg font-normal flex items-center justify-center gap-1.5 my-1.5">
          Ikenna Goodluck <img src={assets.green_dot} alt="" />
        </h3>
        <p className="text-xs opacity-80 font-light">
          Ciao, how can i help you?
        </p>
      </div>
      <hr className="border-[#ffffff50] my-4 " />
      <div className="px-5 text-sm">
        <p>Media</p>
        <div className="max-h-[180px] overflow-y-scroll grid grid-cols-3 gap-1.5 mt-2">
          <img className="w-[60px] rounded-sm cursor-pointer" src={assets.pic1} alt="" />
          <img className="w-[60px] rounded-sm cursor-pointer" src={assets.pic2} alt="" />
          <img className="w-[60px] rounded-sm cursor-pointer" src={assets.pic3} alt="" />
          <img className="w-[60px] rounded-sm cursor-pointer" src={assets.pic4} alt="" />
          <img className="w-[60px] rounded-sm cursor-pointer" src={assets.pic1} alt="" />
          <img className="w-[60px] rounded-sm cursor-pointer" src={assets.pic2} alt="" />
        </div>
      </div>
      <button className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#077eff] text-white text-xs font-light py-2.5 px-16 rounded-[20px] cursor-pointer">Logout</button>
    </div>
  );
};

export default Rightsidebar;
