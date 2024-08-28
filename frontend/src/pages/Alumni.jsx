import React from 'react'
import './style/alumni.css'
import image from '../assets/LinkedIn_logo_initials.webp'

const Alumni = () => {

  const AlumniMembers = [
    
    {
      id: 1,
      name: 'Jay Parmani', 
      designation: 'Software Engineer @Apple',
      imageUrl: '/src/img/alumni/jay.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/jsparmani/'
    },
    ,
    
    {
      id: 3,
      name: 'Ujjwal Singh',
      designation: 'Private Equity Analyst @Bain & Company',
      imageUrl: '/src/img/alumni/ujjwal.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/thee-ujjwal/'
    },
    
    {
      id: 4,
      name: 'Aarushi Abrol',
      designation: 'YTL @Airtel Digital',
      imageUrl: '/src/img/alumni/aarushi.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/aarushiabrol/'
    },
    {
      id: 5,
      name: 'Harsh Jain',
      designation: 'Ex- Digital Technical Specialist Intern @IBM',
      imageUrl: '/src/img/alumni/harsh.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/harsh--jain/'
    },
    {
      id: 6,
      name: 'Shreeya Chatterji',
      designation: 'Summer Intern @JPMC',
      imageUrl: '/src/img/alumni/Shreeya.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/shreeyachatterji/'
    },
    
    {
      id: 8,
      name: 'Jayati Mishra',
      designation: 'SWE @JPMC',
      imageUrl: '/src/img/alumni/jayati.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/jayati-mishra-b1084a1bb/'
    },
    {
      id: 9,
      name: 'Nikhil Bakshi',
      designation: 'SWE @JPMC',
      imageUrl: '/src/img/alumni/nikhil.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/nikhilbksi/'
    },
    {
      id: 10,
      name: 'Deepanshi Sharma',
      designation: 'SWE Intern @Salesforce',
      imageUrl: '/src/img/alumni/deepanshi.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/deepanshi-sharma05/'
    },
    
    
    {
      id: 12,
      name: 'Aniket Biswas',
      designation: 'SWE(Web) @Headout',
      imageUrl: '/src/img/alumni/aniket.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/aniket-biswas-59394b191/'
    },
      {
        id: 2,
        name: 'Deepak Jain',
        designation: 'Former R&D Intern @Maruti Suzuki',
        imageUrl: '/src/img/alumni/deepak.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/deepak-jain-18227b198/'
      },{
        id: 7,
        name: 'Sidharth Bahl',
        designation: 'SWE 1 @JPMC',
        imageUrl: '/src/img/alumni/sb.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/sidharthbahl/'
      }
    // },
    // {
    //   id: 11,
    //   name: 'Tushar Chopra',
    //   designation: 'Ex Software Engineer @subconscious.ai',
    //   imageUrl: '/src/img/alumni/tushar.jpeg',
    //   linkedinUrl: 'https://www.linkedin.com/in/tushar-chopra-960532215/'
    // 
    ]
    const scrollToSection = () => {
      const section = document.getElementById('target-section');
      section.scrollIntoView({ behavior: 'smooth' });
    };

    const handleCardClick = (url) => {
        
      if (window.innerWidth <= 768) {
        window.open(url, '_blank');
      }
    };

  return (
  <>
    <div  className= 'contentT' >

      
      
      <div  class =' w-[80%] justify-center items-center flex flex-col'>
       
       
        <div >
        
        
          <p className='para' class='text-gray-600 font-semibold  justify-center items-center flex '>About our Past members</p>
          <h1 className='h1'>Alumni of GDSC Thapar </h1>
          <div className='but'>
        <button onClick={scrollToSection} className='team-button'>MEET THE ALUMNI </button>
        </div>
        
        <div className='content1'>
      <div className='content2'>
        
        <p className='texteb'>
        Our alumni are trailblazers in various fields, embodying the values and skills cultivated during 
        their time in our society.They continue to inspire and support current members through mentorship, 
        networking, and shared experiences.
        </p>
      </div>
    </div>
     
          
        </div>
       
        
      </div>
    </div>

    

  <div className='outer' id="target-section">

    <div  className="alumni-container" >
      {AlumniMembers.map(AlumniMembers => (
        <div key={AlumniMembers.id} className="alumni-member" onClick={() => handleCardClick(AlumniMembers.linkedinUrl)}>
          <div className="Profile-image-wrapper">
            <img src={AlumniMembers.imageUrl} alt={AlumniMembers.name} className="Profile-image" />
          </div>
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