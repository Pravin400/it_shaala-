const h1 = document.getElementById("my-h1")

const p1 = fetch("https://dummyjson.com/todos")
p1.then((res ) => res.json())
.then(data => {

    todos.forEach((e1)=>(
        // 
        // console.log(todo1);
        h1.innerHTML = todo1.todo;
    ) )
}
)
.catch((err) => console.log(err));