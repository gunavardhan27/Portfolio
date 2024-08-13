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
        <div className='mx-10 p-8 bg-[#68D2E8]'>
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
                <div 
                className="bg-white flex flex-col gap-6 items-center justify-center mb-20 group relative shadow-lg
                 text-gray-600 rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[280px] lg:w-[380px] overflow-hidden cursor-pointer"
                onClick={handleClick}>
                    <p className='flex items-center justify-center text-3xl font-extrabold'>{front}</p>
                </div>
                <div className='bg-white card-back w-[380px] h-[270px] shadow-lg border-cyan-50 rounded-xl
                flex justify-center items-center' onClick={handleClick}>
                    {back}
                </div>
    
            </ReactCardFlip>
        )
    }