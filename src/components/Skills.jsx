import {ReactCardFlip} from "react-card-flip"
import {RiReactjsLine,RiTailwindCssFill} from 'react-icons/ri'
import {Fragment, useState} from 'react'
import { DiDjango } from "react-icons/di";
import { SiApollographql,SiMongodb,SiNovu } from "react-icons/si";
import { FaDocker,FaNode,FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import Skill from "./Skill";
export default function Skills(){
    const skills = [
        {name:'React',percentage:'70'},
        {name:'Django',percentage:'85'},
        {name:'node',percentage:'60'},
        {name:'Docker',percentage:'70'},
        {name:'Graphql-Api',percentage:'80'},
        {name:'tailwind css',percentage:'65'},
        {name:'DSA',percentage:'80'},
        {name:'python',percentage:'90'},
        {name:'C++',percentage:'80'},
        {name:'Novu',percentage:'60'}
    ]

    const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }
    return (
        <div id="Skills" className=""> 
            <h1 className='flex items-start justify-center text-3xl font-bold dark:text-yellow-50 m-20'>MY SKILLS</h1>
        {/*<div className='text-white dark:text-black mx-10 p-8 m-20'>
        <div className="flex flex-col justify-around items-center md:grid md:grid-cols-4 md:p-8 md:gap-7">
            {skills.map(skill=>(
                <Skill skill={skill}/>
            ))}
        </div>
        </div>*/}
        <div className="flex flex-row items-center justify-around w-full mb-20 gap-8 flex-wrap">
            <RiReactjsLine className="text-8xl text-cyan-800 border-4 border-neutral-800 p-2 rounded-lg" />
            <DiDjango className="text-8xl text-green-800 border-4 border-neutral-800 p-2 rounded-lg" />
            <SiApollographql className="text-8xl text-pink-600 border-4 border-neutral-800 p-2 rounded-lg"/>
            <FaDocker className="text-8xl text-blue-800 border-4 border-neutral-800 p-2 rounded-lg" />
            <FaNode className="text-8xl text-green-800 border-4 border-neutral-800 p-2 rounded-lg" />
            <SiMongodb className="text-8xl text-green-800 border-4 border-neutral-800 p-2 rounded-lg" />
            <BiLogoPostgresql className="text-8xl text-cyan-700 border-4 border-neutral-800 p-4 rounded-lg" />
            <BiLogoTailwindCss className="text-8xl text-cyan-600 border-4 border-neutral-800 p-4 rounded-lg" />
            <SiNovu className="text-8xl text-pink-500 border-4 border-neutral-800 p-4 rounded-lg" />
            <FaPython className="text-8xl border-4 border-neutral-800 p-4 rounded-lg" />
        </div>
        </div>
    )
}