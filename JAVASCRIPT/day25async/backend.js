// const h1 = document.getElementById("my-h1")

// const p1 = fetch("https://dummyjson.com/todos")
// p1.then((res ) => res.json())
// .then(data => {

//     todos.forEach((e1)=>(
//         // 
//         // console.log(todo1);
//         h1.innerHTML = todo1.todo;
//     ) )
// }
// )
// .catch((err) => console.log(err));


//CORRECTED CODE 

const h1 = document.getElementById("my-h1");

fetch("https://dummyjson.com/todos")
  .then((res) => res.json()) // Convert response to JSON
  .then((data) => {
    // `data.todos` contains the list of todos
    data.todos.forEach((e1) => {
      console.log(e1.todo); // Log each todo item
      h1.innerHTML = e1.todo; // This will only display the last todo item
    });
  })
  .catch((err) => console.log(err));



fetch("https://dummyjson.com/todos")
  .then((res) => res.json()) // Convert response to JSON
  .then((data) => {
    // Clear h1 before adding todos
    h1.innerHTML = "";

    data.todos.forEach((e1) => {
      console.log(e1.todo); // Log each todo in the console
      h1.innerHTML += `<p>${e1.todo}</p>`; // Append each todo as a new paragraph
    });
  })
  .catch((err) => console.log(err));
