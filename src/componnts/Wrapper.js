import Header from "./Header";
import Home from "./Home";
import Country from "./Country";
import  Root  from "./Root";
import ThemeContext from "../ThemeContext";
import { useContext } from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/flag-app" element={<Root />} errorElement={<h1>Error</h1>}>
            <Route path="/flag-app/"  element={<Home/>}/>
            <Route path=":countryCode" element={<Country/>}/>
        </Route>
    )
)


export default function Wrapper() {
    const {theme} = useContext(ThemeContext)
    return (
        <div >
            <RouterProvider router={router}/>
        </div>
    )
}