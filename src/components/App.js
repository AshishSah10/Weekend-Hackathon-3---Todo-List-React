import React from "react";
import "./../styles/App.css";
import ToDoListNew from "./toDoListNew";
import AllToDoList from "./allToDoList";

function App() {
  // var toDo = [
  //   {
  //     lable: "task 1",
  //     displayEdit: false
  //   },
  //   {
  //     lable: "task 2",
  //     displayEdit: false
  //   }
  // ];
  const [toDoList, setToDoList] = React.useState([]);

  const handleSaveEdited = (toDoListCopy) => {
    setToDoList(toDoListCopy);
  };
  const handleSave = (newTask, index = 0) => {
    var toDoListCopy = [...toDoList];
    let newToDo = {};
    if (newTask.trim() === "") return;
    newToDo.lable = newTask;
    newToDo.displayEdit = false;
    toDoListCopy.push(newToDo);
    setToDoList(toDoListCopy);
  };
  const handleEdit = (index) => {
    //console.log("inside handleEdit");
    var toDoListCopy = [...toDoList];
    toDoListCopy[index].displayEdit = true;
    setToDoList(toDoListCopy);
  };
  const handleDelete = (index) => {
    var toDoListCopy = [...toDoList];
    toDoListCopy.splice(index, 1);
    setToDoList(toDoListCopy);
  };
  return (
    <div id="main">
      <ToDoListNew page={"1"} handleSave={handleSave} />
      <AllToDoList
        allToDoList={toDoList}
        handleSaveEdited={handleSaveEdited}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
