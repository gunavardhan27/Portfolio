import {NavLink,Router} from 'react-router-dom'
import {Menu,X} from 'lucide-react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
export default function Header(){
    const data = [
        'Skills',
        'Experience',
        'Achievements',
        'Projects',
        'Profiles',
        'Contact'

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
        

        <div className="dark:bg-blue-950 w-full h-18 bg-blue-400 sticky flex flex-row p-4 text-white font-sans z-[20]">
            <h1 className="flex w-full basis-1/2 text-2xl font-bold text-justify">Guna Vardhan</h1>
            <nav className="hidden md:text-md md:font-semibold md:flex w-full basis-1/2 flex-row justify-around">
            {data.map(item=>(
                <div className="text-white hover:underline hover:text-green-400 hover:text-xl" key={item}>
                    <NavLink to={`/${item}`}>{item}</NavLink>
                </div>
            ))}
           </nav>
           <button className='flex w-full justify-end  md:hidden' onClick={toggleMenu}>{isOpen?<X/>:<Menu />}</button>
           {isOpen &&<nav className='flex flex-col justify-end items-end md:hidden'>
            {data.map(item=>(
                <div className="text-white hover:underline hover:text-green-400 hover:text-xl" key={item}>
                    <NavLink to={`/${item}`}>{item}</NavLink>
                </div>
            ))}
           </nav>}
           
    </div>
    )
}