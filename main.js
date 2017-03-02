var todoList = {
	todos: [],
	displayTodos: function() {
		if (this.todos.length === 0) {
			console.log('List empty');
		} else {
			console.log('My todos:');
			for (var i = 0; i < this.todos.length; i++) {
				console.log(this.todos[i].todoText);
			}
		}
	},
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function(id, todoText) {
		this.todos[id].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function(id) {
		this.todos.splice(id, 1);
		this.displayTodos();
	},
	toggleCompleted: function(id) {
		var todo = this.todos[id];
		todo.completed = !todo.completed;
		this.displayTodos();

	}
};