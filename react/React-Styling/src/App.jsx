import './App.css'
import Footer from './Components/footer';


function App() {
  
  let isCompleted = true;
  const styleObj ={
    backgroundColor: isCompleted? "green":"yellow"
  }

  return (
    <>
    <Footer />
      <h1 style={styleObj} >hello</h1>
      <h1 style={{backgroundColor:"yellow",color:"red",fontSize:"100px"}}>heloo</h1>

      <div>
        <h1 className="bg-red-500">
          Hello world!
        </h1>
       </div>
  <p class="bg-pink-500 backdrop-brightness-50
   bg-purple-600">hello</p>
    </>
  )
}

export default App
