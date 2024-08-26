import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo.png'; // Example image

const scrollRight = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(100%); }
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 300px; /* Adjust height as needed */
`;

const Row = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${props => props.direction === 'right' ? scrollRight : scrollLeft} 10s linear infinite;
  &:hover {
  }
`;

const ExboImage = styled.img`
  width: 150px; /* Adjust size as needed */
  height: 150px; /* Adjust size as needed */
  margin: 10px;
  border-radius: 20%; /* Optional: for circular images */
  object-fit: contain; /* Ensure the image covers the area */
`;
const CoreImage = styled.img`
  width: 100px; /* Adjust size as needed */
  height: 100px; /* Adjust size as needed */
  margin: 10px;
  border-radius: 20%; /* Optional: for circular images */
  object-fit: contain; /* Ensure the image covers the area */
`;


  
  
    
    const scrollToSection = () => {
      const section = document.getElementById('target-section');
      section.scrollIntoView({ behavior: 'smooth' });
    };

    const membersRow2 = [
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
        linkedinUrl: 'https://www.linkedin.com/in/janesmith'
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
        linkedinUrl: 'https://www.linkedin.com/in/johndoe'
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
    
    const membersRow1 = [
    
      {
        id: 1,
        name: 'Jay Parmani', 
        designation: 'Software Engineer @Apple',
        imageUrl: '/src/img/alumni/1657200096415.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/jsparmani/'
      },
      {
        id: 2,
        name: 'Deepak Jain',
        designation: 'Former R&D Intern @Maruti Suzuki',
        imageUrl: '/src/img/alumni/1640551961514.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/deepak-jain-18227b198/'
      },
      
      {
        id: 3,
        name: 'Ujjwal Singh',
        designation: 'Private Equity Analyst @Bain & Company',
        imageUrl: '/src/img/alumni/UjjwalSingh.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/thee-ujjwal/'
      },
      
      {
        id: 4,
        name: 'Aarushi Abrol',
        designation: 'YTL @Airtel Digital',
        imageUrl: '/src/img/alumni/AarushiAbrol.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/aarushiabrol/'
      },
      {
        id: 5,
        name: 'Harsh Jain',
        designation: 'Ex- Digital Technical Specialist Intern @IBM',
        imageUrl: '/src/img/alumni/HarshJain.jpeg',
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
        id: 7,
        name: 'Sidharth Bahl',
        designation: 'SWE 1 @JPMC',
        imageUrl: '/src/img/alumni/Sidharth Bahl.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/sidharthbahl/'
      },
      {
        id: 8,
        name: 'Jayati Mishra',
        designation: 'SWE @JPMC',
        imageUrl: '/src/img/alumni/Jayati Mishra.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/jayati-mishra-b1084a1bb/'
      },
      {
        id: 9,
        name: 'Nikhil Bakshi',
        designation: 'SWE @JPMC',
        imageUrl: '/src/img/alumni/nikhilbakshi.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/nikhilbksi/'
      },
      {
        id: 10,
        name: 'Deepanshi Sharma',
        designation: 'SWE Intern @Salesforce',
        imageUrl: '/src/img/alumni/deepanshisharma.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/deepanshi-sharma05/'
      },
      {
        id: 11,
        name: 'Tushar Chopra',
        designation: 'Ex Software Engineer @subconscious.ai',
        imageUrl: '/src/img/alumni/tushar.png',
        linkedinUrl: 'https://www.linkedin.com/in/tushar-chopra-960532215/'
      },
      {
        id: 12,
        name: 'Harishankar Kumar',
        designation: 'Building @AlthireAI',
        imageUrl: '/src/img/alumni/harishankark.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/hsk4link/'
      },
      {
        id: 13,
        name: 'Aniket Biswas',
        designation: 'SWE(Web) @Headout',
        imageUrl: '/src/img/alumni/Aniket Biswas.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/aniket-biswas-59394b191/'
      }];


// Duplicate the arrays to create an infinite scrolling effect
const infiniteMembersRow1 = [...membersRow1, ...membersRow1, ...membersRow1];
const infiniteMembersRow2 = [...membersRow2, ...membersRow2, ...membersRow2];

const Carousel = () => {
  return (
    <CarouselContainer>
      <Row direction="right">
        {infiniteMembersRow1.map((member, index) => (
          <ExboImage key={`${member.id}-${index}`} src={member.imageUrl} alt={`Member ${member.id}`} />
        ))}
      </Row>
      <Row direction="left">
        {infiniteMembersRow2.map((member, index) => (
          <CoreImage key={`${member.id}-${index}`} src={member.imageUrl} alt={`Member ${member.id}`} />
        ))}
      </Row>
    </CarouselContainer>
  );
};

export default Carousel;