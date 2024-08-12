import React from 'react'
import './style/team.css'
import image from '../assets/LinkedIn_logo_initials.webp'

const Team = () => {
  return (
  <>
  
  <div  className='content' >
      
    <div  class =' w-[80%] justify-center items-center flex flex-col'>
     
     
      <div>
        <p className='para' class='text-gray-600 font-semibold  justify-center items-center flex '>About our Past members</p>
        <h1 className='h1'>Team of GDSC Thapar </h1>
        <div className='but'>
        <button className='team-button'>MEET THE TEAM </button>
        </div>
        
      </div>
     
      
    </div>
    </div>

    <div className='content1'>
      <div className='content2'>
        <h2 className='h2'>Executive Board</h2>
        <p className='texteb'>
          Explore our diverse range of projects that showcase
          the creativity and technical prowess of our members.
          From groundbreaking apps to innovate solutions, our
          project highlight the impact of applied technology.
        </p>
      </div>
    </div>


    <div>
      <img className="card-image" src="https://via.placeholder.com/200"/*{profilePic}*/ alt="Profile Picture" />
      <div>
        <div>
          <p>Reyan Singh</p>
          <p>Co-Lead</p>
        </div>
        <img className="linkedin" src={image}/*{profilePic}*/ alt="Profile Picture" />
      </div>
    </div>

    <h1 className='core'>GDSC thapar core</h1>

    <div className='core-content'>
      <img className="card-image" src="https://via.placeholder.com/150"/*{profilePic}*/ alt="Profile Picture" />
      <div>
        <div>
          <p>Krishan Malhotra</p>
        </div>
        <img className="linkedin" src={image}/*{profilePic}*/ alt="Profile Picture" />
      </div>
    </div>
  </>
  )
}

export default Team