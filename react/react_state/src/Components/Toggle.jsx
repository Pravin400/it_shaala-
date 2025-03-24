import { useState } from "react";

function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      
      {isVisible && <p>Hello, My_World!</p>}
    </>
  );
}

export default Toggle;

