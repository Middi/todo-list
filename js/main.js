var todoList = {
	todos: [],

	// Add a todo to list
	addTodo: function (todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
	},

	// Edit a todo
	changeTodo: function (id, todoText) {
		this.todos[id].todoText = todoText;
	},

	// Delete a todo
	deleteTodo: function (id) {
		this.todos.splice(id, 1);
	},

	// Toggle completed todo status
	toggleCompleted: function (id) {
		var todo = this.todos[id];
		todo.completed = !todo.completed;
	},

	// toggle all todos completed status
	toggleAll: function () {
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
	}
};

// Get DOM elements
var handlers = {

	// Get addTodo from DOM
	addTodo: function () {
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);

		// Clear text input after submit
		addTodoTextInput.value = '';
		// Display todos
		view.displayTodos();
	},

	// Get changeTodo from DOM
	changeTodo: function () {
		var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);

		// Clear text input after submit
		changeTodoPositionInput.value = '';
		changeTodoTextInput.value = '';
		// Display todos
		view.displayTodos();
	},

	// Get deleteTodo from DOM
	deleteTodo: function () {
		var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
		todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);

		// Clear text input after submit
		deleteTodoPositionInput.value = '';
		// Display todos
		view.displayTodos();
	},

	// Get toggleCompleted from DOM
	toggleCompleted: function () {
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);

		// Clear text input after submit
		toggleCompletedPositionInput.value = '';
		// Display todos
		view.displayTodos();
	},

	toggleAll: function () {
		todoList.toggleAll();
		// Display todos
		view.displayTodos();
	}
};

// Print to screen
var view = {
	displayTodos: function () {
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';

		for (var i = 0; i < todoList.todos.length; i++) {

			var todoLi = document.createElement('li');

			// Check for completion
			var todo = todoList.todos[i];
			var todoListWithCompletion = '';

			// If complete
			if (todo.completed === true) {

				todoListWithCompletion = '(x) ' + todo.todoText;
				// If not complete
			} else {
				todoListWithCompletion = '( ) ' + todo.todoText;
			}

			// Add todo list with completion status to li and ad to ul
			todoLi.textContent = todoListWithCompletion;
			todosUl.appendChild(todoLi);
		}
	}
};