import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AddToDo from "./components/pages/AddToDo";
import ToDoList from "./components/pages/TodoList";
import About from "./components/pages/AboutPage";
import { useSelector } from "react-redux";
import reducer from "./redux/reducers/reducer";

function App() {
  const [count, setCount] = useState(0);
  let todo = useSelector((state) => state);
  return (
    <>
      <div className="head">
        <Link style={{ color: "black", textDecoration: "none" }} to={"/"}>
          Add To do
        </Link>
        <Link style={{ color: "black", textDecoration: "none" }} to={"/list"}>
          To Do List
        </Link>
        <Link style={{ color: "black", textDecoration: "none" }} to={"/about"}>
          About To do
        </Link>
      </div>

      <Routes>
        <Route element={<AddToDo />} path="/" />
        <Route element={<ToDoList />} path="/list" />
        <Route element={<About />} path="/about" />

        <Route />
      </Routes>
    </>
  );
}

export default App;
