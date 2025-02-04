function change(){
    const a  = document.querySelector(".h1")
    // changing the style
    a.style.backgroundColor = "red";
    a.style.color = "yellow";
}
let flag = 0;
function toggle(){
    const a = document.querySelector(".h2")
    // if(flag == 0){
    //     a.style.display ="none"
    //     flag = 1;
    // }
    // else{
    //     a.style.display = "block"
    //     flag = 0
    // }
    if(a.style.display == "none"){
        // display block shows the display content
        a.style.display = "block"
        a.style.fontSize = "30px"
    }
    else{
    // display block hides the display content

        a.style.display ="none"
    }
    // a.style.display ="block"
}

// .add .remove .content .toggle

function toggleCon(){
    const change = document.querySelector("#con")
    change.classList.toggle
}