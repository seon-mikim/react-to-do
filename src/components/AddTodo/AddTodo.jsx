import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from './AddTodo.module.css'
const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");
  
  const handleChangle = (e) => setText(e.target.value);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) return;
    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input}type="text" onChange={handleChangle}value={text}/>
      <button className={styles.button}>add</button>
    </form>
  );
};

export default AddTodo;
