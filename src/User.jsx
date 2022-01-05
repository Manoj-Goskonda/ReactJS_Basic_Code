import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

/*const User = ({ match }) => {
  return <h1>Hello, I am A User {match.params.fname} Page.</h1>;
};*/

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  const history = useHistory();
  console.log(history);

  return (
    <>
      <h1>
        user {fname} {lname} page
      </h1>
      <p>My current location {location.pathname}</p>
      {location.pathname === `user/manoj/goskonda` ? (
        <button onClick={() => history.goBack()}>Click Me</button>
      ) : null}
    </>
  );
};

export default User;
