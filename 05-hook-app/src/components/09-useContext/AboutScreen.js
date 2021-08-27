import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = ()=>{
      setUser({})
  }
  return (
    <>
      <h1>AboutScreen</h1>
      <hr />
      <pre className="container">{JSON.stringify(user, null, 3)}</pre>
      <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
    </>
  );
};
