import React from "react";

const Card = () => {
  return (
    <div className="h-screen bg-red-200 flex justify-center items-center">
      <div className="card relative h-[500px] w-[500px] bg-white rounded-[50px] px-10 py-20 text-white">
        <div className="h-full flex flex-col justify-between">
          <p className="font-medium">Audio Descriptions</p>
          <h1 className="text-5xl font-bold">
            Descriptions that really make a scene.
          </h1>
          <p className="text-sm">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
        </div>

        <div className="bg-white absolute right-10 bottom-10 rounded-full p-2 cursor-pointer">
          <img src={"../CARD_DESIGN/images/plus_Icon.png"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
