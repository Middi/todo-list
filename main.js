var todos = ['item1', 'item2', 'item3'];

function displayTodos() {
	console.log('My todos:', todos);
}


function addTodo(todo) {
	todos.push(todo);
	displayTodos();
}

function changeTodo(id, newValue) {
	todos[id]  = newValue;
	displayTodos();
}