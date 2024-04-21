import { Outlet } from "react-router-dom"
import {Navbar} from '../ui'
export const HeroesApp = () => {
  return (
    <>
        <Navbar />
        <h1>Heroes App</h1>
        <Outlet />
    </>
  )
}

