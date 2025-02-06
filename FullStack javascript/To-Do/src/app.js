import Todo from './todo';
import Project from './project';
import { saveToLocalStorage, loadFromLocalStorage } from './storage';
import { renderProjects, renderTodos } from './ui';

const app = (() => {
    let projects = loadFromLocalStorage();

    if (projects.length === 0) {
        const defaultProject = new Project('Default Project');
        projects.push(defaultProject);
    }

    function addProject(project) {
        projects.push(project);
        saveToLocalStorage(projects);
        renderProjects(projects);
    }

    function addTodoToProject(todo, projectName) {
        const project = projects.find(p => p.name === projectName);
        if (project) {
            project.addTodo(todo);
            saveToLocalStorage(projects);
            renderTodos(project, projectName);
        }
    }

    function markTodoComplete(todo, projectName) {
        const project = projects.find(p => p.name === projectName);
        if (project) {
            const targetTodo = project.todos.find(t => t === todo);
            if (targetTodo) {
                targetTodo.markComplete();
                saveToLocalStorage(projects);
                renderTodos(project, projectName);
            }
        }
    }

    function deleteTodoFromProject(todo, projectName) {
        const project = projects.find(p => p.name === projectName);
        if (project) {
            project.removeTodo(todo);
            saveToLocalStorage(projects);
            renderTodos(project, projectName);
        }
    }

    return {
        addProject,
        addTodoToProject,
        markTodoComplete,
        deleteTodoFromProject,
        getProjects: () => projects
    };
})();

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    renderProjects(app.getProjects());

    document.getElementById('create-project').addEventListener('click', () => {
        const projectName = prompt('Enter Project Name:');
        const newProject = new Project(projectName);
        app.addProject(newProject);
    });

    document.getElementById('create-todo').addEventListener('click', () => {
        const title = prompt('Enter Todo Title:');
        const description = prompt('Enter Todo Description:');
        const dueDate = prompt('Enter Due Date:');
        const priority = prompt('Enter Priority (low, medium, high):');
        const newTodo = new Todo(title, description, dueDate, priority);
        app.addTodoToProject(newTodo, 'Default Project');
    });
});

export default app;
