import { useState } from "react"


export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increase = (value = 1) => {
        setCounter(current => current + value)
    }

    const decrease = (value = 1) => {
        if (counter === 0) return;
        setCounter(current => current - value)
    }

    const reset = () => {
        setCounter(initialValue)
    }

    return {
        counter,
        increase,
        reset,
        decrease,
    }
}
