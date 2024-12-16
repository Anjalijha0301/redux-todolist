import React, { useEffect, useRef, useState } from "react";

// hooks rerender componnet on every time hooks chnge
// const UseRefExample = () => {
//   const [count, setCount] = useState(0);
//   console.log("count", count);

//   useEffect(() => {
//     console.log("rerendering");
//   });

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Click me
//       </button>
//     </div>
//   );
// };

// on rerendering normal varinable not npresist there value
// const UseRefExample = () => {
//   const [count, setCount] = useState(0);
//   let a = 0;
//   //   console.log("count", count);
//   console.log("a", count);

//   useEffect(() => {
//     a = a + 1;
//     console.log("rerendering ", a);
//   });

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Click me
//       </button>
//     </div>
//   );
// };

// // to prevent this issue you can use useref
// const UseRefExample = () => {
//   const [count, setCount] = useState(0);
//   const a = useRef(0);
//   //   console.log("count", count);
//   console.log("a", a);

//   useEffect(() => {
//     a.current = a.current + 1;
//     console.log("rerendering ", a);
//   });

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Click me{a.current}
//       </button>
//     </div>
//   );
// };

//////second use case////////

// const UseRefExample = () => {
//   const [count, setCount] = useState(0);
//   //   console.log("count", count);
//   const buttonRef = useRef();

//   useEffect(() => {
//     buttonRef.current.style.backgroundColor = "red";
//     console.log("rerendering ");
//   });

//   return (
//     <div>
//       <button
//         ref={buttonRef}
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Click me
//       </button>
//     </div>
//   );
// };

const UseRefExample = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  const handleInput = () => {
    inputRef.current.style.width = "400px";
    setCount((val) => val + 1);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="number"
        placeholder="Enter Value"
        value={count}
      />
      <button
        onClick={() => {
          handleInput();
        }}
      >
        Increase Value
      </button>
    </div>
  );
};

export default UseRefExample;
