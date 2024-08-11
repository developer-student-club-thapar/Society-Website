import React from 'react'
import './style/team.css'

const Team = () => {
  return (
  <>
      {/* // <div className=' flex justify-center ml-20 mt-16 h-[90vh]'>
    //     <div className="grid grid-cols-2">
    //         <h1 className='text-8xl font-extrabold ml-20 text-gray-800'>OUR MEMBERS</h1>
    //     </div>
    // </div> */}
    <div className='content'>
      <div className=''>
        <p>About our Past members</p>
        <h1>Team of GDSC Member</h1>
        <button>Meet The team</button>
      </div>
    </div>

    <div className='content1'>
      <div className='content2'>
        <button>Random Text</button>
        <h2>Executive Board</h2>
        <p>
          Explore our diverse range of projects that showcase
          the creativity and technical prowess of our members.
          From groundbreaking apps to innovate solutions, our
          project highlight the impact of applied technology.
        </p>
      </div>
    </div>
  </>
  )
}

export default Team