import React from "react";
import AddTodo from "./AddTodo";

const PropsHandling = ({ value }) => {
  return (
    <div>
      name:{value}
      <br />
      {/* age:{value2}
      <br />
      role:{value3} */}
      {/* <h1>componnet 2</h1>
      <AddTodo person={value} /> */}
    </div>
  );
};

export default PropsHandling;
