import React from "react";
import "./../styles/App.css";
import ToDoListNew from "./toDoListNew";
import AllToDoList from "./allToDoList";

function App() {
  var toDo = [
    {
      lable: "task 1",
      displayEdit: false
    },
    {
      lable: "task 2",
      displayEdit: false
    }
  ];
  const [toDoList, setToDoList] = React.useState([]);
  // const [currentEditTask, setCurrentEditTask] = React.useState("");
  // const [display, setDisplay] = React.useState(false);

  const handleSaveEdited = (toDoListCopy) => {
    setToDoList(toDoListCopy);
  };
  const handleSave = (newTask, index = 0) => {
    var toDoListCopy = [...toDoList];
    let newToDo = {};
    newToDo.lable = newTask;
    newToDo.displayEdit = false;
    toDoListCopy.push(newToDo);
    setToDoList(toDoListCopy);
  };
  const handleEdit = (index) => {
    console.log("inside handleEdit");
    var toDoListCopy = [...toDoList];
    toDoListCopy[index].displayEdit = true;
    setToDoList(toDoListCopy);
  };
  const handleDelete = (index) => {
    var toDoListCopy = [...toDoList];
    toDoListCopy.splice(index, 1);
    setToDoList(toDoListCopy);
  };
  // const handleEditChange = (event, index) => {
  //   setCurrentEditTask(event.target.value);
  // };
  // const handleEditSave = (index) => {
  //   var toDoListCopy = [...toDoList];
  //   toDoListCopy[index] = currentEditTask;
  //   setCurrentEditTask("");
  //   setToDoList(toDoListCopy);
  //   setDisplay(false);
  // };
  return (
    <div id="main">
      {/* <textarea
        id="task"
        name="task"
        rows="4"
        cols="50"
        placeholder="fill you task here"
        onChange={(event) => handleChange(event)}
        value={newTask}
      />
      <button id="btn" onClick={handleSave}>
        Save
      </button> */}
      <ToDoListNew page={"1"} handleSave={handleSave} />
      {/* <ol>
        {toDoList.map((todo, index) => (
          <li key={`${index + 1}`}>
            {todo}
            <button onClick={(event, index) => handleEdit(index)}>Edit</button>
            <button onClick={(event, index) => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol> */}
      <AllToDoList
        page={"2"}
        allToDoList={toDoList}
        handleSaveEdited={handleSaveEdited}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
