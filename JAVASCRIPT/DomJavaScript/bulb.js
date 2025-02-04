let bulb = document.querySelector(".bulb")
let bton = document.querySelector(".on")
let btoff = document.querySelector(".off")
let turn = 0;

    bton.addEventListener("click",function(){
    if(turn == 0){
        bulb.style.background = "linear-gradient(to top,rgba(255, 213, 0, 0.84),rgb(255, 230, 0))"; 
        console.log("Color on")
        turn = 1;
    }
    else{
        bulb.style.background = "" ;
        console.log("Color of")
        turn = 0;
    }

})


// btoff.addEventListener("click",function(){
//     bulb.style.backgroundColor = "" ;
// })
