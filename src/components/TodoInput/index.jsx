import React from 'react';

import './TodoInput.scss';

const TodoInput = ({ todo, setTodo, addTodo }) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={todo}
        placeholder="Что нужно сделать?"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="add-button" onClick={addTodo}>
        Добавить
      </button>
    </div>
  );
};

export default TodoInput;
