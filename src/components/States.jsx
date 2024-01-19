import React, { useState } from "react";

function States() {
  // useState
  const [firstNAme, setFirstName] = useState("Victoria");
  const [age, setAge] = useState(18);
  // Login
  const userName = "Pedro123";
  const password = "password";
  const [userNameState, setUserNameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  // ternary operator-boolean for questions
  const [showHeader, setShowHeader] = useState(true);
  //Array destructuring
  const [name, setNAme] = useState("");
  const [listOfNames, setListOfNames] = useState([]);

  function login() {
    if (userNameState === userName && passwordState === password) {
      setLoggedIn(true);
    }
  }

  return (
    <>
      <div className="">
        <button
          className="m-2 border-slate-200 bg-slate-200 border rounded-sm"
          onClick={() => setShowHeader(false)}
        >
          Show header
        </button>
        {showHeader ? (
          <h1 className="flex text-2xl font-bold justify-center">Basics</h1>
        ) : (
          <h1 className="flex text-2xl font-bold justify-center">Not Basics</h1>
        )}
        {firstNAme}{" "}
        <button
          className="m-2 border-slate-200 bg-slate-200 border rounded-sm"
          onClick={() => {
            setFirstName("Daphne");
          }}
        >
          CHANGE NAME
        </button>
        <br />
        {age}
        <button
          className="m-2 border-slate-200 bg-slate-200 border rounded-sm"
          onClick={() => {
            setAge(age + 1);
          }}
        >
          Increase Age
        </button>
        <br />
        <div className=" flex items-center justify-center flex-col">
          <input
            type="text"
            onChange={(Event) => {
              setUserNameState(Event.target.value);
            }}
            placeholder="Username"
            className="pl-4 m-2 border-black border rounded-md"
          />
          <input
            type="password"
            onChange={(Event) => {
              setPasswordState(Event.target.value);
            }}
            placeholder="Enter password"
            className="pl-4 m-2 border-black border rounded-md"
          />
          <button
            onClick={login}
            className="m-2 border-slate-200 bg-slate-200 border rounded-sm"
          >
            Submit
          </button>
          {loggedIn && <h1>Logged In</h1>}
        </div>
        <div>
          <input
          className="border"
            type="text"
            onChange={(Event) => {
              setNAme(Event.target.value);
            }}
          />
          <button
          className="m-2 border-slate-200 bg-slate-200 border rounded-sm"
            onClick={() => {
              setListOfNames([...listOfNames, name]);
              setNAme("");
              console.log(listOfNames);
            }}
          >
            Add Name
          </button>
          {/* rendering */}
          {listOfNames.map((value,key) => {
            return<h2 key={key}>{value}</h2>
          })}
        </div>
      </div>
    </>
  );
}

export default States;
