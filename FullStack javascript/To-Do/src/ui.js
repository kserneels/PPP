function renderProjects(projects) {
    const projectContainer = document.getElementById('projects');
    projectContainer.innerHTML = '';

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
      <h3>${project.name}</h3>
      <button class="select-project">Select</button>
    `;

        const todoListDiv = document.createElement('div');
        todoListDiv.id = `todos-${project.name}`;

        project.todos.forEach(todo => {
            const todoDiv = document.createElement('div');
            todoDiv.classList.add('todo-item');
            todoDiv.innerHTML = `
        <span class="${todo.status === 'complete' ? 'completed' : ''}">${todo.title}</span>
        <span> - ${todo.dueDate}</span>
        <button class="complete-todo">Complete</button>
        <button class="delete-todo">Delete</button>
      `;
            todoListDiv.appendChild(todoDiv);
        });

        projectDiv.appendChild(todoListDiv);
        projectContainer.appendChild(projectDiv);
    });
}

function renderTodos(project, projectName) {
    const todoListDiv = document.getElementById(`todos-${projectName}`);
    todoListDiv.innerHTML = '';

    project.todos.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-item');
        todoDiv.innerHTML = `
      <span class="${todo.status === 'complete' ? 'completed' : ''}">${todo.title}</span>
      <span> - ${todo.dueDate}</span>
      <button class="complete-todo">Complete</button>
      <button class="delete-todo">Delete</button>
    `;
        todoListDiv.appendChild(todoDiv);
    });
}

export { renderProjects, renderTodos };
