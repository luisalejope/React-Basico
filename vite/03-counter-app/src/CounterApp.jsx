import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value)

    const handleAdd = () => setCounter(counter + 1)
    

    const handleSubstract = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    const handleReset = () => setCounter(value)

    return (
        <>
            <h1>CounterAPP</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>reset</button>
            <button onClick={handleSubstract}>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}