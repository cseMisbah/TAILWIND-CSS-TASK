import React from "react";
import images from "../PRACTICE/images/images.jpeg";

const Practice_10 = () => {
  return (
    <div>
      <div className="bg-black sm:bg-red-500 md:bg-blue-500 xl:bg-yellow-500  2xl:bg-gray-500">
        <img
          src={images}
          alt=""
          className="w-[140px] h-[140px] md:w-[360px] transition duration-5000 hover:rotate-180 hover:translate-y-[180px] md:h-[360px]"
        />
      </div>
    </div>
  );
};

export default Practice_10;

/*

  <div className="bg-black sm:bg-red-500 md:bg-blue-500 xl:bg-yellow-500  2xl:bg-gray-500">
        <img
          src={images}
          alt=""
          className="w-[140px] h-[140px] md:w-[360px] hover:rotate-45 md:h-[360px]"
        />
      </div>

       <div className="bg-black sm:bg-red-500 md:bg-blue-500 xl:bg-yellow-500  2xl:bg-gray-500">
        <img
          src={images}
          alt=""
          className="w-[140px] h-[140px] md:w-[360px] hover:translate-x-[180px] md:h-[360px]"
        />
      </div>
*/
