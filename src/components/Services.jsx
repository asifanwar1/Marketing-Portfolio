import React, { useEffect, useState } from 'react';
import { Outlet, Link, } from 'react-router-dom';
import { Box, Container, Typography, Grid } from '@mui/material';
import { useDarkMode } from '../context/DarkModeContext';
import { Fade } from 'react-awesome-reveal';
import AllOutIcon from '@mui/icons-material/AllOut';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CategoryIcon from '@mui/icons-material/Category';
import { MarketImage2, MarketImage3, MarketImage4, MarketImage5,} from '../assets/images';

const disc = "Empowering brands with innovative strategies for digital success. Elevate your online presence and engage your audience effectively.";
const disc2 = "Transform your brand's digital presence with our creative digital marketing solutions. From captivating content to targeted campaigns.";
const disc3 = "Elevate your marketing strategy with our robust analytics and reporting services. Gain insights, track performance metrics for maximum ROI.";
const disc4 = "Engage your audience and create memorable experiences with our event and content marketing expertise. ";

const projects = [
  { id: 1, image: MarketImage3, title: 'Brand Strategy and Development', description: disc, icon: <DesignServicesIcon sx={{fontSize:'5rem', color:'#00c062'}}/> },
  { id: 2, image: MarketImage4, title: 'Creative Digital Marketing', description: disc2, icon: <AllOutIcon sx={{fontSize:'5rem', color:'#00c062'}}/> },
  { id: 3, image: MarketImage2, title: 'Marketing Analytics and Reporting', description: disc3, icon: <SupportAgentIcon sx={{fontSize:'5rem', color:'#00c062'}}/> },
  { id: 4, image: MarketImage5, title: 'Event and Content Marketing', description: disc4, icon: <CategoryIcon sx={{fontSize:'5rem', color:'#00c062'}}/> },
];

const cardStyles = {
  // width: {xs:'300px', md:'400px'},
  maxWidth: {xs:300, md:400},
  height: {xs:'500px', md:'460px'},
  borderRadius:'25px',
  backgroundColor:'#212427',
  backdropFilter: 'blur(28px)', opacity: 0.8,
  color:'white',
};

const Services = () => {
  const { darkMode } = useDarkMode();

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animation');
      elements.forEach((element, index) => {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight) {
          element.classList.add('reveal');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Box id="services" sx={{ backgroundColor: darkMode ? '#090808' : '#f6fbf6', color: darkMode ? 'white' : 'black', marginTop: '15rem', }}>
    
        <Container>
          <Box sx={{ textAlign: 'center' }}>
            <Fade cascade duration={2000} >
          
              <Box sx={{display:'flex', alignItems:'center', justifyContent: 'center',}}>

          
              <Typography variant="h4" sx={{fontWeight: '600', fontFamily:'Poppins', color:'#00c062', textTransform: 'uppercase'}}>
              Our Services
              </Typography>
              </Box>
              <br></br>
            </Fade>
            <Fade cascade duration={2000}>

              <Box sx={{width:{xs:'350px', md:'600px'}, margin:'auto'}}>
                <Typography variant="h4" sx={{ fontWeight: '400', fontFamily:'Inter', color:'#c9c7c7', }}>
                  Explore our comprehensive range of services designed to amplify your brand's presence.
                </Typography>
              </Box>
            
            </Fade>
          </Box>
          <br></br>
          <br></br>

          <Grid container spacing={7} justifyContent="center" sx={{mt:'10px',}}>
            {projects.map((project, index) => (
              <Grid item xs={10.7} md={4} key={project.id} className="scroll-animation" >
                <Fade cascade duration={3000} delay={project.id * 100} className="reveal">
                  <Box sx={cardStyles} onMouseOver={() => handleMouseOver(index)} onMouseLeave={handleMouseLeave}>
                    <br></br>
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center',  textAlign:'center',}}>
                      <img src={project.image} alt='vexaImage' width="300px"/>
                    </Box>
                    <Box sx={{mt:'40px', ml:'20px', mr:'5px'}}>
                        <Typography variant='h4'sx={{fontFamily:'Inter', color:'#c9c7c7'}}>{project.title}</Typography>
                        <br></br>
                        <Typography variant="body2" sx={{fontFamily:'Inter', color:'#c9c7c7'}}>
                          {project.description}
                        </Typography>
                    </Box>
                  </Box>
         
                </Fade>
              </Grid>
            ))}
          </Grid>
 
          <br />
          <Box sx={{ textAlign: 'left' }}>
     
          </Box>
        </Container>
  
      </Box>
      <br></br>
      <br></br>
    </>
  );
};

export default Services;
