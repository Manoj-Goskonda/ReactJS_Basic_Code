import React, { createContext, useContext, useEffect, useState } from "react";
import { add, sub, mul, div } from "./Calc";
import Cards from "./Cards";
import Sdata from "./Sdata";
import Netflix from "./NetFlix";
import TheOriginals from "./TheOriginals";
import SlotM from "./SlotM";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ComA from "./ComA";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./About";
//import Contact from "./Contact";
import Menu from "./Menu";
import Error from "./Error";
import Navbar from "./Navbar";
import Service from "./Service";
import User from "./User";
import Search from "./Search";
import Sresult from "./Sresult";
import ToDo from "./ToDo";
import Gridlayout from "./Gridlayout";
import Display from "./Display";

// const App = () =>{
//   return(
//     <>
//     <ToDo />
//     </>
//   )
// }

// export default App;

// const App = () => {

//   const reverseString = (string) =>{
//       let res = string.split("").reverse().join("");
//       console.log(res);
//   }

//   reverseString("I am Manoj");

//   return (
//     <>
//       <h1>JavaScript{reverseString}</h1>
//     </>
//   );
// };

// export default App;

/*const App = () => {
  const Name = () => {
    return <h1>Name</h1>;
  };
  return (
    <>
      <Menu />
      <Switch
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/contact/name" component={Name} />
        <Route exact path="/user/:fname/:lname" component={User} />
        <Route component={Error} />
      </Switch>
    </>
  );
};
export default App;*/

/*const App = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    document.title = `You click me ${num}`;
    console.log(`You click me ${num}`);
  });

  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click Me {num}
      </button>
    </>
  );
};

export default App;*/

/*const App = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);
  const [click, setClick] = useState(0);

  useEffect(() => {
    alert("You Click Me 😀");
  }, []);

  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click Me {num}
      </button>
      <br />
      <button
        className="btn"
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        Click Me {nums}
      </button>
    </>
  );
};

export default App;*/

/*const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <>
      <FirstName.Provider value={"Manoj"}>
        <LastName.Provider value={"Goskonda"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default App;
export { FirstName, LastName };*/

/*const App = () => {
  return (
    <>
      <h1 className="text-capitalize text-center my-5 text-danger">
        Welcome to My Page
      </h1>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card">
              <img
                src="https://picsum.photos/202/300"
                class="card-img-top"
                alt="..."
                height="200px"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://picsum.photos/200/300"
                class="card-img-top"
                alt="..."
                height="200px"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://picsum.photos/201/300"
                class="card-img-top"
                alt="..."
                height="200px"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;*/

/*const App = () => {
  const [fullName, setfullName] = useState({
    fname: "",
    lName: "",
    email: "",
    phone: "",
    que: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;

    const { value, name } = event.target;

    setfullName((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmits = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <h1>
            Hello <br />
            {fullName.fname} {fullName.lname}
          </h1>
          <p>{fullName.email}</p>
          <p>{fullName.que}</p>
          <input
            type="text"
            name="fname"
            onChange={inputEvent}
            value={fullName.fname}
            placeholder="Enter Your First Name "
          />
          <br />
          <input
            type="text"
            name="lname"
            onChange={inputEvent}
            value={fullName.lname}
            placeholder="Enter Your Last Name "
          />
          <br />
          <input
            type="email"
            name="email"
            onChange={inputEvent}
            value={fullName.email}
            placeholder="Enter Your Email "
            autoComplete="off"
          />
          <br />
          <input
            type="number"
            name="phone"
            onChange={inputEvent}
            value={fullName.phone}
            placeholder="Enter Your Mobile Number "
          />
          <br />
          <input
            type="text"
            name="que"
            onChange={inputEvent}
            value={fullName.que}
            placeholder="Enter Your Qualification "
          />
          <button type="submit">Submit Me 😀</button>
        </form>
      </div>
    </>
  );
};

export default App;*/

/*const App = () => {
  const [fullName, setfullName] = useState({
    fname: "",
    lName: "",
    email: "",
    phone: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;

    const { value, name } = event.target;

    setfullName((preValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lName: preValue.lName,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "lname") {
        return {
          fname: preValue.fname,
          lName: value,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "email") {
        return {
          fname: preValue.fname,
          lName: preValue.lName,
          email: value,
          phone: preValue.phone,
        };
      } else if (name === "phone") {
        return {
          fname: preValue.fname,
          lName: preValue.lName,
          email: preValue.email,
          phone: value,
        };
      }
    });
  };

  const onSubmits = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <h1>
            Hello <br />
            {fullName.fname} {fullName.lName}
          </h1>
          <p>{fullName.email}</p>
          <p>{fullName.phone}</p>
          <input
            type="text"
            name="fname"
            onChange={inputEvent}
            value={fullName.fname}
            placeholder="Enter Your First Name "
          />
          <br />
          <input
            type="text"
            name="lname"
            onChange={inputEvent}
            value={fullName.lName}
            placeholder="Enter Your Last Name "
          />
          <br />
          <input
            type="email"
            name="email"
            onChange={inputEvent}
            value={fullName.email}
            placeholder="Enter Your Email "
            autoComplete="off"
          />
          <br />
          <input
            type="number"
            name="phone"
            onChange={inputEvent}
            value={fullName.phone}
            placeholder="Enter Your Mobile Number "
          />
          <button type="submit">Submit Me  😀</button>
        </form>
      </div>
    </>
  );
};

export default App;*/

