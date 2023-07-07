import { createContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
    const [region, setRegion] = useState('');
    return (
        <FilterContext.Provider value={{region, setRegion}}>{children}</FilterContext.Provider>
    )
}

export default FilterContext;