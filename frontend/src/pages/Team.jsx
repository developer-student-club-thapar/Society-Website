import React from 'react'
import './style/team.css'
import image from '../assets/LinkedIn_logo_initials.webp'

const Team = () => {

  const ExecutiveMembers = [
    
    {
      id: 1,
      name: 'John Doe',
      designation: 'Software Engineer',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/johndoe'
    },
    {
      id: 2,
      name: 'Jane Smith',
      designation: 'Product Manager',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/janesmith'
    },
    
    {
      id: 3,
      name: 'Michael Johnson',
      designation: 'UI/UX Designer',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/michaeljohnson'
    },
    
    {
      id: 4,
      name: 'Alice Brown',
      designation: 'Backend Developer',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/alicebrown'
    },
    {
      id: 5,
      name: 'Chris Green',
      designation: 'DevOps Engineer',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/chrisgreen'
    },
    {
      id: 6,
      name: 'Laura White',
      designation: 'QA Engineer',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/laurawhite'
    },
    {
      id: 7,
      name: 'David Blue',
      designation: 'Data Scientist',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/davidblue'
    },
    {
      id: 8,
      name: 'Sophia Black',
      designation: 'Machine Learning Engineer',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/sophiablack'
    },
    {
      id: 9,
      name: 'Daniel Grey',
      designation: 'Full Stack Developer',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/danielgrey'
    },
    {
      id: 10,
      name: 'Emily Red',
      designation: 'Frontend Developer',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/emilyred'
    },
    {
      id: 11,
      name: 'Laura White',
      designation: 'QA Engineer',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/laurawhite'
    },
    {
      id: 12,
      name: 'David Blue',
      designation: 'Data Scientist',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/davidblue'
    },
    {
      id: 13,
      name: 'Sophia Black',
      designation: 'Machine Learning Engineer',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/sophiablack'
    },
    {
      id: 14,
      name: 'Daniel Grey',
      designation: 'Full Stack Developer',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/danielgrey'
    },
    {
      id: 15,
      name: 'Emily Red',
      designation: 'Frontend Developer',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/emilyred'
    }];

    const AssociateMembers = [
    
      {
        id: 1,
        name: 'John Doe',
        imageUrl: 'https://via.placeholder.com/150',
        linkedinUrl: 'https://www.linkedin.com/in/johndoe'
      },
      {
        id: 2,
        name: 'Jane Smith',
        imageUrl: 'https://via.placeholder.com/150',
        linkedinUrl: 'https://www.linkedin.com/in/janesmith'
      },]

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

    <div className="team-container" >
      {ExecutiveMembers.map(member => (
        <div key={member.id} className="team-member" >
          <img src={member.imageUrl} alt={member.name } className='profile-image' />
        <div>
          <div>
            <h2 className='h3'>{member.name}</h2>
            <p className='p'>{member.designation}</p>
          </div>
          <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <img className="linkedin" src={image} alt="Profile Picture" />
          </a>
        </div>
        </div>
      ))}
    </div>


    <h1 className='core'>GDSC thapar core</h1>

    <div className="Associate-container" >
      {AssociateMembers.map(member => (
        <div key={member.id} className="Associate-member" >
          <img src={member.imageUrl} alt={member.name}  />
        <div className='Associate-info'>
          <h2>{member.name}</h2>
          <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <img className="linkedin" src={image} alt="Profile Picture" />
          </a>
        </div>
        </div>
      ))}
    </div>

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