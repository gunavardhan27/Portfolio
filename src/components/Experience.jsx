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
        description:{
                first:'Developed and maintained graphene-django based applications',
                second:'Created and managed models for data handling and integration',
                third:'Designed and implemented graphql schemas mutations and queries',
                fourth:'implemented token-based and session based authentication and also implemented authorization to manage user-permissions'
        }
    }
    ]
    return (
        <div id='Experience'>
            <h1 className='mt-12 flex items-center justify-center text-3xl font-bold dark:text-yellow-50'>MY EXPERIENCE</h1>
        <div className='m-10 p-4 flex flex-col items-center justify-between'>
            {data.map(exp=>(
                <div className='flex flex-col  md:flex md:flex-row justify-between items-center w-full
                 bg-violet-200 text-gray-700 py-6 px-4 rounded-lg dark:bg-slate-600 dark:text-white'>
                    <div className='flex basis-1/2'>{exp.info.started} - {'present'}</div>
                    <div className='flex basis-1/2 flex-col items-start justify-around w-full gap-3'>
                        <p className='text-2xl font-bold'>{exp.info.role} {exp.info.name}</p>
                        <p>{exp.description.first}</p>
                        <p>{exp.description.second}</p>
                        <p>{exp.description.third}</p>
                        <p>{exp.description.fourth}</p>
                    </div>
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
                <div className="dark:bg-white flex flex-col gap-6 items-center justify-center mb-20 group relative shadow-lg
                 dark:text-gray-600 rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[280px] lg:w-[380px] overflow-hidden cursor-pointer
                 bg-violet-200 text-white" onClick={handleClick}>
                    <p className='flex items-center justify-center text-3xl font-extrabold'>{front.name}</p>
                </div>
                <div className='dark:bg-white flex flex-col gap-6 items-center justify-center mb-20 group relative shadow-lg
                 dark:text-gray-600 rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[280px] lg:w-[380px] overflow-hidden cursor-pointer
                 bg-violet-200 text-white' onClick={handleClick}>
                    <div className='flex flex-col gap-2 justify-center items-center flex-wrap'>
                        <h1> * {back.first}</h1>
                        <h1> * {back.second}</h1>
                        <h1> * {back.third}</h1>
                    </div>
                </div>
    
            </ReactCardFlip>
        )
    }