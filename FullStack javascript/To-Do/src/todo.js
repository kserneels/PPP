class Todo {
    constructor(title, description, dueDate, priority, notes = '', checklist = []) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.status = 'incomplete';
    }

    markComplete() {
        this.status = 'complete';
    }
}

export default Todo;
