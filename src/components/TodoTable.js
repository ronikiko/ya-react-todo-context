import React, { useContext } from "react";
import todoContext from "../context/TodoContext";
import CompletedTodos from "../components/CompletedTodos";
const TodoTable = () => {
  const context = useContext(todoContext);
  return (
    <div>
      <h1>All Todos</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Due Date</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {context.todo &&
            context.todo.map((to, index) => (
              <tr key={index}>
                <td>{to.title}</td>
                <td>{to.doeDate}</td>
                <td>{to.completed ? "true" : "false"}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <CompletedTodos />
    </div>
  );
};

export default TodoTable;
