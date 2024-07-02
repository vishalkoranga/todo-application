import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({ todos,onDelete }) => {
  let mystyle= {
    minHeight: "60px",
    margin: " 35px auto",
  }
  return (
    <div className="container" style={mystyle}>
      <h3 className="text-center">Todos List</h3>
      {todos.length === 0 ? (
        <p>No Todos to display</p>
      ) : (
        todos.map((todo) => (
          <div key={todo.sno} className="todo-item">
            <TodoItem todo={todo} onDelete={onDelete}/>
          </div>
        ))
      )}
      </div>
  )
};

export default Todos;
