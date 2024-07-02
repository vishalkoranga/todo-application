import React, { useState } from 'react';

const AddTodo = (props) => {
  const [title,setTitle]= useState("");
  const [desc,setDesc]= useState("");

  const submit= (e)=>{
    e.preventDefault();
    if(!title || !desc){
      alert("fill both sections title and desc")
    }
    props.addTodo(title,desc);
  }
  const formStyle = {
    padding: '.75rem .75rem .375rem .75rem',
    fontFamily: 'inherit',
    fontSize: '1rem',
    lineHeight: '1.5',
    borderWidth: '1px',
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
  };

  return (
    <div>
      <form style={formStyle} onSubmit={submit}>
        <h4 className="text-center mb-3">Add Todo</h4>
        <div className="mb-3">
          <label htmlFor="title" className="form-label"> Todo Title</label>
          <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">this will be added as new task</div>
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">description of task</label>
          <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddTodo;

