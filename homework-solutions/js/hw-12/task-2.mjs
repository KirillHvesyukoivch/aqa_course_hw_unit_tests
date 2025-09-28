async function createTodo(todoBody) {
    try {

    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todoBody)
    });
    if(response.status!= 201) throw new Error("не 201");
     const bodyResponse = await response.json();
    if (bodyResponse.id !== 201) throw new Error("ID не тот");
    return bodyResponse;
}
catch{
    console.log("задача успешно провалена")
}
finally{
    console.log("задача завершенна")
}
}

createTodo({ title: "do a barrel row", completed: false, userId: 1 })
.then(body => console.log(body));

