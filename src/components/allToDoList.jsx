import React from "react";
import ToDoListNew from "./toDoListNew";

function allToDoList(props) {
  const handleSave = (editedTask, index) => {
    if (editedTask.trim() === "") return;
    var allToDoListCopy = [...props.allToDoList];
    allToDoListCopy[index].lable = editedTask;
    allToDoListCopy[index].displayEdit = false;
    props.handleSaveEdited(allToDoListCopy);
  };
  //var display = false;
  return (
    <div>
      <ol>
        {props.allToDoList.map((todo, index) => (
          <li key={`${index + 1}`} className="list">
            {todo.displayEdit === false ? (
              <>
                {todo.lable}
                <button
                  clsssName="edit"
                  onClick={() => props.handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => props.handleDelete(index)}
                >
                  Delete
                </button>
              </>
            ) : (
              <ToDoListNew
                page={"2"}
                index={index}
                newTask={props.allToDoList[index].lable}
                handleSave={handleSave}
              />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default allToDoList;
