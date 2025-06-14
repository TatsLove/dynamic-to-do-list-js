// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Alert if the input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Event handler to remove task
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append button to li, then li to ul
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Add event listener to Add Task button
    addButton.addEventListener('click', addTask);

    // Allow Enter key to add a task
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
