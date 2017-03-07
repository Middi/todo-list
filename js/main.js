var todoList = {
	todos: [],

	// Display list of Todos
	displayTodos: function() {
		if (this.todos.length === 0) {
			console.log('List empty');
		} else {
			console.log('My todos:');
			for (var i = 0; i < this.todos.length; i++) {

				if (this.todos[i].completed === true) {
					console.log('(x)', this.todos[i].todoText);
				} else {
					console.log('( )', this.todos[i].todoText);
				}
			}
		}
	},

	// Add a todo to list
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},

	// Edit a todo
	changeTodo: function(id, todoText) {
		this.todos[id].todoText = todoText;
		this.displayTodos();
	},

	// Delete a todo
	deleteTodo: function(id) {
		this.todos.splice(id, 1);
		this.displayTodos();
	},

	// Toggle completed todo status
	toggleCompleted: function(id) {
		var todo = this.todos[id];
		todo.completed = !todo.completed;
		this.displayTodos();
	},

	// toggle all todos completed status
	toggleAll: function() {

		var totalTodos = this.todos.length;
		var completedTodos = 0;

		// get number of completed todos
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}

		// if everything is true , make everything false.
		if (completedTodos === totalTodos) {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
		} else {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
		this.displayTodos();
	}
};

// Get DOM elements
var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', function() {
			todoList.displayTodos();
});

			toggleAllButton.addEventListener('click', function() {
				todoList.toggleAll();

			});