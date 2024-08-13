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
        <div className='mx-10 bg-[#68D2E8] p-8 m-20'>
        <h1 className="text-4xl font-extrabold flex items-center justify-center">MY SKILLS</h1>
        <div className="sm:flex flex-cols justify-around items-center md:grid grid-cols-4 p-8 gap-7">
            {skills.map(skill=>(
                <Skill skill={skill}/>
            ))}
        </div>
        </div>
    )
}