import React from "react";

function ToDoListNew(props) {
  const [newTask, setNewTask] = React.useState(props.task);
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  return (
    <div>
      <textarea
        id={props.page === "1" ? "task" : "editTask"}
        name="task"
        rows="4"
        cols="50"
        placeholder="fill you task here"
        onChange={(event) => handleChange(event)}
        value={newTask}
      ></textarea>
      {props.page === "1" ? (
        <button
          id="btn"
          onClick={() => {
            setNewTask("");
            props.handleSave(newTask);
          }}
        >
          Save
        </button>
      ) : (
        <button
          id="saveTask"
          onClick={() => {
            setNewTask("");
            props.handleSave(newTask, props.index);
          }}
        >
          SaveEdit
        </button>
      )}
    </div>
  );
}

export default ToDoListNew;
