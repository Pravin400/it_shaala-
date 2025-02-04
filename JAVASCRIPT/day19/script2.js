const parentDiv = document.getElementById("parent")
// const parentDiv1 = document.getElementById("parent")

function createpara(){
    // this method is only use to create elemet and add content 
    const a = document.createElement("p")
    a.innerHTML = "para created using para"
    const b = document.createElement("h2")
    b.innerHTML = "heading created using para"
    
// this  method is use to add the element in the html and multiple element we can add at atime 
    parentDiv.append(a,b)
 // appent child   method is use to add the element in the html  to add only one element at a time 
    // parentDiv1.appendChild(a)
}
// remove element 

function AddImg(){
    const image = document.createElement("img")
    // not htis 
    // image.innerHTML = "https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg"
    image.setAttribute("src","https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg")
    image.setAttribute("width","100px")
    parentDiv.append(image)

}

function AddPara(){
    const P = document.getElementById("input")
    const par = document.createElement("p")
    // input value is use to add the 
    par.innerHTML = input.value
    parentDiv.append(par)

}

// divisioon creating and adding tag in that
function dynamic(){
const div = document.createElement("div")
const img = document.createElement("img")

div.append(img)
// or use backticks
let url = "https://media.istockphoto.com/id/1973365581/vector/sample-ink-rubber-stamp.jpg?s=612x612&w=0&k=20&c=_m6hNbFtLdulg3LK5LRjJiH6boCb_gcxPvRLytIz0Ws="
const adding = div.innerHTML = `<img src="${url}" `;
div.append(img)
parentDiv.append(adding)
// ${} is use to add the element dynamically 
}