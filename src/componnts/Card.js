import ThemeContext from "../ThemeContext";
import { useContext } from "react";


export default function Card({flag, name, population, region, capital}) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={theme ? "bg-white rounded-lg  overflow-hidden" : "bg-navDark rounded-lg overflow-hidden"}>
            <div>
                <img src={flag} alt="" className="h-[11rem] w-full "/>
            </div>
            <div className={theme ? "px-3 py-6 text-black" : "px-3 py-6 text-white"}>
                <h5 className="font-bold mb-4 text-[.9rem]">{name}</h5>
                <div className=" text-[.8rem] flex flex-col gap-2">
                    <p ><span className=" font-bold">Population</span>: {population.toLocaleString('en-US')}</p>
                    <p><span className="font-bold">Region</span>: {region}</p>
                    <p><span className="font-bold">Capital</span>: {capital}</p>
                </div>
            </div>
        </div>
    )
}