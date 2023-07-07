import searchIconBlack from '../images/icons8-search-30.png';
import searchIconWhite from '../images/icons8-search-white-30.png'
import downArrowBlack from '../images/icons8-expand-arrow-24.png';
import downArrowWhite from '../images/icons8-expand-arrow-white-24.png'
import upArrowBlack from '../images/icons8-collapse-arrow-24.png';
import upArrowWhite from '../images/icons8-collapse-arrow-white-24.png'
import ThemeContext from '../ThemeContext';
import { useState, useContext, useRef, useEffect } from 'react';
import SearchContext from '../SearchContext';
import FilterContext from '../FilterContext';



export default function Criteria() {
    let [toggleFilter, setToggleFilter] = useState(true);
    const { theme } = useContext(ThemeContext);
    const { setSearchValue } =  useContext(SearchContext);
    const {region, setRegion} = useContext(FilterContext);
    const filterValue = useRef();
    const currenRegion = useRef('');
    useEffect(() => {
        currenRegion.current = region
    }, [region])
    function selectRegion(e) {
        if (currenRegion.current === e.target.dataset.region){
            setRegion('');
        } else {
            setRegion(e.target.dataset.region);
        }

        console.log(e.target.dataset.region, currenRegion.current)
    }
    return (
        <div className='flex items-start w-10/12 
        max-w-[85rem] justify-between flex-col gap-10 mx-auto mb-10 md:flex-row'>
            <div className={theme ? 'bg-white py-4  flex  items-center gap-5 max-w-[25rem] w-full pl-6 rounded-md' : 'bg-navDark py-4  flex items-center gap-5 max-w-[25rem] w-full pl-6 rounded-md'} >
                <img src={theme ? searchIconBlack : searchIconWhite} alt="" className=' w-5'/>
                <input type="text" placeholder="Search for a country..." className={theme ? 'outline-none block w-full ' : ' outline-none block w-full bg-navDark text-white placeholder:text-white'} onChange={(e) => setSearchValue(e.target.value)}/>
            </div>
            <div>
                <div className={theme ? 'bg-white flex items-center justify-between w-[13rem] p-4 cursor-pointer rounded-md' : 'bg-navDark text-white flex items-center justify-between w-[13rem] p-4 cursor-pointer rounded-md'} onClick={() => {setToggleFilter(actualState => !actualState)}}>
                    <span>{region === '' ? 'Filter by Region' : region }</span>
                    <img src={toggleFilter ? (theme ? downArrowBlack : downArrowWhite) : (theme ? upArrowBlack : upArrowWhite)} alt="" className=' hover:cursor-pointer'/>
                </div>
                <div ref={filterValue} className={toggleFilter ? 'hidden' : theme ? 'p-4 mt-1 bg-white absolute w-[13rem] ' : 'p-4 mt-1  bg-navDark text-white absolute w-[13rem]'}>
                    <ul className='flex flex-col gap-2'>
                        <li className=' cursor-pointer hover:font-bold' data-region="Africa"  onClick={selectRegion}>Africa</li>
                        <li className=' cursor-pointer hover:font-bold' data-region="Americas"  onClick={selectRegion}>Americas</li>
                        <li className=' cursor-pointer hover:font-bold' data-region="Asia"  onClick={selectRegion}>Asia</li>
                        <li className=' cursor-pointer hover:font-bold' data-region="Europe"  onClick={selectRegion}>Europe</li>
                        <li className=' cursor-pointer hover:font-bold' data-region="Oceania" onClick={selectRegion}>Oceania</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}