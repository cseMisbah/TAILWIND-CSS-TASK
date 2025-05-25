import React from "react";
import images from "../FORM_DESIGN/images/codeabc.jpg";

const Form = () => {
  return (
    <div className="w-screen min-h-screen  flex justify-center items-center">
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row gap-6  bg-white p-10 rounded-xl shadow-2xl">
        <div className="w-full md:w-1/2 bg-[#E2ECFF] flex justify-center items-center rounded-md">
          <div className="flex flex-col justify-center items-center p-10 text-center">
            <img
              src={images}
              alt="error"
              srcset=""
              className="w-20 h-20 rounded-xl"
            />
            <h1 className="text-2xl font-bold py-6">
              Let us help you run your own platform
            </h1>
            <p className="text-sm text-gray-600">
              Our registration process is quicker than other edtech platform
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 py-10">
          <h1 className="text-2xl font-bold">Get Started</h1>
          <p className="text-gray-500 pb-10">Create your account now!</p>
          <form action="#" className="flex flex-col gap-4">
            <div>
              <label for="fName" className="text-gray-500 inline-block pb-4">
                Full Name:
              </label>
              <input
                type="text"
                name="fName"
                id="fName"
                placeholder="Alex"
                className="w-full border border-gray-500 rounded-md px-4 py-2 focus:outline-none  text-black"
              />
            </div>
            <div>
              <label for="fEmail" className="text-gray-500 inline-block pb-4">
                Email:
              </label>
              <input
                type="email"
                name="fEmail"
                id="fEmail"
                placeholder="alex@gmail.com"
                className="w-full border border-gray-500 rounded-md px-4 py-2 focus:outline-none  text-black"
              />
            </div>
            <div>
              <label for="fPass" className="text-gray-500 inline-block pb-4">
                Password:
              </label>
              <input
                type="password"
                name="fPass"
                id="fPass"
                className="w-full border border-gray-500 rounded-md px-4 py-2 focus:outline-none  text-black"
              />
            </div>
            <div>
              <button className="bg-[#0082DF] w-full py-4 font-bold text-white rounded-md">
                Sign in
              </button>
            </div>
          </form>
          <p className="text-center pt-10">
            Already a member?{" "}
            <span className="text-[#0082DF] font-bold">Sign in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
