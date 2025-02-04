
// use for selecting the html element 
function content(){
    const a = document.querySelector("#h1")
// console.log(a)

//  changing the html content 

// we can change all things in a single line 
// document.querySelector("#h1").innerHTML = "Hello The Content Will Be Changed 😚😚 "

a.innerHTML = "Hello The Content Will Be Changed 😚😚 "
// inner html options 
// innerHTML,innerText, TextContent 


a.style.color = "red"
// we cannot put '-' in the js so instead of the we use cammel case as shown below
a.style.backgroundColor = "yellow"
a.style.fontSize = "30px"
// event listner

a.addEventListener("click",function(){
    a.innerHTML = "☠️☠️Badal gaya dekh lo console me ☠️☠️"
    console.log("this is event listner")
})
}

// content()