import React, { useContext } from "react";
import todoContext from "../context/TodoContext";

function CompletedTodos() {
  const context = useContext(todoContext);

  const comp = context.todo.filter((todo) => todo.completed === true);

  return (
    <div>
      <h1>Completed Todos</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Due Date</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {comp &&
            comp.map((to, index) => (
              <tr key={index}>
                <td>{to.title}</td>
                <td>{to.doeDate}</td>
                <td>{to.completed ? "true" : ""}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompletedTodos;
