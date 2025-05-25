import React from "react";
import images from "../PRACTICE/images/images.jpeg";

const Practice_09 = () => {
  return (
    <div className="bg-black sm:bg-red-500 md:bg-blue-500 xl:bg-yellow-500  2xl:bg-gray-500">
      <img
        src={images}
        alt=""
        className="w-[140px] h-[140px] md:w-[360px] md:h-[360px]"
      />
    </div>
  );
};

export default Practice_09;
