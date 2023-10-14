import React from "react";

const ToDo = ({ text, updateMode, deleteToDo }) => {
  return (
    <div className="todo" style={{ display: "flex" }}>
      <div className="text">{text}</div>
      <div className="icons">
        <div className="icon" onClick={updateMode}>
          update
        </div>
        <div className="icon" onClick={deleteToDo}>
          delete
        </div>
      </div>
    </div>
  );
};

export default ToDo;
