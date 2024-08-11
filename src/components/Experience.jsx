import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
export default function Experience(){
    const data = [{
        info:{
            name:'Vivada Tech',
            role:'Full Stack Intern',
            started:'May 2024',
            ended:''
        },
        description:''
    }
    ]
    return (
        <div className='mx-10 p-8 bg-blue-500 m-20'>
        <h1>My Projects</h1>
        <div className='grid grid-cols-2 gap-8 p-8'>
            {data.map(project=>(
                <div className='flex justify-center items-center'>
                <FlipCard front={project.info} back={project.description} />
                </div>
            ))}
        </div>
        </div>
    )
}






function FlipCard({front,back}){
    const [isFlipped,setFlipped] = useState(false)
    const handleClick = ()=>{
            setFlipped(!isFlipped)
        }
        return (
            <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection='horizontal'>
                <div className='card-front w-[380px] h-[270px] bg-slate-400 border-cyan-50
                flex justify-center items-center' onClick={handleClick}>
                    {front.name}
                </div>
                <div className='card-back w-[380px] h-[270px] bg-slate-400 border-cyan-50
                flex justify-center items-center' onClick={handleClick}>
                    {back}
                </div>
    
            </ReactCardFlip>
        )
    }