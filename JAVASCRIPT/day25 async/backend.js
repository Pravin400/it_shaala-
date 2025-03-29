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

// const h1 = document.getElementById("my-h1");
// const div = document.getElementById("division");
// const data = fetch("https://dummyjson.com/todos")
//   .then((res) => res.json()) // Convert response to JSON
//   .then((data) => {
//     // `data.todos` contains the list of todos
//    setInterval((data.todos.forEach((e1) => {
//       console.log(e1.todo); // Log each todo item

//       // h1.innerHTML = e1.todo; // This will only display the last todo item
//       div.append(e1.todo)
//     })),1000) ;
//   })
//   .catch((err) => console.log(err));

  



// function greet(name, callback) {
//   console.log("Hello, " + name);
//   callback(); // Call the callback function
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// Passing sayGoodbye as a callback
// greet("Alice", sayGoodbye);


// function a() {
//   console.log("Function A");
// }

// function b(callback) {
//   console.log("Function B");
//   a(); // Just calling function a()
// }

// b(a);

// api fecing callback use 

function fetchData(callback) {
  fetch("https://dummyjson.com/todos/1")
    .then((response) => response.json())
    .then((data) => {
      console.log("Todo:", data.todo);
      callback(); // Call the callback when done
    })
    .catch((error) => console.log("Error:", error));
}

fetchData(function () {
  console.log("Data fetched successfully!");
});
