import React, { useState } from "react";
import TodoContext from "./TodoContext";

const TodoStateContext = (props) => {
  const [todo, setTodo] = useState([
    {
      title: "roni",
      doeDate: "10/05/2020",
      completed: false,
    },
  ]);

  const addTodoToList = (newTodo) => {
    setTodo([...todo, newTodo]);
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        addTodoToList,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoStateContext;
