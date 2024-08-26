import React from 'react';
import AboutImage from '../../assets/About_Image.png';
import "../../Css/animation.css";

const AboutUs = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className="w-[90%] md:w-[80%] bg-gray-100 justify-center rounded-3xl px-8 md:px-20 py-10 aboutUs">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-36 items-center">
          <div className="md:col-span-3">
            <button className='bg-red-500 px-4 py-2 rounded-3xl text-white mb-6'>
              TL:DR
            </button>
            <h1 className='text-4xl md:text-6xl text-left font-bold mb-4'>About</h1>
            <p className='text-gray-500 text-[8px] lg:text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odio hic delectus nemo blanditiis repudiandae. Vel distinctio ducimus blanditiis quos minima provident hic obcaecati sequi voluptate quas, sed nam nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia natus? Nulla, veniam vero inventore fugiat distinctio consequatur quas eveniet maiores, sunt nisi vel? Dolore, rem minima! Id, deleniti veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corporis recusandae nihil beatae ut id dolores. Culpa deserunt ullam quam eius tempore hic quibusdam expedita ad fuga. Ipsum, a quam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis suscipit, neque voluptate expedita odio doloremque ullam dolores et. Quam ad beatae pariatur expedita voluptates sunt delectus debitis itaque, natus voluptas?
            </p>
            <div className="COUNTER mt-10 flex w-full gap-4 md:gap-8">
              <div className="flex flex-col">
                <h1 className='text-3xl md:text-4xl font-bold'>60</h1>
                <p className='font-semibold text-gray-700'>Members</p>
              </div>
              <div className="flex flex-col">
                <h1 className='text-3xl md:text-4xl font-bold'>8+</h1>
                <p className='font-semibold text-gray-700'>Projects</p>
              </div>
              <div className="flex flex-col">
                <h1 className='text-3xl md:text-4xl font-bold'>12+</h1>
                <p className='font-semibold text-gray-700'>Departments</p>
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