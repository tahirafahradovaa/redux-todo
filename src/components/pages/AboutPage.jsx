import React from "react";
import { useSelector } from "react-redux";

function AboutPage() {
  const todos = useSelector((state) => state);

  return (
    <>
      <div className="container">
        {" "}
        {todos > 0 ? (
          <h1>You have {todos.length} todos. Hurry Up!</h1>
        ) : (
          <h1>You have nothing to do!</h1>
        )}
      </div>
    </>
  );
}

export default AboutPage;
