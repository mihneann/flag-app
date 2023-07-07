import { createContext, useState } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [searchValue, setSearchValue] = useState('')
    return (
        <SearchContext.Provider value={{searchValue, setSearchValue}}>{children}</SearchContext.Provider>
    )
}

export default SearchContext;