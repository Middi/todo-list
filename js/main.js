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
var handlers = {

	displayTodos: function() {
		todoList.displayTodos();
	},

	addTodo: function() {
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
	},

	changeTodo: function() {
		var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput.value = '';
		changeTodoTextInput.value = '';
	},

	deleteTodo: function() {
		var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
		todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
		deleteTodoPositionInput.value = '';
	},

	toggleCompleted: function() {
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';
	},

	toggleAll: function() {
		todoList.toggleAll();
	}
};