// import React, { useRef, useState } from "react";

// const UseRefExample = () => {
//   const [count, setCount] = useState(50);
//   const textRef = useRef();
//   const buttonRef = useRef();
//   const visibleTxt = useRef();
//   console.log("visibleButtonRef", visibleTxt);

//   const handleClick = () => {
//     buttonRef.current.style.width = `${count}px`;
//     // visibleButtonRef.current.style.display = "none";
//     setCount(count + 50);
//     // textRef.current.style.color = "red";
//     // textRef.current.style.backgroundColor = "yellow";
//   };

//   return (
//     <div>
//       <h1 ref={textRef}>UseRef Hook Example here </h1>
//       <input
//         ref={buttonRef}
//         type="number"
//         placeholder="Enter Text here"
//         value={count}
//       />
//       <button
//         onClick={() => {
//           handleClick();
//         }}
//       >
//         click me
//       </button>
//       <button
//         onClick={() => {
//           visibleTxt.current.style.display = "none";
//         }}
//       >
//         Im visible man
//       </button>
//       <p ref={visibleTxt}>Hey im rahul jha and im visible for now!!!!!</p>
//     </div>
//   );
// };

// export default UseRefExample;

// import React, { useEffect, useState } from "react";

// // hooks rerender componnet on every time hooks chnge
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
// export default UseRefExample;

import React, { useRef, useState, useEffect } from "react";

function TrackDimensions() {
  const divRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    console.log(divRef.current.offsetWidth);

    const updateDimensions = () => {
      const { offsetWidth, offsetHeight } = divRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div>
      <div
        ref={divRef}
        style={{
          width: "50%",
          height: "200px",
          backgroundColor: "lightgreen",
          margin: "auto",
        }}
      >
        Resize the window to change my size!
      </div>
      <p>Width: {dimensions.width}px</p>
      <p>Height: {dimensions.height}px</p>
    </div>
  );
}

export default TrackDimensions;
