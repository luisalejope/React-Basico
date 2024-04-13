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
            <button aria-label='btn-add' onClick={handleAdd}>+1</button>
            <button aria-label='btn-reset' onClick={handleReset}>reset</button>
            <button aria-label='btn-rest' onClick={handleSubstract}>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}