
import { useState } from 'react'
function Counter() {
  const [word , updateword] = useState(false);
  const [text , updatetext] = useState("Srushti : ");
  const [text1 , updatetext1] = useState("");
  function updated(){
      updatetext("Srushti : It's Smart Girl")
  }
  return (
    <>
      <h1>{text}</h1>
      <p>make an images to change one by one </p>
      <img src="" alt="" />
      <button onClick={() => {updateword(!word)}}> {word ? "Click Here to abnormal":"Click to Abnormal"}</button>

    </>
  )
}
export default Counter