/*const App = () => {
  const [name, setName] = useState("");

  const [lastName, setlastName] = useState();

  const [fullName, setfullName] = useState();

  const [lastNamenew, setlastNameNew] = useState("");

  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const inputEventSec = (event) => {
    console.log(event.target.value);
    setlastName(event.target.value);
  };

  const onSubmits = (event) => {
    event.preventDefault();
    setfullName(name);
    setlastNameNew(lastName);
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <h1>
            Hello {fullName} {lastNamenew}
          </h1>
          <input
            type="text"
            onChange={inputEvent}
            value={name}
            placeholder="Enter Your First Name "
          />
          <br />
          <input
            type="text"
            onChange={inputEventSec}
            value={lastName}
            placeholder="Enter Your Last Name "
          />
          <button type="submit">Submit Me 😀</button>
        </form>
      </div>
    </>
  );
};

export default App;*/

/*const App = () => {
  const [name, setName] = useState("");
  const [fullName, setfullName] = useState();

  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const onsubmit = () => {
    setfullName(name);
  };

  return (
    <>
      <div>
        <h1>Hello {fullName}</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={inputEvent}
          value={name}
        />
        <button onClick={onsubmit}>Click Me 😀</button>
      </div>
    </>
  );
};

export default App;*/

/*const App = () => {
  const color = "#8e44ad";
  const [bg, setBg] = useState(color);

  let n = "Click Me";
  const [name, setName] = useState(n);

  const bgChange = () => {
    let newBg = "#34495e";
    let nName = "OUCH!! 😄";
    setBg(newBg);
    setName(nName);
  };

  const newbgChange = () => {
    let newBg = "black";
    let nName = "Yeah... 🤗";
    setBg(newBg);
    setName(nName);
  };

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onMouseMove={bgChange} onMouseLeave={newbgChange}>
          {name}
        </button>
      </div>
    </>
  );
};

export default App;*/

/*const App = () => {
  let ctime = new Date().toLocaleTimeString();
  const [curTime, setCtime] = useState(ctime);

  const UpdateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime, 1000);
  return (
    <>
      <h1>{curTime}</h1>
    </>
  );
};

export default App;*/

/*const App = () => {
  let time = new Date().toLocaleDateString();
  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    let newTime = new Date().toLocaleDateString();
    setCtime(newTime);
  };

  return (
    <>
      <h1>{ctime}</h1>
      <div className="btn">
        <button onClick={UpdateTime}>GET TIME</button>
      </div>
    </>
  );
};
export default App;*/

/*const App = () => {
  const state = useState();

  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <div className="btn">
        <button onClick={IncNum}> Click Button </button>
      </div>
    </>
  );
};
export default App;*/

/*const App = () => {
  return (
    <>
      <h1 className="heading_style">
        🎰 Welcome to
        <span style={{ fontWeight: "bold" }}> slot machine game</span> 🎰
      </h1>
      <div>
        <SlotM x="😄" y="😄" z="😄" />
        <hr />
        <SlotM x="😄" y="😄" z="🎅" />
        <hr />
        <SlotM x="🍰" y="🍰" z="🍰" />
        <hr />
      </div>
    </>
  );
};

export default App;*/

/*const favSeries = "The Originals";

//const Favs = () => {
//  if (favSeries === "DARK") {
//   return <Netflix />;
//  } else {
//    return <TheOriginals />;
// }
//};

//const App = () => (
// <>
//    <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
//    {/* <Favs />
//   {favSeries === "DARK" ? <Netflix /> : <TheOriginals />}
//  </>
//);

//export default App;

/*function App() {
  return (
    <>
      <ul>
        <li> {add(40, 4)}</li>
        <li> {sub(40, 4)}</li>
        <li> {mul(40, 4)}</li>
        <li> {div(40, 3)}</li>
      </ul>
    </>
  );
}

export default App;*/

/*function App() {
  let curDate = new Date(1994, 5, 31, 11);
  curDate = curDate.getHours();
  let greeting = "";
  const cssStyle = {};

  if (curDate >= 1 && curDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (curDate >= 12 && curDate < 19) {
    greeting = "Good Afternoon";
    cssStyle.color = "Yellow";
  } else {
    greeting = "Good Night";
    cssStyle.color = "black";
  }

  return (
    <>
      <div>
        <h1>
          Hello Sir, <span style={cssStyle}> {greeting}</span>
        </h1>
      </div>
    </>
  );
}

export default App;*/
