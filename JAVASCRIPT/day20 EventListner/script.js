// event handler

const selectbtn = document.getElementById("btn")
const selectbtn1 = document.getElementById("btn1")

// there are 2 methods for event 
// selectbtn.onclick = handleClick;

// selectbtn.addEventListener("click",handleClick)
// function handleClick() {
//     console. log("Btn clicked");
// }
// using arrow function 
// ondblclick use when we want to perform operation when we double click
selectbtn.ondblclick = () => {
    console. log("Btn clicked");
}

// onchange
// selectbtn1.onclick = (event ) => {
// // in event all  the event info will we here
// //use when we want to know the user whick key will be press 
//     console. log(event);
// }

// document.onkeydown = (event) =>{
//     console.log(event);
//     console.log("Pressing key",event.key);
// }
btn.onclick = (event) =>{
    console.log(event.target);
    console.log("Pressing is clicked");
}