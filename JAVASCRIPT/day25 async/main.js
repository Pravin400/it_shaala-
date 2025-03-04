const p1 = fetch("https://dummyjson.com/todos"
)
// there data and err are just a name we can write any thing 
// console.log("a")
p1.then((res ) => res.json()).then(data => console.log(data))
.catch((err) => console.log(err));
// console.log("a")
