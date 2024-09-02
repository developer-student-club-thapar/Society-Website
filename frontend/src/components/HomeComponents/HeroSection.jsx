import React from 'react'
import heroImage from '../../assets/Hero-Shapes.png'
import mobbg from '../../assets/mob_bg.png'




const HeroSection = () => {
  return (
    <div className='flex justify-center items-center flex-col h-[80vh] '>
        <img src={heroImage} alt="hero" className=' lg:block hidden absolute -z-20 heroimg' />
        <img src={mobbg} alt="hero" className='lg:hidden block absolute -z-20 heroimg' />
        
        <div className=" w-[80%] justify-center items-center flex flex-col">
            <h2 className='text-gray-600 font-light lg:mb-4 mt-8 lg:text-sm text-[12px] text-center'>Google Developer Students Club Thapar University</h2>
            <h1 className=' text-4xl lg:mt-0 mt-2 lg:text-8xl text-center font-bold text-gray-900'>Empower Your Future With Innovation</h1>
            <button className='bg-black px-16 py-3 rounded-3xl mt-10 text-white hover:bg-white  hover:text-black transition-all hover:border-2 hover:border-black' onClick={() => {document.querySelector("#about").scrollIntoView({ behavior: "smooth" })}}>Learn More</button>
       </div>
    </div>
  )
}
 
export default HeroSection
