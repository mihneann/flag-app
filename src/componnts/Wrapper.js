import Header from "./Header";
import Home from "./Home";
import Country from "./Country";
import ThemeContext from "../ThemeContext";
import { useContext } from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route >
            <Route path="/" element={<Home/>}/>
            <Route path=":countryCode" element={<Country/>}/>
        </Route>
    )
)


export default function Wrapper() {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={theme ? 'min-h-screen  bg-bgLight font-nurito' : 'min-h-screen w-full bg-bgDark font-nurito'}>
            <Header />
            <RouterProvider router={router}/>
        </div>
    )
}