function changeContent(){
    const myH1E1 = document.getElementById("my-h1");

    // content --> innerHTML

    console.log(myH1E1.innerHTML);
    myH1E1.innerHTML = "content from main.js";
}

// const myE2 = document.getElementById("my-h1")
// console.log(myE2.innerText);
// console.log(myE2.textContent);

// const person = {
//     userName : "salman"
// };

// console.log(person.userName);