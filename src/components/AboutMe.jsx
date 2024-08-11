import mi from '../assets/pic.jpg'
import {TypeAnimation} from 'react-type-animation'
import { useSelector } from 'react-redux'
import store from '../store/Mode'
import { modeAction } from '../store/Mode'
export default function AboutMe(){
    
    return (
        <section className='text-center'>
            <div className='grid grid-cols-2 justify-items-center'>
                <p className='p-28'>
                <img src={mi} alt='halo' className='w-[90] h-[87] outline outline-solid outline-offset-2 rounded-full 
                opacity-100 hover:opacity-50 ease-in-out duration-500' />
                </p>
                <div className='p-20 font-sans font-semibold'>
                    <h1 className='p-2 text-3xl'>Hello, I'm</h1>
                    <h1 className='p-8 text-4xl text-amber-950 font-bold'>Guna Vardhan Boddeda</h1>
    
                    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Competitive Programmer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Full Stack Web Developer',
        1000,
        'Django Developer',
        1000,
        'React Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'block', marginBottom:'40px'}}
      repeat={Infinity}
    />

                    <a href='/21L31A05E0.pdf'>
                    <button className='text-xl opacity-50 bg-blue-900 text-white rounded-md p-2 hover:bg-slate-500 hover:shadow-2xl shadow-blue-900 hover:opacity-100
                     transition ease-in-out'>Resume</button>
                    </a>
                </div>
            </div>
        </section>
    )
}