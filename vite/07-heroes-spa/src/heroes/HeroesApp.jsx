import { Outlet } from "react-router-dom"
import {Navbar} from '../ui'
export const HeroesApp = () => {
  return (
    <>
        <Navbar />
        <div className="container mt-3">
          <Outlet />
        </div>
    </>
  )
}

