import React, { useCallback, useState } from "react";
import UseCallbackChild from "./UseCallbackChild";

const UseCallbackParent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("hellooo");
  const increment = () => {
    setCount((prev) => prev + 1);
    // setText("ghkjhg");
  };
  // const increment = useCallback(() => {
  //   setCount((prev) => prev + 1);
  // }, []); // No dependencies, so it never recreates

  return (
    <div>
      <h1>without usecallback {count}</h1>
      <button onClick={increment}>Increment</button>
      <UseCallbackChild text={text} />
    </div>
  );
};

export default UseCallbackParent;
