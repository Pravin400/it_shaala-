import React, { useState } from "react";

function VirtualDomExample() {
  const [text, setText] = useState("Hello, World!");

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText("Text Updated!")}>Change Text</button>
    </div>
  );
}

export default VirtualDomExample;
