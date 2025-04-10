import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function reducerFn(state, payload) {
  console.log(state, payload);
  if (payload === "increase") {
    return state + 1;
  } else if (payload === "decrese") {
    return state - 1;
  }
  else if(payload === "reset"){
    return 0;
  }
}


const secret = import.meta.env.VITE_APP_SECRET;
const secret1 = import.meta.env.VITE_APP_maza;

console.log(secret);
console.log(secret1);

function App() {
  const [count, action] = useReducer(reducerFn, 0);

  return (
    <>
      <h1>hii there {count}</h1>
      <button onClick={() => action("increase")}>Increase</button>
      <button onClick={() => action("decrese")}>Decrease</button>
      <button onClick={() => action("reset")}>Reset</button>
    </>
  );
}

export default App;