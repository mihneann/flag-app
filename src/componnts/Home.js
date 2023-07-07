import { SearchProvider } from "../SearchContext"
import { FilterProvider } from "../FilterContext"
import Criteria from "./Criteria"
import CountriesCards from "./CountriesCards"


export default function Home() {
    return (
        <SearchProvider>
            <FilterProvider>
                <Criteria />
                <CountriesCards/>
            </FilterProvider>
        </SearchProvider>
    )
}