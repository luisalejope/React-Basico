import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { LoginForm } from "../../components/login/LoginForm";
import { useForm } from "../../hooks/useForm";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const [values, handleInputChange] = useForm({
    name: "",
  });

  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    if (values.name !== "") {
      const lastPath = localStorage.getItem("lastPath") || "/";
      const payload = { name: values.name };
      dispatch({
        type: types.login,
        payload,
      });
      history.replace(lastPath);
    } else {
      window.alert("Ingresa un nombre")
    }
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <LoginForm values={values} handleInputChange={handleInputChange} />
      <div class="d-grid mt-4">
        <button className="btn btn-success" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};
