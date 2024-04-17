// import PropTypes from 'prop-types'

import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const { counter, increase, decrease, reset } = useCounter()

    return (
        <>
            <h1>Counter with hook: {counter} </h1>

            <hr />

            <button className="btn btn-primary" onClick={() => increase()}>+1</button>
            <button className="btn btn-primary" onClick={() => reset()}>reset</button>
            <button className="btn btn-primary" onClick={() => decrease()}>-1</button>
        </>
    )
}

CounterWithCustomHook.propTypes = {}
