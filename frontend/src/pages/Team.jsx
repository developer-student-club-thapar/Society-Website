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
      const scrollToSection = () => {
        const section = document.getElementById('target-section');
        section.scrollIntoView({ behavior: 'smooth' });
      };

      const CoreMembers = [
    
        {
          id: 1,
          name: 'Krishan Malhotra',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/johndoe'
        },
        {
          id: 2,
          name: 'Harsh Gupta',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/janesmith'
        },
        
        {
          id: 3,
          name: 'Michael Johnson',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/michaeljohnson'
        },
        
        {
          id: 4,
          name: 'Alice Brown',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/alicebrown'
        },
        {
          id: 5,
          name: 'Chris Green',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/chrisgreen'
        },
        {
          id: 6,
          name: 'Laura White',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/laurawhite'
        },
        {
          id: 7,
          name: 'David Blue',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/davidblue'
        },
      
        {
          id: 8,
          name: 'John Doe',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/johndoe'
        },
        {
          id: 9,
          name: 'Jane Smith',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/janesmith'
        },
        
        {
          id: 10,
          name: 'Michael Johnson',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/michaeljohnson'
        },
        
        {
          id: 11,
          name: 'Alice Brown',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/alicebrown'
        },
        {
          id: 12,
          name: 'Chris Green',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/chrisgreen'
        },
        {
          id: 13,
          name: 'Laura White',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/laurawhite'
        },
        {
          id: 14,
          name: 'David Blue',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/davidblue'
        },
      
        {
          id: 15,
          name: 'John Doe',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/johndoe'
        },
        {
          id: 16,
          name: 'Jane Smith',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/janesmith'
        },
        
        {
          id: 17,
          name: 'Michael Johnson',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/michaeljohnson'
        },
        
        
        {
          id: 18,
          name: 'Chris Green',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/chrisgreen'
        },
        {
          id: 19,
          name: 'Laura White',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/laurawhite'
        },
        {
          id: 20,
          name: 'David Blue',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/davidblue'
        },
      
        {
          id: 21,
          name: 'John Doe',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/johndoe'
        },
        {
          id: 22,
          name: 'Jane Smith',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/janesmith'
        },
        
        {
          id: 23,
          name: 'Michael Johnson',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/michaeljohnson'
        },
        
        {
          id: 24,
          name: 'Alice Brown',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/alicebrown'
        },
        {
          id: 25,
          name: 'Chris Green',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/chrisgreen'
        },
        {
          id: 26,
          name: 'Laura White',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/laurawhite'
        },
        {
          id: 27,
          name: 'David Blue',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/davidblue'
        },
      
        {
          id: 28,
          name: 'John Doe',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/johndoe'
        },
        {
          id: 29,
          name: 'Jane Smith',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/janesmith'
        },
        
        {
          id: 30,
          name: 'Michael Johnson',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/michaeljohnson'
        },
        
        {
          id: 31,
          name: 'Alice Brown',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/alicebrown'
        },
        {
          id: 32,
          name: 'Chris Green',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/chrisgreen'
        },
        {
          id: 33,
          name: 'Laura White',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/laurawhite'
        },
        {
          id: 34,
          name: 'David Blue',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/davidblue'
        },
        {
          id: 35,
          name: 'Alice Brown',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/alicebrown'
        }
      ]

  return (
  <>

  <div  className='content' >
      
    <div  class =' w-[80%] justify-center items-center flex flex-col'>
     
     
      <div>
        <p className='para' class='text-gray-600 font-semibold  justify-center items-center flex '>About our Past members</p>
        <h1 className='h1'>Team of GDSC Thapar </h1>
        <div className='but'>
        <button onClick={scrollToSection} className='team-button'>MEET THE TEAM </button>
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
    <div className='outer'>

    <div id="target-section" className="team-container" >
      {ExecutiveMembers.map(member => (
        <div key={member.id} className="team-member" >
          <img src={member.imageUrl} alt={member.name } className='profile-image' />
        <div className='team-team'>
          <div className='team-info'>
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
    </div>


    <h1 className='core'>GDSC Thapar Core</h1>
    

    <div className="Associate-container" >
      {AssociateMembers.map(member => (
        <div key={member.id} className="Associate-member" >
          <img src={member.imageUrl} alt={member.name}  />
        <div className='Associate-info'>
          <div className='associate-name'>
              <h2>{member.name}</h2>
              <p className='p-core'>{member.designation}</p>
          </div>
          <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <img className="linkedin" src={image} alt="Profile Picture" />
          </a>
        </div>
        </div>
      ))}
    </div>
    

    <div className='outer-core'>

    <div className="core-container" >
      {CoreMembers.map(member => (
        <div key={member.id} className="core-member" >
          <img src={member.imageUrl} alt={member.name } className='profile-image' />
        <div className='team-team'>
          <div className='team-info'>
            <h2 className='h4'>{member.name}</h2>
            
          </div>
          <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <img className="linkedin" src={image} alt="Profile Picture" />
          </a>
        </div>
        </div>
      ))}
    </div>
    </div>


  </>
  )
}

export default Team