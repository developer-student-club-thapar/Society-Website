import React from 'react'
import im from '../../assets/About_Image.png'


const Departments = () => {
  return (
    <div id='departments' className='flex w-full flex-col justify-center items-center text-left bg-gray-100 py-20'>
        <div className="w-[80%] flex flex-col">
        <button className='px-10 py-2 w-fit bg-gdsc-green text-white rounded-3xl cursor-default projectsAnim'>Departments</button>
        <h1 className=' text-3xl lg:text-6xl font-semibold mt-10 projectsAnim flex'>Departments</h1>
        <p className=' text-gray-500 mt-5 mb-10 projectsAnim text-[12px] lg:text-[15px] '> 
        Google Developer Student Clubs (GDSC) is a global network of university-based communities dedicated to bridging the gap between academic knowledge and real-world tech experience. At GDSC Tiet, our chapter at Thapar Institute of Engineering and Technology, we focus on hands-on learning through workshops, hackathons, and collaborative projects. We aim to foster innovation and skill development, empowering students to make a meaningful impact in the tech world.
        </p>

            <div className="grid grid-cols-3 gap-3 projectsAnim">
            <div className="flex bg-white px-2.5 lg:px-5 py-3 rounded-xl items-center gap-5">
                    <img src={im} alt="" className='w-[30px] bg-gdsc-green rounded-full p-[30px]' />
                    <div className="lg:block hidden">
                        <div className="flex flex-col text-start ">
                            <h1 className=' text-start text-gray-400'>Web Development</h1>
                            <h2 className='text-gray-700 font-semibold'>Sharath Chandra</h2>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white px-2.5 lg:px-5 py-3 rounded-xl items-center gap-5">
                    <img src={im} alt="" className='w-[30px] bg-gdsc-green rounded-full p-[30px]' />
                    <div className="lg:block hidden">
                        <div className="flex flex-col text-start ">
                            <h1 className=' text-start text-gray-400'>Machine Learning</h1>
                            <h2 className='text-gray-700 font-semibold'>Aryan Panja</h2>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white px-2.5 lg:px-5 py-3 rounded-xl items-center gap-5">
                    <img src={im} alt="" className='w-[30px] bg-gdsc-green rounded-full p-[30px]' />
                    <div className="lg:block hidden">
                        <div className="flex flex-col text-start ">
                            <h1 className=' text-start text-gray-400'>Machine Learning</h1>
                            <h2 className='text-gray-700 font-semibold'>Amandeep Singh</h2>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white px-2.5 lg:px-5 py-3 rounded-xl items-center gap-5">
                    <img src={im} alt="" className='w-[30px] bg-gdsc-green rounded-full p-[30px]' />
                    <div className="lg:block hidden">
                        <div className="flex flex-col text-start ">
                            <h1 className=' text-start text-gray-400'>App Development</h1>
                            <h2 className='text-gray-700 font-semibold'>Aarav Mahajan</h2>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white px-2.5 lg:px-5 py-3 rounded-xl items-center gap-5">
                    <img src={im} alt="" className='w-[30px] bg-gdsc-green rounded-full p-[30px]' />
                    <div className="lg:block hidden">
                        <div className="flex flex-col text-start ">
                            <h1 className=' text-start text-gray-400'>Associate App Development</h1>
                            <h2 className='text-gray-700 font-semibold'>Saksham Bhagat</h2>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white px-2.5 lg:px-5 py-3 rounded-xl items-center gap-5">
                    <img src={im} alt="" className='w-[30px] bg-gdsc-green rounded-full p-[30px]' />
                    <div className="lg:block hidden">
                        <div className="flex flex-col text-start ">
                            <h1 className=' text-start text-gray-400'>Cybersecurity</h1>
                            <h2 className='text-gray-700 font-semibold'>Pushan Aggarwal</h2>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white px-2.5 lg:px-5 py-3 rounded-xl items-center gap-5">
                    <img src={im} alt="" className='w-[30px] bg-gdsc-green rounded-full p-[30px]' />
                    <div className="lg:block hidden">
                        <div className="flex flex-col text-start ">
                            <h1 className=' text-start text-gray-400'>Product</h1>
                            <h2 className='text-gray-700 font-semibold'>Aamna Abdin</h2>
                        </div>
                    </div>
                </div>

                <div className="flex bg-white px-2.5 lg:px-5 py-3 rounded-xl items-center gap-5">
                    <img src={im} alt="" className='w-[30px] bg-gdsc-green rounded-full p-[30px]' />
                    <div className="lg:block hidden">
                        <div className="flex flex-col text-start ">
                            <h1 className=' text-start text-gray-400'>Robotics and IoT</h1>
                            <h2 className='text-gray-700 font-semibold'>Yuvraj Singh</h2>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white px-2.5 lg:px-5 py-3 rounded-xl items-center gap-5">
                    <img src={im} alt="" className='w-[30px] bg-gdsc-green rounded-full p-[30px]' />
                    <div className="lg:block hidden">
                        <div className="flex flex-col text-start ">
                            <h1 className=' text-start text-gray-400'>Associate Robotics and IoT</h1>
                            <h2 className='text-gray-700 font-semibold'>Tanmay Kumar</h2>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white px-2.5 lg:px-5 py-3 rounded-xl items-center gap-5">
                    <img src={im} alt="" className='w-[30px] bg-gdsc-green rounded-full p-[30px]' />
                    <div className="lg:block hidden">
                        <div className="flex flex-col text-start ">
                            <h1 className=' text-start text-gray-400'>Event Management</h1>
                            <h2 className='text-gray-700 font-semibold'>Dimpi</h2>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white px-2.5 lg:px-5 py-3 rounded-xl items-center gap-5">
                    <img src={im} alt="" className='w-[30px] bg-gdsc-green rounded-full p-[30px]' />
                    <div className="lg:block hidden">
                        <div className="flex flex-col text-start ">
                            <h1 className=' text-start text-gray-400'>Logistics</h1>
                            <h2 className='text-gray-700 font-semibold'>Samkit Jaina</h2>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white px-2.5 lg:px-5 py-3 rounded-xl items-center gap-5">
                    <img src={im} alt="" className='w-[30px] bg-gdsc-green rounded-full p-[30px]' />
                    <div className="lg:block hidden">
                        <div className="flex flex-col text-start ">
                            <h1 className=' text-start text-gray-400'>Design</h1>
                            <h2 className='text-gray-700 font-semibold'>Priyanka</h2>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white px-2.5 lg:px-5 py-3 rounded-xl items-center gap-5">
                    <img src={im} alt="" className='w-[30px] bg-gdsc-green rounded-full p-[30px]' />
                    <div className="lg:block hidden">
                        <div className="flex flex-col text-start ">
                            <h1 className=' text-start text-gray-400'>UI/UX</h1>
                            <h2 className='text-gray-700 font-semibold'>Sakshi Singh</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Departments