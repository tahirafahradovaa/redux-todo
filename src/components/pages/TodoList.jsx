import React from "react";
import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state);

  return (
    <>
      <div className="container">
        {todos &&
          todos.map((item) => {
            return (
              <>
                <p>{item.todo}</p>
              </>
            );
          })}
      </div>
    </>
  );
}

export default TodoList;
