import React, { useState } from "react";

const ToDo = () => {
  const [num, setToDo] = useState(0);

  const inCrem = () => {
    setToDo(num + 1);
  };

  const DeCrem = () => {
    if (num > 0) {
      setToDo(num - 1);
    } else {
      setToDo(0);
      alert("Zero Last Limit.");
    }
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> 0 {num}</h1>
        </div>
        <div className="btn_div">
          <button onClick={inCrem} className="btn">
            inCrem
          </button>
          <button onClick={DeCrem} className="btn">
            Decrem
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDo;
