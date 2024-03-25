import React, { useEffect, useState } from 'react';
import { Outlet, Link, } from 'react-router-dom';
import { Box, Container, Typography, Button, Card, CardActionArea, CardContent, CardMedia, Grid } from '@mui/material';
import { useDarkMode } from '../context/DarkModeContext';
import { Fade } from 'react-awesome-reveal';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Image4, SocialMarketingImage, ContentMarketingImage, EmailMarketingImage, Image8 } from '../assets/images';

const disc = "Managed and promoted STU Travel's virtual event, attracting a global audience and increasing brand recognition in the travel and tourism sector.";
const disc2 = "Launched a highly engaging social media campaign for Maria Fashion, resulting in a 30% increase in brand awareness and a significant boost in online sales. ";
const disc3 = "Developed and executed a content marketing strategy for GHI Health, creating valuable and informative content that positioned them as industry leaders.";
const disc4 = "Set up personalized email marketing automation for JKL Fitness, resulting in higher customer engagement, increased conversions, and improved customer retention.  ";

const projects = [
  { id: 1, image: Image4, title: 'Event and Content Marketing for STU Travel', description: disc, year: 2023, link: '#' },
  { id: 2, image: SocialMarketingImage, title: 'Social Media Marketing for Maria Fashion', description: disc2, year: 2023, link: '#' },
  { id: 3, image: ContentMarketingImage, title: 'Content Marketing for GHI Health magic', description: disc3, year: 2024, link: '#' },
  { id: 4, image: EmailMarketingImage, title: 'Email Marketing Automation for JKL Fitness', description: disc4, year: 2024, link: '#' },
];

const cardStyles = {
  maxWidth: {xs:300, md:400},
  height:'420px',
  backgroundColor:'#212427',
  backdropFilter: 'blur(15px)', opacity: 0.9,
  color:'white',
};

const Portfolio = () => {
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
      <Box id="portfolioSec" sx={{ backgroundColor: darkMode ? '#090808' : '#f6fbf6', color: darkMode ? 'white' : 'black', marginTop: '15rem' }}>
        <Container>
          <Box sx={{ textAlign: 'center' }}>
            <Fade cascade duration={3000} className="scroll-animation">
    
              <Box sx={{display:'flex', alignItems:'center', justifyContent: 'center',}}>

              <Typography variant="h4" sx={{ fontWeight: '600', fontFamily:'Poppins', color:'#00c062', textTransform: 'uppercase'}}>
                  Portfolio
              </Typography>
              </Box>
            </Fade>
            <br></br>
            <Fade cascade duration={2000}>

              <Box sx={{width:{xs:'350px', md:'600px'}, margin:'auto'}}>
                <Typography variant="h4" sx={{ fontWeight: '400', fontFamily:'Inter', color:'#c9c7c7', }}>
                  Dive into our portfolio showcasing a diverse range of successful campaigns and projects.
                </Typography>
              </Box>
            
            </Fade>
          </Box>
          <br />
          <Grid container spacing={7} justifyContent="center" sx={{mt:'2rem'}}>
            {projects.map((project, index) => (
              <Grid item md={4} key={project.id} className="scroll-animation">
                <Fade duration={3000} delay={project.id * 100} className="reveal">
                  <Card sx={cardStyles} onMouseOver={() => handleMouseOver(index)} onMouseLeave={handleMouseLeave}>
                    <CardActionArea href={project.link}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={project.image}
                        alt={project.title}
                        style={{
                          transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                      <CardContent sx={{ textAlign: 'left', color:'white',  }}>
                        <Typography variant="h6" gutterBottom sx={{color:'#c9c7c7', fontFamily:'Inter',}}>
                          {project.title}
                        </Typography>
                        <Typography variant="body2" sx={{fontFamily:'Inter', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
                          {project.description}
                        </Typography>
                        <br></br>
                        <Typography variant="body2" sx={{textAlign:'center', fontFamily:'Inter',}}>
                          Year: {project.year}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
          <br />
          <Box sx={{ textAlign: 'center', mt:'30px'}}>
            <Fade cascade duration={3000} className="scroll-animation">
                <Link to='/portfolio' style={{ textDecoration: 'none', textAlign:'center', color:'white',}}>
                  <Button variant='outlined' startIcon={<ArrowForwardIcon/>} sx={{borderColor:'white', boxShadow:'none', color:'#c9c7c7', '&:hover': {color:'#00c062', borderColor:'white'}, fontFamily:'Inter',}}>
                    See all our projects
                  </Button>
                </Link>
            </Fade>
          </Box>
        </Container>
      </Box>
      <br></br>
      <br></br>
    </>
  );
};

export default Portfolio;
