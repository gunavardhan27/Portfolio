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
            <h1 className="text-gray-700 dark:text-white flex w-full basis-1/2 text-3xl font-bold text-justify">Guna Vardhan</h1>
            <nav className="hidden md:text-md md:font-semibold md:flex w-[80%] basis-1/2 flex-row justify-around">
            {data.map(item=>(
                <div className="dark:text-white text-gray-700 text-xl hover:font-extrabold hover:text-blue-900" key={item}>
                    <Link activeClass='active' to={item} spy={true} smooth={true} offset={-100} duration={500}>{item}</Link>
                </div>
            ))}
           </nav>
           <div className={`text-white dark:text-gray-700 
             w-[50%]  flex flex-row items-start justify-end gap-3 z-100 fixed ${isOpen ? 'top-0 right-0': 'top-5 right-3'}`}>
           <div className={`w-[70%] flex flex-row items-start justify-end gap-2 h-screen py-3 ${isOpen && 'bg-gray-700 md:hidden text-white rounded-lg'}`}>
           {isOpen &&<nav className='flex flex-col items-end justify-start md:hidden gap-3  p-2 rounded-md '>
            {data.map(item=>(
                <div className=" hover:underline-offset-4 hover:text" key={item}>
                    <NavLink to={`/${item}`}>{item}</NavLink>
                </div>
            ))}
           </nav>}
           <button className={`flex justify-end md:hidden text-red-700 text-xl dark:text-blue-500`} onClick={toggleMenu}>{isOpen?<X/>:<Menu />}</button>
           </div>
           </div>
    </div>
    )
}