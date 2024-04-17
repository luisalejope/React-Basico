// import PropTypes from 'prop-types'

import { useForm } from "../hooks/useForm"


export const FormWithCustomHook = () => {

  const { userName, email, password, onInputChange, onResetForm } = useForm({
    userName: '',
    email: '',
    password: ''
  })


  return (
    <>
      <h1>Form With Custom Hook</h1>
      <hr />
      <div className="container">
        <input type="text" className="form-control" placeholder="User Name" name="userName" value={userName} onChange={onInputChange} />
        <input type="email" className="form-control mt-3" placeholder="email@email.com" name="email" value={email} onChange={onInputChange} />
        <input type="password" className="form-control mt-3" placeholder="Password" name="password" value={password} onChange={onInputChange} />

        <button className="btn btn-primary mt-3" onClick={onResetForm}>Reset Form</button>
      </div>
    </>
  )
}

FormWithCustomHook.propTypes = {}
