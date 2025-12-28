document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create list item
        const li = document.createElement('li');

        // Create text span
        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';

        // Add delete functionality
        deleteBtn.onclick = function () {
            li.style.opacity = '0';
            li.style.transform = 'translateX(20px)';
            setTimeout(() => {
                taskList.removeChild(li);
            }, 300); // Wait for transition to finish
        };

        li.appendChild(deleteBtn);

        // Add to list
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
        taskInput.focus();
    }

    // Add task when button is clicked
    addBtn.addEventListener('click', addTask);

    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
