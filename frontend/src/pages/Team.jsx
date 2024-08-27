import React from 'react'
import './style/team.css'
import image from '../assets/LinkedIn_logo_initials.webp'

const Team = () => {

  const ExecutiveMembers = [
    {
      id: 1,
      name: 'Ronit Parakh',
      designation: 'Co-Lead',
      imageUrl: '/src/img/alumni/jay.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/ronit-parakh/'

    },
    {
      id: 2,
      name: 'Reyan Singh',
      designation: 'Co-Lead',
      imageUrl: '/src/img/alumni/jay.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/ronit-parakh/'
    },

    {
      id: 3,
      name: 'Manan Sharma',
      designation: 'Co-Lead',
      imageUrl: '/src/img/alumni/jay.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/mash-sharma/'
    },
    
    {
      id: 4,
      name: 'Priyanka Malik',
      designation: 'Design Mentor',
      imageUrl: '/src/img/alumni/jay.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/priyanka-malik-252a77265/'
    },
    {
      id: 5,
      name: 'Sakshi Singh',
      designation: 'UI/UX Mentor',
      imageUrl: '/src/img/alumni/jay.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/sakshi-singh-88683024a/'
    },
    {
      id: 6,
      name: 'Aarav Mahajan',
      designation: 'App Dev Mentor',
      imageUrl: '/src/img/alumni/jay.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/aarav-mahajan-5160a6263/'
    },
    {
      id: 7,
      name: 'Pushan Aggarwal',
      designation: 'CyberSecurity Mentor',
      imageUrl: '/src/img/alumni/jay.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/pushan-agrawal-93362919b/'
    },
    {
      id: 8,
      name: 'Sharath Chandra',
      designation: 'Web Dev Mentor',
      imageUrl: '/src/img/alumni/jay.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/csharath-chandra/'
    },
    {
      id: 9,
      name: 'Aryan Panja',
      designation: 'ML Mentor',
      imageUrl: '/src/img/alumni/jay.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/aryan-panja/'
    },
    {
      id: 10,
      name: 'Amandeep Singh',
      designation: 'ML Mentor',
      imageUrl: '/src/img/alumni/jay.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/amandeep-singh-69a68b26b/'
    },
    {
      id: 11,
      name: 'Nimish Duggal',
      designation: 'Finance Mentor',
      imageUrl: '/src/img/alumni/jay.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/nimish-duggal-8a93a625b/'
    },
    {
      id: 12,
      name: 'Dimpi Jain',
      designation: 'EM Mentor',
      imageUrl: '/src/img/alumni/jay.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/dimpi-jain-784246214/'
    },
    {
      id: 13,
      name: 'Samkit Jaina',
      designation: 'Logistics Mentor',
      imageUrl: '/src/img/alumni/jay.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/samkit-jaina-51b109258/'
    },
    {
      id: 14,
      name: 'Yuvraj Singh',
      designation: 'RIOT(Robotics and IOT) Mentor',
      imageUrl: '/src/img/alumni/jay.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/yuvraj-singh-3aa067263/'
    },
    {
      id: 15,
      name: 'Aamna Abdin',
      designation: 'Product Mentor',
      imageUrl: '/src/img/alumni/jay.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/aamnaabdin/'
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
          linkedinUrl: 'https://www.linkedin.com/in/sakshhamthecoder'
        },
        {
          id: 2,
          name: 'Tanmay Kumar',
          designation: 'Associate RIOT',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/tanmay-k-68a964239/'
        },
    
        {

          id: 1,
          name: 'Krishan Malhotra',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/krishan-malhotra-349082299/'
        },
        {
          id: 2,
          name: 'Harsh Gupta',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/harsh-gupta-200a47272/'
        },
        
        {
          id: 3,
          name: 'Aarushi Garg',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/aarushi-garg-50b476288/'
        },
        
        {
          id: 4,
          name: 'Yash Tomar',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/yash-tomar-9243311b7/'
        },
        {
          id: 5,
          name: 'Armaan Jagirdar',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/armaan-jagirdar-183b47285/'
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
          linkedinUrl: 'https://www.linkedin.com/in/priyanshu-patel-ab2866276'
        },
        {
          id: 9,
          name: 'Kapeesh Gupta',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/kapeeshgupta?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
        },
        
        {
          id: 10,
          name: 'Yuvansh Pathak',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'http://www.linkedin.com/in/yuvansh-pathak'
        },
        
        {
          id: 11,
          name: 'Navnoor Bawa',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/navnoorbawa/'
        },
        {
          id: 12,
          name: 'Rehnoor Aulakh',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/rehnoor-aulakh-41b2b727b/'
        },
        {
          id: 13,
          name: 'Arjun Singh',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/arjun-s-6089a4265/'
        },
        {
          id: 14,
          name: 'Prakhar Raj',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/prakharraj11/'
        },
      
        {
          id: 15,
          name: 'Aayush Goyal',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/aayush-goyal-653015271/'
        },
        {
          id: 16,
          name: 'Mehar Dua',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/mehar-dua-26b3691ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        
        {
          id: 17,
          name: 'Ritesh Kapoor',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/ritesh-kapoor-8691921b4/'
        },
        
        
        {
          id: 18,
          name: 'Yash Agarwal',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'http://linkedin.com/in/yash-agarwal-385557275'
        },
        {
          id: 19,
          name: 'Marul Bhardwaj',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/marul-bhardwaj-1465271bb/'
        },
        {
          id: 20,
          name: 'Riya Gupta',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/riya-gupta-4671a5291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
          
        },
      
        {
          id: 21,
          name: 'Armaan Gogoi',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/armaan-gogoi'
        },
        {
          id: 22,
          name: 'Adhya Koul',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://in.linkedin.com/in/adhya-koul-a84b6b21'
        },
        
        {
          id: 23,
          name: 'Avneet Singh',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/avneet-singh-202069287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        
        {
          id: 24,
          name: 'Agrim Verma',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/agrim-verma-104413323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
        },
        {
          id: 25,
          name: 'Pradyumna Singh',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/pradyumna-singh-a14885206/'
        },
        {
          id: 26,
          name: 'Naman Khosla',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/naman-khosla-1420ab296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
        },
        {
          id: 27,
          name: 'Riddhi Jain',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/riddhi-jain-02a41129a/'
        },
      
        {
          id: 28,
          name: 'Guransh Chugh',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/guransh-chugh-b59437261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        {
          id: 29,
          name: 'Pulkit Jhamb',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/pulkit-jhamb-7766ab2b3/'
        },
        
        {
          id: 30,
          name: 'Vidhu Sarwal',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/vidhusarwal/'
        },
        
        {
          id: 31,
          name: 'Harshit Arora',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/harshit-arora-here/'
        },
        {
          id: 32,
          name: 'Parth Katiyar',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/parthkatiyar'
        },
        {
          id: 33,
          name: 'Pranjal Satti',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: ''
        },
        {
          id: 34,
          name: 'Naman Singh',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/naman-singh-164478296/'
        },
        {
          id: 35,
          name: 'Periza Arora',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/periza-arora/'
        }
        ,
        {
          id: 36,
          name: 'Ananya Pahwa',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/ananya-pahwa/'
        },
        {
          id: 37,
          name: 'Gurkirat Singh',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'http://linkedin.com/in/gurkirat-singh-29773628b'
        },
        {
          id: 38,
          name: 'Ashmit',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/ashmitcajla/'
        },
        
        {
          id: 39,
          name: 'Sachin Goyal',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/michaeljohnson'
        },
        
        {
          id: 40,
          name: 'Ayush Agarwal',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/ayush-agarwal-a53a60308/'
        },

        {
          id: 41,
          name: 'Krishna Jindal',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/krishna-jindal-672839274/'
        },
        {
          id: 42,
          name: 'Parth Kapoor',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/parthkapoor08/'
        }
        ,
        
        {
          id: 43,
          name: 'Gurkirat Singh',
          imageUrl: 'https://via.placeholder.com/150',
          linkedinUrl: 'https://www.linkedin.com/in/gurkirat-singh-915192266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        }

      ]

      const handleCardClick = (url) => {
        
        if (window.innerWidth <= 768) {
          window.open(url, '_blank');
        }
      };

  

  return (
  <>

  <div  className= 'content' >
      
    <div  class =' w-[80%] justify-center items-center flex flex-col'>
     
     
      <div className='title' >
      
      
        <p className='para' class='text-gray-600 font-semibold  justify-center items-center flex '>About our members</p>
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
        <div key={member.id} className="team-member" onClick={() => handleCardClick(member.linkedinUrl)}>
          <div className="profile-image-wrapper">
            <img src={member.imageUrl} alt={member.name} className="profile-image" />
          </div>
        <div className='team-team'>
          <div className='team-info'>
            <h2 className='h3'>{member.name}</h2>
            <p className='p'>{member.designation}</p>
          </div>
          <a className ='hide' href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <img className="linkedin" src={image} alt="Profile Picture" />
          </a>
        </div>
        </div>
      ))}
    </div>
    </div>


    <div className='content1'>
      <div className='content2'>
        <h2 className='h2'>GDSC Core</h2>
        <p className='texteb'>
        Our core team is the driving force behind innovation, bringing together expertise and passion to lead our tech society toward groundbreaking advancements.
        </p>
      </div>
    </div>
    
    <div className='outer-core'>

    <div className="core-container" >
      {CoreMembers.map(member => (
        <div key={member.id} className="core-member" onClick={() => handleCardClick(member.linkedinUrl)}>
  
        <div className='team-team'>
         
            <h2 className='h4'>{member.name}</h2>
           
          <a class='hide' href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
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