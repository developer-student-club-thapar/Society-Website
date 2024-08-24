import React from 'react'
import './style/alumni.css'
import image from '../assets/LinkedIn_logo_initials.webp'

const Alumni = () => {

  const AlumniMembers = [
    
    {
      id: 1,
      name: 'Jay Parmani',
      designation: 'Software Engineer @Apple',
      imageUrl: '/src/img/1657200096415.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/jsparmani/'
    },
    {
      id: 2,
      name: 'Deepak Jain',
      designation: 'Former R&D Intern @Maruti Suzuki',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/deepak-jain-18227b198/'
    },
    
    {
      id: 3,
      name: 'Ujjwal Singh',
      designation: 'Private Equity Analyst @Bain & Company',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/thee-ujjwal/'
    },
    
    {
      id: 4,
      name: 'Aarushi Abrol',
      designation: 'YTL @Airtel Digital',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/aarushiabrol/'
    },
    {
      id: 5,
      name: 'Harsh Jain',
      designation: 'Ex- Digital Technical Specialist Intern @IBM',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/harsh--jain/'
    },
    {
      id: 6,
      name: 'Shreeya Chatterji',
      designation: 'Summer Intern @JPMC',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/shreeyachatterji/'
    },
    {
      id: 7,
      name: 'Sidharth Bahl',
      designation: 'SWE 1 @JPMC',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/sidharthbahl/'
    },
    {
      id: 8,
      name: 'Jayati Mishra',
      designation: 'SWE @JPMC',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/jayati-mishra-b1084a1bb/'
    },
    {
      id: 9,
      name: 'Nikhil Bakshi',
      designation: 'SWE @JPMC',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/danielgrey'
    },
    {
      id: 10,
      name: 'Deepanshi Sharma',
      designation: 'SWE Intern @Salesforce',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/emilyred'
    },
    {
      id: 11,
      name: 'Tushar Chopra',
      designation: 'Ex Software Engineer @subconscious.ai',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/tushar-chopra-960532215/'
    },
    {
      id: 12,
      name: 'Harishankar Kumar',
      designation: 'Building @AlthireAI',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/hsk4link/'
    },
    {
      id: 13,
      name: 'Aniket Biswas',
      designation: 'SWE(Web) @Headout',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/aniket-biswas-59394b191/'
    }];

    const handleCardClick = (url) => {
        
      if (window.innerWidth <= 768) {
        window.open(url, '_blank');
      }
    };

  return (
  <>
    <div  className= 'content' >
      
      <div  class =' w-[80%] justify-center items-center flex flex-col'>
       
       
        <div >
        
        
          <p className='para' class='text-gray-600 font-semibold  justify-center items-center flex '>About our Past members</p>
          <h1 className='h1'>Alumni of GDSC Thapar </h1>
          
        </div>
       
        
      </div>
    </div>

    

    <div className='outer' id="target-section">

    <div  className="alumni-container" >
      {AlumniMembers.map(AlumniMembers => (
        <div key={AlumniMembers.id} className="alumni-member" onClick={() => handleCardClick(AlumniMembers.linkedinUrl)}>
          <img src={AlumniMembers.imageUrl} alt={AlumniMembers.name } className='profile-image' />
        <div className='team-team'>
          <div className='alumni-info'>
            <h2 className='h3'>{AlumniMembers.name}</h2>
            <p className='p'>{AlumniMembers.designation}</p>
          </div>

          <a className ='hide' href={AlumniMembers.linkedinUrl} target="_blank" rel="noopener noreferrer">
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

export default Alumni