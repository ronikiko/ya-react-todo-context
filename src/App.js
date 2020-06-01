import React, { useContext, useState } from "react";
import "./App.css";
import todoContext from "./context/TodoContext";
import TodoTable from "./components/TodoTable";

function App() {
  const context = useContext(todoContext);

  const [input, setInput] = useState({
    title: "",
    doeDate: "",
    completed: false,
  });

  const [err, setErr] = useState('')

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
    if( (input.title === '') ) {
      setErr('Filed title not Empty!')
      return false
    }
    if( (input.doeDate === '') ) {
      setErr('Filed date not empty!')
      return false
    }
    else {
      setErr('')
      context.addTodoToList(input);
      setInput({title:'', doeDate:'', completed:false})
    }
   
  };

  return (
    <div className="App">
      <h1>Add a new Todo</h1>
      {err}
      <form onSubmit={onSubmit}>
        Title: <input type="text" name="title" onChange={onInputChange}  value={input.title}/>
        Due Date: <input type="date" name="doeDate" onChange={onInputChange} value={input.doeDate} />
        Completed:{" "}
        <input type="checkbox" name="completed" checked={input.completed} onChange={handleCheckox}/>
        <input type="submit" value="add" />
      </form>
      <TodoTable />
    </div>
  );
}

export default App;
