import React from 'react';
import AboutImage from '../../assets/About_Image.png';
import "../../Css/animation.css";

const AboutUs = () => {
  return (
    <div className='w-full flex justify-center' id='about'>
      <div className="w-[90%] md:w-[80%] bg-gray-100 justify-center rounded-3xl px-8 md:px-20 py-10 aboutUs">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-36 items-center">
          <div className="md:col-span-3">
            <button className='bg-red-500 px-4 py-2 rounded-3xl text-white mb-6'>
              TL:DR
            </button>
            <h1 className='text-4xl text-left md:text-6xl font-bold mb-4'>About</h1>
            <p className='text-gray-500 text-xs lg:text-sm'>
            Google Developer Student Clubs (GDSC) is a global network of university-based communities dedicated to bridging the gap between academic knowledge and real-world tech experience. At GDSC Tiet, our chapter at Thapar Institute of Engineering and Technology, we focus on hands-on learning through workshops, hackathons, and collaborative projects. We aim to foster innovation and skill development, empowering students to make a meaningful impact in the tech world.
            </p>
            <div className="COUNTER mt-10 flex w-full gap-4 md:gap-8">
              <div className="flex flex-col">
                <h1 className=' text-2xl lg:text-3xl md:text-4xl font-bold'>60</h1>
                <p className='font-semibold lg:text-md text-sm text-gray-700'>Members</p>
              </div>
              <div className="flex flex-col">
                <h1 className='text-2xl lg:text-3xl md:text-4xl font-bold'>8+</h1>
                <p className='font-semibold lg:text-md text-sm text-gray-700'>Projects</p>
              </div>
              <div className="flex flex-col">
                <h1 className='text-2xl lg:text-3xl md:text-4xl font-bold'>12+</h1>
                <p className='font-semibold lg:text-md text-sm text-gray-700'>Departments</p>
              </div>
            </div>
          </div>

          {/* Display the image only on medium and larger screens */}
          <div className="hidden lg:block md:col-span-2">
            <img src={AboutImage} alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;