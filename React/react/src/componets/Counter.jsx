import { useState } from "react";

const Counter = () => {
  const [num, setnum] = useState(0);
  const increaseCounter = () => {
    console.log("button is clicked");
    setnum(num + 1);
  };

  return (
    <>
      <div className="border-3 m-10  bg-amber-200">
        <h1 className="text-3xl flex p-12 items-center justify-center">
          number is {num}
        </h1>
        <button
          onClick={increaseCounter}
          className="m-6 ext-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-amber-600 dark:hover:bg-amber-700 focus:outline-none dark:focus:ring-amber-800"
        >
          increaseCounter
        </button>
        <button
          className="m-6 justify-center items-center ext-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-amber-600 dark:hover:bg-amber-700 focus:outline-none dark:focus:ring-amber-800"
          onClick={() => {
            setnum(num - 1);
          }}
        >decrement
        </button>
      </div>
    </>
  );
};

export default Counter;
