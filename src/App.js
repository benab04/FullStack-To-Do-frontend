import ToDo from "./components/ToDo";
import { useEffect, useState } from "react";
import { getAllToDo, addToDo, updateTodo, deleteToDo } from "./utils/HandleApi";
import "./App.css";
function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setisUpdating] = useState(false);
  const [todoId, settodoId] = useState("");
  useEffect(() => {
    getAllToDo(setToDo);
  }, []);
  const updateMode = (_id, text) => {
    setisUpdating(true);
    setText(text);
    settodoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>To Do List</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add a task"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
          <div
            className="add"
            onClick={
              text === ""
                ? null
                : isUpdating
                ? () =>
                    updateTodo(todoId, text, setToDo, setText, setisUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>

        <div className="list">
          {toDo.map((item) => {
            console.log(item);
            return (
              <ToDo
                key={item._id}
                text={item.text}
                updateMode={() => {
                  updateMode(item._id, item.text);
                }}
                deleteToDo={() => deleteToDo(item._id, setToDo)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
