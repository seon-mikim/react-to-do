import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import getFilterTodos from "../../utils/getFilterTodos";
import styles from "./TodoList.module.css";
import readTodoFormLocalStorage from "../../utils/readTodoFormLocalStorage";
const TodoList = ({ filter }) => {
  const [todos, setTodos] = useState(() => readTodoFormLocalStorage());
  const handleAdd = (todo) => {
    console.log(todo);
    setTodos([...todos, todo]);
  };
  const handleUpdate = (updateTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updateTodo.id ? updateTodo : todo))
    );
  };
  const handleDelete = (deleteTodo) => {
    setTodos(todos.filter((todo) => todo.id !== deleteTodo.id));
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const filterTodos = getFilterTodos(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filterTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
};

export default TodoList;
