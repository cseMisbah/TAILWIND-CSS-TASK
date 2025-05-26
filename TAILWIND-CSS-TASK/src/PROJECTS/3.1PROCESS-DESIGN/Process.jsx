import React from "react";
import images1 from "../3.1PROCESS-DESIGN/images/process1.png";
import images2 from "../3.1PROCESS-DESIGN/images/process2.png";
import images3 from "../3.1PROCESS-DESIGN/images/process3.png";
import images4 from "../3.1PROCESS-DESIGN/images/process4.png";
import images5 from "../3.1PROCESS-DESIGN/images/process5.png";
import images6 from "../3.1PROCESS-DESIGN/images/codeabc.jpg";

const Process = () => {
  return (
    <div className="min-h-screen bg-blue-100 py-20">
      <h1 className="text-center font-bold text-5xl pb-10">
        <span className="text-blue-700">Our</span> Process
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex gap-10">
          <div className="flex justify-end">
            <div className="w-[120px] h-[120px]  common_class flex justify-center items-center">
              <img src={images1} alt="" srcset="" />
            </div>
          </div>

          <div className="common_class">
            <h1 className="font-bold text-xl">1. Create Your Profile</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              rem minima architecto, molestias dolorum deserunt a cum odio
              quibusdam quidem accusamus non minus excepturi eum.
            </p>
          </div>
        </div>

        <div className="flex gap-10">
          <div className="w-[450px] flex justify-end">
            <div className="w-[120px] h-[120px]  common_class flex justify-center items-center">
              <img src={images2} alt="" srcset="" />
            </div>
          </div>

          <div className="common_class">
            <h1 className="font-bold text-xl">
              2. Provide your employment details
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              rem minima architecto, molestias dolorum deserunt a cum odio
              quibusdam quidem accusamus non minus excepturi eum.
            </p>
          </div>
        </div>

        <div className="flex gap-10">
          <div className="w-[750px] flex justify-end">
            <div className="w-[120px] h-[120px]  common_class flex justify-center items-center">
              <img src={images3} alt="" srcset="" />
            </div>
          </div>

          <div className="common_class">
            <h1 className="font-bold text-xl">3. Lookup our project</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              rem minima architecto, molestias dolorum deserunt a cum odio
              quibusdam quidem accusamus non minus excepturi eum.
            </p>
          </div>
        </div>

        <div className="flex gap-10">
          <div className="w-[450px] flex justify-end">
            <div className="w-[120px] h-[120px]  common_class flex justify-center items-center">
              <img src={images4} alt="" srcset="" />
            </div>
          </div>

          <div className="common_class">
            <h1 className="font-bold text-xl">4. Select your template</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              rem minima architecto, molestias dolorum deserunt a cum odio
              quibusdam quidem accusamus non minus excepturi eum.
            </p>
          </div>
        </div>

        <div className="flex gap-10">
          <div className="flex justify-end">
            <div className="w-[120px] h-[120px]  common_class flex justify-center items-center">
              <img src={images5} alt="" srcset="" />
            </div>
          </div>

          <div className="common_class">
            <h1 className="font-bold text-xl">5. Pay through Bkash/Nagad</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              rem minima architecto, molestias dolorum deserunt a cum odio
              quibusdam quidem accusamus non minus excepturi eum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
