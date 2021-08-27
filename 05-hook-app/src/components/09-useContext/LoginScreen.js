import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {

const {setUser} = useContext(UserContext)

    const handleLogin = ()=>{
        setUser({
            id: 123,
            name: 'Luis'
        })
    }

  return (
    <>
    
      <h1>LoginScreen</h1>
      <hr />

      <button className="btn btn-success" onClick={handleLogin}>Login</button>
    </>
  );
};
