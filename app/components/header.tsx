import {NavLink} from "react-router";
import {useSelector} from "react-redux";
import type {RootState} from "~/store";

export default function Header() {
    const count = useSelector((state: RootState) => state.clicker.value);

    return (
        <header className="py-4 w-full shadow px-4">
            <div className="flex ml-auto justify-between w-3/5">
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
                <div>
                    Clicker State: {count}
                </div>
            </div>
        </header>
    )
}