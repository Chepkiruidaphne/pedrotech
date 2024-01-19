import React, { useRef } from "react";

function Use_ref() {
  const input = useRef(null);
  const changePlaceholder = () => {
    input.current.placeholder = "Youtube"; //changes placeholder to Youtube
    //input.current.focus();-focuses the text entered
    //console.log(input) -shows what you can change in input.
  };

  return (
    //useRef is a React Hook that lets you reference a value that’s not needed for rendering.

    <>
      <input
        className="border border-black"
        type="text"
        placeholder="wassup?" // You can swap placeholder with value
        ref={input}
      />
      <button
        className="m-2 border-slate-200 bg-slate-200 border rounded-sm"
        onClick={changePlaceholder}
      >
        Change Placeholder
      </button>
    </>
  );
}

export default Use_ref;
