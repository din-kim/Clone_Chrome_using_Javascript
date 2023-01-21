const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");
let todos = [];

function newTodoList(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    todos.push(newTodo);
    addTodo(newTodo);
    saveTodos();
}

function addTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    li.appendChild(span);
    li.appendChild(btn);

    span.innerText = newTodo;
    btn.innerText = "X";
    
    todoList.appendChild(li);
    btn.addEventListener("click", deleteTodo);
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

todoForm.addEventListener("submit", newTodoList);
const savedTodos = localStorage.getItem("todos");

if (savedTodos !== null) {
    parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(addTodo);
}
