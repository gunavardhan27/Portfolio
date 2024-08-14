import {ReactCardFlip} from "react-card-flip"
import {Fragment, useState} from 'react'
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
        <div>
            <h1 className='flex items-center justify-center text-3xl font-bold dark:text-yellow-50'>MY SKILLS</h1>
        <div className='dark:bg-[#818FB4] dark:text-white mx-10 bg-[#68D2E8] p-8 m-20'>
        <div className="sm:flex flex-cols justify-around items-center md:grid grid-cols-4 p-8 gap-7">
            {skills.map(skill=>(
                <Skill skill={skill}/>
            ))}
        </div>
        </div>
        </div>
    )
}