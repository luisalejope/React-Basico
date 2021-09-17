import React from 'react'


export const LoginForm = ({values, handleInputChange,}) => {



    return (
        <div className="formContainer">
            <label>Ingresa tu nombre</label>
            <input type="text" name="name" value={values.name} onChange={handleInputChange} className="form-control"/>
        </div>
    )
}
