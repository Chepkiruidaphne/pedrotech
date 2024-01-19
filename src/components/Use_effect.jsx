import React, { useEffect, useState } from "react";

function Use_effect() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Page rendered");
  }, [number]);
  return (
    // useEffect is a way to determine a set of events that are going to happen everytime the page rerenders
    // useEffect is a React Hook that lets you synchronize a component with an external system.
    <>
      <div className="">
        {number}
        <button
          className="m-2 border-slate-200 bg-slate-200 border rounded-sm"
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          Increase number
        </button>
      </div>
    </>
  );
}

export default Use_effect;
