import React from 'react';

import './TodoList.scss';

const TodoList = ({ list, remove }) => {
  return (
    <>
      {list?.length > 0 ? (
        <ul className="todos-list">
          {list.map((entry, index) => (
            <div className="todo">
              <li key={index}> {entry} </li>

              <button
                className="delete-button"
                onClick={() => {
                  remove(entry);
                }}>
                Удалить
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>Нет задач</p>
        </div>
      )}
    </>
  );
};

export default TodoList;
