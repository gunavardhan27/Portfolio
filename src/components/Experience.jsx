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
                third:'Designed and implemented graphql schemas mutations and queries'
        }
    }
    ]
    return (
        <div>
            <h1 className='mt-12 flex items-center justify-center text-3xl font-bold dark:text-yellow-50'>MY EXPERIENCE</h1>
        <div className='mx-10 mt-2 p-8 dark:bg-[#818FB4] dark:text-white bg-[#68D2E8] m-20'>
        <div className='grid grid-cols-2 gap-8 p-8'>
            {data.map(project=>(
                <div className='flex justify-center items-center '>
                <FlipCard front={project.info} back={project.description} />
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
                <div className="bg-white flex flex-col gap-6 items-center justify-center mb-20 group relative shadow-lg
                 text-gray-600 rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[280px] lg:w-[380px] overflow-hidden cursor-pointer
                 dark:bg-gray-600 dark:text-white" onClick={handleClick}>
                    <p className='flex items-center justify-center text-3xl font-extrabold'>{front.name}</p>
                </div>
                <div className='p-3 card-back w-[380px] h-[270px] bg-white border-cyan-50 rounded-xl
                flex justify-center items-center dark:bg-gray-600' onClick={handleClick}>
                    <div className='flex flex-col gap-2 justify-center items-center flex-wrap'>
                        <h1> * {back.first}</h1>
                        <h1> * {back.second}</h1>
                        <h1> * {back.third}</h1>
                    </div>
                </div>
    
            </ReactCardFlip>
        )
    }