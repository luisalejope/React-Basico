import { useState } from "react"
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small"

export const Memorize = () => {

    const {counter, increase} = useCounter(10)

    const [show, setShow] = useState(true)

  return (
    <>
        <h1>Counter <Small value={counter}/> </h1>
        <hr />
        <button className="btn btn-primary" onClick={() => increase()}>
            +1
        </button>

        <button onClick={()=>setShow(!show)} className="btn btn-outline-primary" >Show/Hide {JSON.stringify(show)}</button>
    </>
  )
}
