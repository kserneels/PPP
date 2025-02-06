function saveToLocalStorage(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
}

function loadFromLocalStorage() {
    const savedProjects = localStorage.getItem('projects');
    if (savedProjects) {
        return JSON.parse(savedProjects).map(project => {
            project.todos = project.todos.map(todo => new Todo(
                todo.title, todo.description, todo.dueDate, todo.priority, todo.notes, todo.checklist
            ));
            return project;
        });
    }
    return [];
}

export { saveToLocalStorage, loadFromLocalStorage };
