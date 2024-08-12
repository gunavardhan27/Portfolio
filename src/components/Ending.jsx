import { FaLinkedin, FaGithub } from 'react-icons/fa';
export default function Ending(){
    return (
        <div className='bg-black items-center justify-center text-cyan-200 mt-7 p-8'>
            <h1 className="text-3xl text-center text-yellow-400 font-bold mb-20">CONTACT ME</h1>
            <div className="sm:grid grid-rows-1 md:grid grid-cols-3 gap-7 mb-8">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl">
                        ADDRESS
                    </h1>
                    <p>Srinivasa Street,Marripalem</p>
                    <p>Visakhapatnam 530018</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl">PHONE NO</h1>
                    <p>+91 9014298669</p>
                    <p className="text-black">z</p>
                </div>
                <div className="flex flex-col  items-center justify-center">
                    <a className="text-2xl" href="mailto:bgunavardhan27@gmail.com">EMAIL</a>
                    <p>bgunavardhan27@gmail.com</p>
                    <p className="text-black">k</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center m-12">
                <a href="https://www.linkedin.com/in/guna-vardhan-557a06254/" className='mr-4' target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
                </a>
                 <a href="https://github.com/gunavardhan27" target="_blank" rel="noopener noreferrer">
                 <FaGithub size={30} />
                 </a>

            </div>
            <div className='flex items-center justify-center text-xl mt-10'>©️ 2024 Guna Vardhan Portfolio. All rights reserved</div>
        </div>
    )
}