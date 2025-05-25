import React from "react";

const Practice_08 = () => {
  return (
    <div>
      <div className="bg-green-300 mx-auto w-[500px] p-4 grid grid-cols-3 gap-4">
        <div className="bg-green-500 col-start-1 col-end-4">1</div>
        <div className="bg-green-500 col-span-3">2</div>
        <div className="bg-green-500 col-span-2">3</div>
        <div className="bg-green-500 col-span-2">4</div>
        <div className="bg-green-500 col-span-2">5</div>
      </div>
    </div>
  );
};

export default Practice_08;
/*
   <div className="bg-green-300 mx-auto w-[500px] p-4 grid grid-cols-2 gap-4">
        <div className="bg-green-500">1</div>
        <div className="bg-green-500">2</div>
        <div className="bg-green-500">3</div>
        <div className="bg-green-500">1</div>
        <div className="bg-green-500">2</div>
        <div className="bg-green-500">3</div>
      </div>
*/
