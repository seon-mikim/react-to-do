
const getFilterTodos = (todos, filter) => {
if(filter ==="all") {
    return todos
}
return todos.filter(todo => todo.status === filter)
}

export default getFilterTodos