import {NavLink} from "react-router";

export default function Header() {
    return (
        <header className="py-4 w-full shadow">
            <nav className="flex items-center justify-center gap-8">
                <NavLink to="/" end className={({isActive}) => (isActive ? "font-bold" : "")}>
                    Home
                </NavLink>
                <NavLink to="/game" end className={({isActive}) => (isActive ? "font-bold" : "")}>
                    Tic Tac Toe
                </NavLink>
                <NavLink to="/clicker" end className={({isActive}) => (isActive ? "font-bold" : "")}>
                    Clicker
                </NavLink>
            </nav>
        </header>
    )
}