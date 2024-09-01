import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
export default function Projects(){
    const data = [{
        title:'Stud Res',
        info:{
        first:' Developed a full-stack web application using with Django.',
        second:'Built a website specialized for students to get access to their attendance, results and also receive notifications',
         third:'Admin panel is also provided for staff members'
        }
    },
    {
        title:'CRM',
        info:{
            first:'Customer Relationship Management Website',
            second:'Developed to streamline sales, marketing and customer support activities',
            third:'Admins can monitor customers and ordersso there wont be any discrepancy',
        }
    },
    {
        title:'Task Manager',
        info:{
            first:'Built a task manager app using React and Tailwind CSS', 
            second:'The app allows users to create tasks and organize them with subtasks.', 
            third:'It provides a streamlined interface for managing task hierarchies efficiently.'
        }
    },
    {
        title:'Contacts',
        info:{
            first:'The user created a simple backend for a contacts application using Express.js.',
            second:'This backend enables authenticated users to create, update, and delete accounts.',
            third:'The system ensures secure management of data using mongodb.',
        }
    },
    {
        title:'Cart',
        info:{
            first:'developed a mini cart application with features for adding and removing items, and placing orders.',
            second:'The application is connected to Firebase for backend functionality',
            third:'Providing real-time data management.'
        }
    },
    {
        title:'authenticator',
        info:{
            first:' built a Django-GraphQL application that handles user authentication, assigns user roles, and enforces authorization',
            second:'This setup ensures secure access control based on user roles.',
            third:'The application effectively combines authentication and authorization to manage user permissions'
        }
    }
    ]
    return (
        <div id="Projects">

        <h1 className='flex mb-8 items-center justify-center text-3xl font-bold dark:text-yellow-50'>MY PROJECTS</h1>
        <div className='mx-10 p-8 dark:text-white'>
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
            flipDirection='vertical'>
                <div 
                className="front dark:bg-slate-600 flex flex-col gap-6 items-center justify-center mb-20 group relative shadow-lg
                 text-gray-600 rounded-xl px-6 py-8 min-w-[300px] sm:w-[300px]  h-[280px] md:w-[380px] overflow-hidden cursor-pointer
                 bg-violet-200 dark:text-white flex-wrap"
                onClick={handleClick}>
                    <p className='flex items-center justify-center text:md md:text-3xl font-extrabold'>{front}</p>
                </div>

                <div className='back dark:bg-slate-600 flex flex-col gap-6 items-center justify-center mb-20 group relative shadow-lg
                  text-gray-600 rounded-xl px-6 py-8 sm:w-[300px] h-[280px] md:w-[380px] min-w-[300px] overflow-hidden cursor-pointer
                 bg-violet-200 dark:text-white flex-wrap' onClick={handleClick}>
                    <div className='w-full p-2 flex flex-col gap-2 justify-center items-center'>
                        <h1> * {back.first}</h1>
                        <h1> * {back.second}</h1>
                        <h1> * {back.third}</h1>
                    </div>
                </div>
    
            </ReactCardFlip>
        )
    }