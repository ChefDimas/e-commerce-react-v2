import React from "react";

function Newsletter() {
  return (
    <div className="flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#c4a4f9]">
      <h1 className="font-bold text-[50px]">NewsLetter</h1>
      <h2 className="text-[20px] mt-2">Stay in touch with us.</h2>
      <div className="flex mt-[3rem] items-center justify-between min-w-[30rem] min-h-[2rem]">
        <input type="text" placeholder="E-mail" className="" />
        <button>Send</button>
      </div>
    </div>
  );
}

export default Newsletter;
