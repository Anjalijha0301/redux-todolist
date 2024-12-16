import React, { useEffect, useState } from "react";

const UseEffectExmples = () => {
  const [count, setCount] = useState();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      UseEffectExmples
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click here
      </button>
      {/* {count && <TodoListNew />} */}
    </div>
  );
};

export default UseEffectExmples;
