import { Outlet } from "react-router-dom";
import Header from "./Header";
import ThemeContext from "../ThemeContext";
import { useContext } from "react";

export default function Root() {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={theme ? 'min-h-screen  bg-bgLight font-nurito' : 'min-h-screen w-full bg-bgDark font-nurito'}>
             <Header />
             <Outlet/>
        </div>
    )
}