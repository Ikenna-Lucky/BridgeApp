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

      {/* ---------- the message section --------- */}
      <div className="h-[calc(100%-70px)] px-1.5 py-[50px] overflow-y-scroll flex flex-col-reverse">
        {/* Sender message */}
        <div className=" flex items-end justify-end gap-1.5 px-4">
          <p className="text-white bg-[#077eff] p-2 max-w-[200px] text-xs font-light rounded-[8px_8px_0px_8px] mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            libero atque magnam, fugiat vitae fugit!
          </p>
          <div className="text-center text-[10px]">
            <img
              width={27}
              className="aspect-square rounded-[50px]"
              src={assets.profile_img}
              alt=""
            />
            <p>2:30pm</p>
          </div>
        </div>

        <div className=" flex items-end justify-end gap-1.5 px-4 mb-1">
          <img className="max-w-[230px] mb-[30px] rounded-lg" src={assets.pic1} alt="" />

          <div className="text-center text-[10px]">
            <img
              width={27}
              className="aspect-square rounded-[50px]"
              src={assets.profile_img}
              alt=""
            />
            <p>2:30pm</p>
          </div>
        </div>

        {/* receivers message*/}
        <div className=" flex flex-row-reverse items-end justify-end gap-1.5 px-4">
          <p className="text-white bg-[#077eff] p-2 max-w-[200px] text-xs font-light rounded-[8px_8px_8px_0px] mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            libero atque magnam, fugiat vitae fugit!
          </p>
          <div className="text-center text-[10px]">
            <img
              width={27}
              className="aspect-square rounded-[50px]"
              src={assets.profile_img}
              alt=""
            />
            <p>2:30pm</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 py-2.5 px-4 bg-white absolute bottom-0 left-0 right-0">
        <input
          className="flex-1 border-0 outline-0"
          type="text"
          placeholder="Send a message"
        />
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
