import data from '../data.json';
import Card from './Card';
import SearchContext from '../SearchContext';
import FilterContext from '../FilterContext';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CountriesCards() {
    const { searchValue } = useContext(SearchContext);
    const  [ countries, setCountries ] = useState([]);
    const { region } = useContext(FilterContext);
    useEffect(() => {
        setCountries(data);
    }, [])

    return (
        <div className=' w-10/12 max-w-[85rem] mx-auto grid xl:grid-cols-4 lg:grid-cols-3 gap-[4.5rem] md:grid-cols-2 sm:grid-cols-2 phone:grid-cols-2'>
            {countries.filter((unfilteredCountries) => {return (region==='' ? true : unfilteredCountries.region===region)}).filter((country) => country.name.toLowerCase().includes(searchValue.toLowerCase())).map((filteredCountry) => {
                return (
                    <Link to={`${filteredCountry.alpha2Code}`}>
                        <Card key={filteredCountry.alpha2Code} flag={filteredCountry.flags.png} name={filteredCountry.name} population={filteredCountry.population} region={filteredCountry.region} capital={filteredCountry.capital}/>
                    </Link>
                )
            })}
        </div>
    )
}