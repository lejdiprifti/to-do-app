function ToDoObject(id, title, description, done=false) {
    return {
        'id': id,
        'title': title,
        'description': description,
        'done': done
    }
}

export default ToDoObject;