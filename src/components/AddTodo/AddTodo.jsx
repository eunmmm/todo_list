import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 리프레시 되지 않음
    if (text.trim().length === 0) {
      // trim을 하는 순간 앞 뒤 여백이 줄어들음
      // 빈문자가 추가되는 이슈를 막기 위해 사용
      return;
    }
    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
    // 문자 초기화 하기
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
