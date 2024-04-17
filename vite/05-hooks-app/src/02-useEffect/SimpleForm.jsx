// import PropTypes from 'prop-types'

import { useEffect, useState } from "react"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        userName: '',
        email: ''
    })

    const { userName, email } = formState

    const handleInputs = (event) => {
        const { name, value } = event.target

        const newValues = {
            ...formState,
            [name]: value
        }

        setFormState(newValues)
    }

    useEffect(() => {
        console.log('sapo')

    }, [formState])


    return (
        <>
            <h1>Simple form</h1>
            <hr />
            <div className="container">
                <input type="text" className="form-control" placeholder="User Name" name="userName" value={userName} onChange={handleInputs} />
                <input type="email" className="form-control mt-3" placeholder="email@email.com" name="email" value={email} onChange={handleInputs} />
            </div>
        </>
    )
}

SimpleForm.propTypes = {}
