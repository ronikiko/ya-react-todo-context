import React, { useContext, useState } from "react";
import "./App.css";
import todoContext from "./context/TodoContext";
import TodoTable from "./components/TodoTable";

function App() {
  const context = useContext(todoContext);

  const [input, setInput] = useState({
    title: "",
    doeDate: "",
    completed: null,
  });

  const onInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleCheckox = (e) => {
    if (e.target.checked) {
      setInput({ ...input, completed: true });
    } else {
      setInput({ ...input, completed: false });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    context.addTodoToList(input);
  };

  return (
    <div className="App">
      <h1>Add a new Todo</h1>
      <form onSubmit={onSubmit}>
        Title: <input type="text" name="title" onChange={onInputChange} />
        Due Date: <input type="date" name="doeDate" onChange={onInputChange} />
        Completed:{" "}
        <input type="checkbox" name="completed" onChange={handleCheckox} />
        <input type="submit" value="add" />
      </form>
      <TodoTable />
    </div>
  );
}

export default App;
