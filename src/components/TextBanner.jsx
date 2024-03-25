import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import {  Zoom } from 'react-awesome-reveal';


const TextBanner = () => {
    return (
      <>

    <Box id="home" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Zoom direction='In' cascade duration={2000} damping={2.8}>
      <Box sx={{ flex: '1' }}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100vh',
            overflow: 'hidden',
          }}
        >
          <Container
            sx={{
              position: 'absolute',
              top: {xs:'50%', md:'40%'},
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: '#fff',
              mt:'40px'
              // filter: 'drop-shadow(1px 1px 1px #fff)',
            }}
          >
            <Typography variant="h2" className='linearTxt' sx={{ marginBottom: 1, fontSize:{xs:'60px', md:'65px', }, fontWeight:'500', fontFamily:'Poppins', color:'#c9c7c7',  }}>Unleashing Your Brand's </Typography>
            <Typography variant="h2" className='linearTxt' sx={{ marginBottom: 4, fontSize:{xs:'60px', md:'65px', }, fontWeight:'500', fontFamily:'Poppins', color:'#c9c7c7'}}>Potential,</Typography>
            <Box sx={{width: {xs:'250px', md:'400px'}, margin:'auto', mt:'40px'}}>
              <Typography variant="body1" sx={{fontSize:'20px',  fontFamily:'Inter', color:'#c9c7c7'}}>Empowering brands to thrive in the digital age, our full-service marketing agency specializes in strategic planning, creative execution, and data-driven results. </Typography>
            </Box>
          </Container>

        </Box>
      </Box>
      </Zoom>
    </Box>
      </>
    );
  };

  export default TextBanner;

 