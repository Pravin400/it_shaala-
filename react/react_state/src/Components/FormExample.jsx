import { useState } from "react";

function FormExample() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}!</p>
    </>
  );
}

export default FormExample;
