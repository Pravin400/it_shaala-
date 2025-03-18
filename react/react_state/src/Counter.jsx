function Counter() {
  const [count , updatecount] = useState("srushti");
  function handleClick(){
    updatecount("srushti ");
    function next(){
      updatecount("srushti is smart")
    }
  }
  return (
    <>
      <h1>Click Below To See The World</h1>
      <button onClick={() => handleClick( next() )}>Click</button>
      
      
      </>
  )
}
export default Counter