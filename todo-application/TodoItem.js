import React from 'react'

const TodoItem = ({todo,onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button><hr/>
    </div>
  );
};

export default TodoItem;

