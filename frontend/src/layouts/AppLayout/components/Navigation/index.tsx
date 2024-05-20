import { NavLink } from "react-router-dom"

export const AppNavigation = () => {
    return <nav className="app-main-nav-bar p-2 h-screen w-[200px]">
        <ul className="flex flex-col gap-7 h-full">
            <li className=""><NavLink to="home" className="app-nav-link">Home</NavLink></li>
            <li><NavLink to="chat-bot" className="app-nav-link">Chat with Meli</NavLink></li>
        </ul>

    </nav>
}