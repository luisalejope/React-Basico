import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

  const {user, setUser} = useContext(UserContext);

  

  return (
    <>
        <h1>LoginPage</h1>
        <hr />

        <pre>
          {JSON.stringify(user)}
        </pre>

        <button className="btn btn-primary" onClick={()=>setUser({id: 2, name: 'Luis', email: 'luis@mail.com'})}>Establecer Usuario</button>
    </>
  )
}