import React from "react";
import assets from "../assets/assets";

const Chatbox = () => {
  return (
    <div className="h-[75vh] relative bg-[#f1f5ff]">
      <div className="py-2.5 px-4 flex items-center gap-2.5 border border-[#c6c6c6]">
        <img
          className="w-10 aspect-square rounded-full"
          src={assets.profile_img}
          alt=""
        />
        <p className="flex-1 font-medium text-lg text-[#393939] flex items-center gap-1.5">
          Ikenna Goodluck{" "}
          <img className="img_dot" src={assets.green_dot} alt="" />
        </p>
        <img className="w-6 rounded-full" src={assets.help_icon} alt="" />
      </div>

      <div className="flex items-center gap-3 py-2.5 px-4 bg-white absolute bottom-0 left-0 right-0">
        <input className="flex-1 borde outline-0" type="text" placeholder="Send a message" />
        <input type="file" id="image" accept="image/png, image/jpeg" hidden />
        <label className="flex" htmlFor="image">
          <img
            className="cursor-pointer w-[22px]"
            src={assets.gallery_icon}
            alt=""
          />
        </label>
        <img className="cursor-pointer w-8" src={assets.send_button} alt="" />
      </div>
    </div>
  );
};

export default Chatbox;
