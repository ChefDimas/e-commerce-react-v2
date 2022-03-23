import React from "react";

function Counter() {
  return (
    <div>
      <div className="flex items-center justify-center text-2xl">
        Quantity
        <div className="ml-5 shadow-md flex">
          <div className="bg-[#8a4af3] text-white w-8 flex items-center justify-center cursor-pointer rounded-l-md">
            -
          </div>
          <div>1</div>
          <div className="bg-[#8a4af3] text-white w-8 flex items-center justify-center cursor-pointer">
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
