import moonIcon from '../images/icons8-moon-30.png';
import sunIocn from '../images/icons8-sun-30.png';
import ThemeContext from '../ThemeContext';
import { useContext } from 'react';

export default function Header() {
    const {theme, setTheme} = useContext(ThemeContext)
    function toogleTheme() {
        setTheme(actualTheme => !actualTheme);
    }

    return (
        <header className={theme ? 'bg-navLight phone:py-7 md:py-4 py-8  text-xs phone:text-xl text-black mb-10  shadow-sm': 'bg-navDark phone:py-7  md:py-4 py-8 text-xs phone:text-xl text-white mb-10 shadow-sm'}>
            <nav className='flex  items-center justify-between w-10/12 mx-auto max-w-[85rem]'>
                <h1 className='text-sm phone:text-2xl font-bold'>Where in the world?</h1>
                <div className='flex items-center gap-2 cursor-pointer select-none' onClick={toogleTheme}>
                    <img src={theme ? moonIcon : sunIocn} alt="" className=' w-5'/>
                    <span className='font-bold'>{theme ? 'Dark' : 'Light'} Mode</span>
                </div>
            </nav>
        </header>
    )
}