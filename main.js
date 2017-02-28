var todos = ['item1', 'item2', 'item3'];


// it should have a function to display todos.
function displayTodos() {
	console.log('My todos:', todos);
}

// it should have a function to add todos.
function addTodo(todo) {
	todos.push(todo);
	displayTodos();
}

// it should have a function to change todos.
function changeTodo(id, newValue) {
	todos[id]  = newValue;
	displayTodos();
}

// it should have a function to delete todos.
function deleteTodo(id) {
	todos.splice(id, 1);
	displayTodos();
}