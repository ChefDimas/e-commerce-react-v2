import React, { useState } from "react";

function Counter() {
  // Counter using hook useState
  const [count, setCount] = useState(0);

  const handleSubtractOne = () => {
    // Condition to avoid count to be a negative value
    if (count >= 1) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  const handleAddOne = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div className="flex items-center justify-center text-2xl">
        Quantity
        <div className="ml-5 shadow-md flex">
          <div className="bg-[#8a4af3] text-white w-8 flex items-center justify-center cursor-pointer rounded-l-md">
            <button className="pb-[4px]" onClick={handleSubtractOne}>
              -
            </button>
          </div>
          <div className="w-8 flex items-center justify-center border-[1px] border-[#8a4af3]">
            {count}
          </div>
          <div className="bg-[#8a4af3] text-white w-8 flex items-center justify-center cursor-pointer rounded-r-md">
            <button className="pb-[4px]" onClick={handleAddOne}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
