import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
  const [img, setImg] = useState("");
  const inputEvent = (event) => {
    const data = event.target.value;
    console.log(data);
    setImg(data);
  };

  return (
    <>
      <input
        type="text"
        value={img}
        onChange={inputEvent}
        placeholder="Search Anything"
      />
      {img === "" ? null : <Sresult name={img} />}
    </>
  );
};

export default Search;
