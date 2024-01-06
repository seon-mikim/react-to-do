
const readTodoFormLocalStorage = () => {
    const todos = localStorage.getItem('todos')
    return todos ? JSON.parse(todos): []
}

export default readTodoFormLocalStorage