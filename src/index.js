import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Cards from "./Cards";
import "./index.css";
import Sdata from "./Sdata";
import ToDo from "./ToDo";
import ComA from "./ComA";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(<App />, document.getElementById("root"));

/*ReactDOM.render(
  <BrowserRouter>
    <App />
    <ToDo />
  </BrowserRouter>,
  document.getElementById("root")
);*/

/*const arr = ["Manoj", "Goskonda"];

const store = [1, ...arr, 27, "Male"];
console.log(arr);
console.log(store);*/

/*const fullName = {
  fname: "Manoj",
  lname: "Goskonda",
};

const biodata = {
  id: 1,
  ...fullName,
  age: 27,
  gender: "male",
};

console.log(biodata);*/

/*ReactDOM.render(
  <>
    <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
    {Sdata.map((val, index) => {
      console.log(index);
      return (
        <Cards
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          links={val.links}
        />
      );
    })}
  </>,
  document.getElementById("root")
);*/

/*ReactDOM.render(
  <>
    <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
    <Cards
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      links={Sdata[0].links}
    />
    <Cards
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      links={Sdata[1].links}
    />
    <Cards
      imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      sname={Sdata[2].sname}
      links={Sdata[2].links}
    />
  </>,
  document.getElementById("root")
);*/

//ReactDOM.render(<App />, document.getElementById("root"));

/*let curDate = new Date(2021, 5, 31, 11);
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {};

if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "Green";
} else if (curDate >= 12 && curDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "Blue";
} else {
  greeting = "Good Night";
  cssStyle.color = "Black";
}

ReactDOM.render(
  <h1>
    Hi Sir,<span style={cssStyle}>{greeting}</span>
  </h1>,
  document.getElementById("root")
);*/
