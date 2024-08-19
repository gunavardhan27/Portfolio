import {NavLink,Router} from 'react-router-dom'
import {Menu,X} from 'lucide-react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-scroll'
export default function Header(){
    const data = [
        'Skills',
        'Experience',
        'Projects',
        'Profiles',
        'Contact',
    ]
    const val = useSelector(state=>state.data.toggle)
    if(val){
        console.log('Dark')
    }
    else{
        console.log('Light')
    }
    const [isOpen,set] = useState(false)
    const toggleMenu = ()=>{
        set(!isOpen)
    }
    return (
        <div className=" w-full top-0 sticky flex flex-row p-4 text-white font-sans z-[90]">
            <h1 className="text-gray-700 dark:text-white flex w-full basis-1/2 text-2xl font-bold text-justify">Guna Vardhan</h1>
            <nav className="hidden md:text-md md:font-semibold md:flex w-[80%] basis-1/2 flex-row justify-around">
            {data.map(item=>(
                <div className="dark:text-white text-gray-700 hover:underline hover:text-green-400 hover:text-xl" key={item}>
                    <Link activeClass='active' to={item} spy={true} smooth={true} offset={-100} duration={500}>{item}</Link>
                </div>
            ))}
           </nav>
           <button className='flex w-full justify-end  md:hidden' onClick={toggleMenu}>{isOpen?<X/>:<Menu />}</button>
           {isOpen &&<nav className='flex flex-col items-end justify-end md:hidden'>
            {data.map(item=>(
                <div className="dark:text-white text-gray-700 hover:underline-offset-4 hover:text-green-400 hover:text-xl" key={item}>
                    <NavLink to={`/${item}`}>{item}</NavLink>
                </div>
            ))}
           </nav>}
           
    </div>
    )
}