import React, {useEffect, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// import { makeStyles } from '@mui/styles';
import { portfolioImage1, portfolioImage2, portfolioImage3, portfolioImage4, portfolioImage5, portfolioImage6, } from '../../assets/images';
import NavSpeedDial from '../../components/NavSpeedDial'
import LoadingScreen from '../../components/LoadingScreen';
import { Fade } from 'react-awesome-reveal';

// const pageImages = [portfolioImage1, portfolioImage2, portfolioImage3, portfolioImage4, portfolioImage5, portfolioImage6]

const Page1 = () => {

  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    // Simulate loading delay (remove this in production)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, []);


  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY !== 0) {
        event.preventDefault();
        window.scrollBy({
          top: 0,
          left: event.deltaY > 0 ? window.innerWidth : -window.innerWidth,
          behavior: 'smooth',
        });
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);




  return (
      <>
      {loading ? <LoadingScreen /> : 

        <Box sx={{display:'flex', flexDirection:'row',backgroundColor:'#edecea', height:'100vh', width:'300vw', overflowY:'hidden', overflowX:'hidden'}}>
        <Box sx={{position:'fixed'}}>
          <NavSpeedDial/>
        </Box>

        {/* <Box ref={contentRef} sx={{ display: 'flex', width: 'fit-content', gap: '20px' }}> */}

          <Box sx={{width:{xs:'300px', md:'500px'}, marginLeft:{xs:'50px', md:'150px'}, marginTop:'2rem', }}>

            <Box >
              <Typography variant='h4'sx={{fontFamily:'Poppins', lineHeight: '3rem', fontWeight:'600'}}>STRASBOURG WORLD</Typography> 
              <Typography variant='h4'sx={{fontFamily:'Poppins', lineHeight: '3rem', fontWeight:'600'}}>CAPITAL OF BOOKS</Typography> 
              <Typography variant='h4'sx={{fontFamily:'Poppins', lineHeight: '3rem', fontWeight:'600'}}>UNESCO</Typography> 
            </Box>
          
            <br></br>
            <Box>
              <Typography sx={{fontFamily:'Inter', lineHeight: '1.5rem', }}>The VO agency signs the logo and the communication “Strasbourg world book capital 2024” awarded by UNESCO on July 20, 2022.</Typography>
              <br></br>
              <Typography sx={{fontFamily:'Inter', lineHeight: '1.5rem', }}>Our idea: to combine the two strong symbols of the cathedral and the book to create an iconic image, specific to Strasbourg. The colored pages symbolize the inclusive dimension, for a capital open to all. The stars evoke asterisks and the European capital. The resolutely current style gives a very dynamic and lively side to the entire graphic identity.</Typography>
              <br></br>
              <Typography sx={{fontFamily:'Inter', lineHeight: '1.5rem', }}>The project is part of the values ​​shared by UNESCO and the City of Strasbourg: human rights (fight against illiteracy, discrimination, gender equality, etc.), social and societal dimension, in addition to cultural issues and development of the book industry.</Typography>
            </Box>

            <br></br>
            <Box>
              <Typography sx={{fontFamily:'Inter', }} ><span style={{fontWeight:'bold'}}>Announcer:</span> City of Strasbourg</Typography>
              <Typography sx={{fontFamily:'Inter', }} ><span style={{fontWeight:'bold'}}>Date:</span> 2022 - 2024</Typography>
              <Typography sx={{fontFamily:'Inter', }} ><span style={{fontWeight:'bold'}}>Web:</span> www.strasbourg.eu/lirenotremonde</Typography>
            </Box>
          
          </Box>

       

          <Box sx={{display:'flex'}}>
            <Fade duration={2000}>
            <Box sx={{marginLeft:{xs:'1rem', md:'8rem'}}}>
              <img src={portfolioImage1} alt="pageImages" style={{width:'100%', height:'100vh'}}/>
            </Box>

            <Box sx={{display:'flex', flexDirection:'column', }}>
              <img src={portfolioImage2} alt="pageImages" style={{width:'100%', height:'100vh'}}/>
            </Box>

            <Box >
              <img src={portfolioImage4} alt="pageImages" style={{width:'100%', height:'100vh'}}/>
            </Box>

            <Box>
              <img src={portfolioImage5} alt="pageImages" style={{width:'100%', height:'100vh'}}/>
            </Box>

            <Box>
              <img src={portfolioImage6} alt="pageImages" style={{width:'100%', height:'100vh'}}/>
            </Box>
            </Fade>
          </Box>
         


          

          {/* </Box> */}
        </Box>
    }
      </>
  );
};

export default Page1;


