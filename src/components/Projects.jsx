import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
export default function Projects(){
    const data = [{
        title:'Stud Res',
        info:'',
    },
    {
        title:'CRM',
        info:'crm'
    },
    {
        title:'Task Manager',
        info:''
    },
    {
        title:'Contacts',
        info:''
    },
    {
        title:'Cart',
        info:''
    }
    ]
    return (
        <div>

        <h1 className='flex items-center justify-center text-3xl font-bold dark:text-yellow-50 m-5'>My Projects</h1>
        <div className='mx-10 p-8 bg-blue-500'>
        <div className='sm:flex flex-col justify-between items-center md:grid grid-cols-2 gap-8 p-8'>
            {data.map(project=>(
                <div className='flex justify-center items-center m-3'>
                <FlipCard front={project.title} back={project.info} />
                </div>
            ))}
        </div>
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
                <div className='card-front w-[380px] h-[270px] bg-slate-400 border-cyan-50 rounded-xl
                flex justify-center items-center' onClick={handleClick}>
                    {front}
                </div>
                <div className='card-back w-[380px] h-[270px] bg-slate-400 border-cyan-50 rounded-xl
                flex justify-center items-center' onClick={handleClick}>
                    {back}
                </div>
    
            </ReactCardFlip>
        )
    }