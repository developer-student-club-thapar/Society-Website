import React from 'react'
import './style/team.css'
import image from '../assets/LinkedIn_logo_initials.webp'

const Team = () => {

  const ExecutiveMembers = [
    
    {
      id: 1,
      name: 'Ronit Parakh',
      designation: 'Co-Lead',
      imageUrl: '/src/img/Screenshot 2024-08-15 at 00.07.03.png',
      linkedinUrl: 'https://www.linkedin.com/in/ronit-parakh/'
    },
    {
      id: 2,
      name: 'Reyan Singh',
      designation: 'Co-Lead',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/janesmith'
    },
    
    {
      id: 3,
      name: 'Manan Sharma',
      designation: 'Co-Lead',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/michaeljohnson'
    },
    
    {
      id: 4,
      name: 'Priyanka',
      designation: 'Design Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/alicebrown'
    },
    {
      id: 5,
      name: 'Sakshi Singh',
      designation: 'UI/UX Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/chrisgreen'
    },
    {
      id: 6,
      name: 'Aarav Mahajan',
      designation: 'App Dev Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/laurawhite'
    },
    {
      id: 7,
      name: 'Pushan Aggarwal',
      designation: 'CyberSecurity Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/davidblue'
    },
    {
      id: 8,
      name: 'Sharath Chandra',
      designation: 'Web Dev Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/sophiablack'
    },
    {
      id: 9,
      name: 'Aryan Panja',
      designation: 'ML Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/danielgrey'
    },
    {
      id: 10,
      name: 'Amandeep Singh',
      designation: 'ML Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/emilyred'
    },
    {
      id: 11,
      name: 'Nimish Duggal',
      designation: 'Finance Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/laurawhite'
    },
    {
      id: 12,
      name: 'Dimpi Jain',
      designation: 'EM Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/davidblue'
    },
    {
      id: 13,
      name: 'Samkit Jaina',
      designation: 'Logistics Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/sophiablack'
    },
    {
      id: 14,
      name: 'Yuvraj Singh',
      designation: 'RIOT(Robotics and IOT) Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/danielgrey'
    },
    {
      id: 15,
      name: 'Aamna Abdin',
      designation: 'Product Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/emilyred'
    }];

    
    
      
      const scrollToSection = () => {
        const section = document.getElementById('target-section');
        section.scrollIntoView({ behavior: 'smooth' });
      };

      const CoreMembers = [
        {
          id: 1,
          name: 'Saksham Bhagat',
          designation: 'Associate App-dev',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/johndoe'
        },
        {
          id: 2,
          name: 'Tanmay Kumar',
          designation: 'Associate RIOT',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/janesmith'
        },
    
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
          name: 'Aarushi Garg',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/michaeljohnson'
        },
        
        {
          id: 4,
          name: 'Yash Tomar',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/alicebrown'
        },
        {
          id: 5,
          name: 'Armaan Jagirdar',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/chrisgreen'
        },
        {
          id: 6,
          name: 'Rhea Singhal',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/laurawhite'
        },
        {
          id: 7,
          name: 'Sanyam Singh Brar',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/davidblue'
        },
      
        {
          id: 8,
          name: 'Priyanshu Patel',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/johndoe'
        },
        {
          id: 9,
          name: 'Kapeesh Gupta',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/janesmith'
        },
        
        {
          id: 10,
          name: 'Yuvansh Pathak',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/michaeljohnson'
        },
        
        {
          id: 11,
          name: 'Navnoor Bawa',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/alicebrown'
        },
        {
          id: 12,
          name: 'Rehnoor Aulakh',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/chrisgreen'
        },
        {
          id: 13,
          name: 'Arjun Singh',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/laurawhite'
        },
        {
          id: 14,
          name: 'Prakhar Raj',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/davidblue'
        },
      
        {
          id: 15,
          name: 'Aayush Goyal',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/johndoe'
        },
        {
          id: 16,
          name: 'Mehar Dua',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/janesmith'
        },
        
        {
          id: 17,
          name: 'Ritesh Kapoor',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/michaeljohnson'
        },
        
        
        {
          id: 18,
          name: 'Yash Agarwal',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/chrisgreen'
        },
        {
          id: 19,
          name: 'Marul Bhardwaj',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/laurawhite'
        },
        {
          id: 20,
          name: 'Riya Gupta',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/davidblue'
          
        },
      
        {
          id: 21,
          name: 'Armaan Gogoi',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/johndoe'
        },
        {
          id: 22,
          name: 'Adhya Koul',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/janesmith'
        },
        
        {
          id: 23,
          name: 'Avneet Singh',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/michaeljohnson'
        },
        
        {
          id: 24,
          name: 'Agrim Verma',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/alicebrown'
        },
        {
          id: 25,
          name: 'Pradyumna Singh',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/chrisgreen'
        },
        {
          id: 26,
          name: 'Naman Khosla',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/laurawhite'
        },
        {
          id: 27,
          name: 'Riddhi Jain',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/davidblue'
        },
      
        {
          id: 28,
          name: 'Guransh Chugh',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/johndoe'
        },
        {
          id: 29,
          name: 'Pulkit Jhamb',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/janesmith'
        },
        
        {
          id: 30,
          name: 'Vidhu Sarwal',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/michaeljohnson'
        },
        
        {
          id: 31,
          name: 'Harshit Arora',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/alicebrown'
        },
        {
          id: 32,
          name: 'Parth Katiyar',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/chrisgreen'
        },
        {
          id: 33,
          name: 'Pranjal Satti',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/laurawhite'
        },
        {
          id: 34,
          name: 'Naman Singh',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/davidblue'
        },
        {
          id: 35,
          name: 'Periza Arora',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/alicebrown'
        }
        ,
        {
          id: 36,
          name: 'Ananya Pahwa',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/davidblue'
        },
        {
          id: 37,
          name: 'Gurkirat Singh',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/johndoe'
        },
        {
          id: 38,
          name: 'Ashmit',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/janesmith'
        },
        
        {
          id: 39,
          name: 'Sachin Goyal',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/michaeljohnson'
        },
        
        {
          id: 40,
          name: 'Ayush',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/alicebrown'
        },

        {
          id: 41,
          name: 'Krishna Jindal',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/chrisgreen'
        },
        {
          id: 42,
          name: 'Parth Kapoor',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/laurawhite'
        }
        ,
        
        {
          id: 43,
          name: 'Gurkirat Singh',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/alicebrown'
        }

      ]

     

  return (
  <>

  <div  className= 'content' >
      
    <div  class =' w-[80%] justify-center items-center flex flex-col'>
     
     
      <div >
      
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
    
    <div className='outer' id="target-section">

    <div  className="team-container" >
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
            <img className="linkedin1" src={image} alt="Profile Picture" />
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