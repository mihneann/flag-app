import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import ThemeContext from "../ThemeContext";
import blackArrow from '../images/icons8-left-arrow-black-24.png';
import whiteArrow from '../images/icons8-left-arrow-white-24.png';
import data from '../data.json'


export default function Country() {
    const [countryDetails, setCountryDetails] = useState({})
    const {countryCode} = useParams()
    const { theme } = useContext(ThemeContext)
    useEffect(() => {
        for(let item of data) {
            if (item.alpha2Code === countryCode) {
                setCountryDetails(item);
                
            }
        }
    }, [])

    

    let {name, flag, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages} = countryDetails
    
    return (Object.keys(countryDetails).length === 0 ? <div></div> :  <div className="w-10/12 max-w-[85rem] mx-auto">
    <Link to="/">
        <div className={theme ? 'flex items-center  justify-center  gap-3 w-[7rem]  py-1 shadow-[0px_0px_2px_2px_rgba(133,133,133,1)]  mb-[6rem] mt-[5rem]' : 'flex items-center  justify-center  gap-3 w-[7rem]  py-1 shadow-[0px_0px_2px_2px_rgba(21,34,46,1)] text-white mt-[5rem] mb-[6rem]'}>
            <img src={theme ? blackArrow : whiteArrow} alt="" />
            <p>Back</p>
        </div>
    </Link>
    <div className="flex lg:items-center lg:flex-row gap-[5rem] flex-col">
        <section className=" flex-1">
            <img src={flag} alt="" className=" w-full"/>
        </section>
        <section className="flex-1">
            <h1 className={theme ? "text-[1.8rem] font-bold mb-10" : "text-[1.8rem] font-bold text-white mb-10"}>{name}</h1>
            <div className={theme ? "flex flex-col  gap-10 lg:flex-row lg:justify-between" : "flex flex-col  gap-10 lg:flex-row lg:justify-between text-white"}>
                <div>
                    <p><span className=" font-bold">Native Name: </span>  {nativeName}</p>
                    <p><span className=" font-bold">Population: </span>{population.toLocaleString('en-US')}</p>
                    <p><span className=" font-bold">Region: </span>{region}</p>
                    <p><span className=" font-bold">Sub Region: </span>{subregion}</p>
                    <p><span className=" font-bold">Capital: </span>{capital}</p>
                </div>
                <div>
                    <p><span className=" font-bold">Top Level Domain: </span>{topLevelDomain}</p>
                    <p><span className=" font-bold">Currencies: </span>{currencies[0].code}</p>
                    <p><span className=" font-bold">Languages: </span> {languages.map( lang => lang.name).join(',')}</p>
                </div>
              
            </div>
            <section className={theme ? "flex gap-3 mt-[5rem] items-center" : "flex gap-3 mt-[5rem] items-center text-white"}>
            <p>Border Countries: </p>
            <ul className="flex gap-2 ">
                {!(countryDetails.hasOwnProperty('borders')) ? <li>Dosen't have borders</li> : countryDetails.borders.map((border) => {
                    return <li className={theme ? "border-[1px] text-sm border-slate-200 px-2 py-1 bg-white" : "text-sm  px-2 py-1 bg-navDark"}>{border}</li>
                })}
            </ul>
        </section>
        </section>
       
    </div>
</div>)
}