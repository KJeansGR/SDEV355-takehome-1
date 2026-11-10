import Header from "../components/Header"
import { Outlet } from "react-router"

export default function Layout() {
    return (
        <div className="app">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}