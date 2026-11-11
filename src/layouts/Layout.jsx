import { Fragment } from "react/jsx-runtime"
import Header from "../components/Header"
import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <div className="app">
            <Header />
            <>
                <Outlet />
            </>
        </div>
    )
}