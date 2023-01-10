import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { state } from "../../redux/reducers/reducer";
import { v4 as uuid } from "uuid";
function AddToDo() {
  const [value, setValue] = useState([]);

  let id = uuid();
  const todos = useSelector((state) => state);
  const [todo, setTodo] = useState({
    todo: value,
    id: id,
  });
  const handleChange = (e) => {
    setTodo({
      todo: e.target.value,
      id: id,
    });
  };

  const dispatch = useDispatch();

  const addYourTodo = () => {
    dispatch({
      type: "ADD",
      payload: {
        todo: todo.todo,
        id: todo.id,
      },
    });
  };
  return (
    <>
      <div className="container">
        <div>
          <input onChange={handleChange} type="text" />
          <button onClick={addYourTodo}>Add to do</button>
        </div>

        {todos &&
          todos.map((item) => {
            return (
              <>
                <div className="todoContainer" key={id}>
                  <p key={id}>{item.todo}</p>
                  <button
                    className="delete"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE",
                        payload: {
                          todo: item.todo,
                          id: item.id,
                        },
                      })
                    }
                  >
                    delete
                  </button>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default AddToDo;
