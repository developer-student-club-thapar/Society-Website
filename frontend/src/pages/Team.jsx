import React from 'react'
import './style/team.css'

const Team = () => {
  return (
  <>
      
    <div className='content'>
      <div >
        <p className='para'>About our Past members</p>
        <h1 className='h1'>Team of GDSC Thapar </h1>
        <button className='team-button'>MEET THE TEAM </button>
        
      </div>
    </div>

    <div className='content1'>
      <div className='content2'>
        <button>Random </button>
        <h2>Executive Board</h2>
        <p>
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
        <img className="card-image" src="https://via.placeholder.com/30"/*{profilePic}*/ alt="Profile Picture" />
      </div>
    </div>
  </>
  )
}

export default Team