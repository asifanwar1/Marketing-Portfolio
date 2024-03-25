import React, { useState, useEffect } from 'react';
import { Outlet, Link, } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import { BannerLinkImage1, BannerLinkImage2, BannerLinkImage3, BannerLinkImage4, BannerLinkImage5 } from '../assets/images';
import NavSpeedDial from '../components/NavSpeedDial';
import LoadingScreen from '../components/LoadingScreen'

const images = [
  BannerLinkImage1,
  BannerLinkImage2,
  BannerLinkImage3,
  BannerLinkImage4,
  BannerLinkImage5,
  BannerLinkImage1,
  BannerLinkImage2,
  BannerLinkImage3,
  BannerLinkImage4,
  BannerLinkImage5,

];

const headings = [
  {title: 'WORLD CAPITAL OF BOOKS UNESCO',  path:'/portfolio/page1'},
  {title: 'ICN BUSINESS SCHOOL', path:'/portfolio/page1'},
  {title: 'CHARTERED ACCOUNTANTS', path:'/portfolio/page1'},
  {title: 'NETWORK OF PUBLIC SCHOOLS', path:'/portfolio/page1'},
  {title: 'THE MUNICIPAL BATHS OF STRASBOURG',path:'/portfolio/page1'},
  {title: 'WORLD CAPITAL OF BOOKS UNESCO', path:'/portfolio/page1'},
  {title: 'ICN BUSINESS SCHOOL', path:'/portfolio/page1'},
  {title: 'CHARTERED ACCOUNTANTS', path:'/portfolio/page1'},
  {title: 'NETWORK OF PUBLIC SCHOOLS', path:'/pagportfolio/page1e1'},
  {title: 'THE MUNICIPAL BATHS OF STRASBOURG', path:'/portfolio/page1'},
];

const defaultSelectedIndex = 0;

const Page = () => {
  const [selectedImage, setSelectedImage] = useState(defaultSelectedIndex);

  const handleHeadingHover = (index) => {
    setSelectedImage(index);
  };

  const handleHeadingLeave = () => {
    setSelectedImage(defaultSelectedIndex);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (remove this in production)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    
    {loading ? <LoadingScreen /> : 
    <>
    <Box sx={{position:'absolute'}}>
      <NavSpeedDial/>
    </Box>
    
    
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflowY: 'scroll',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 2s ease',
        // backgroundImage: selectedImage !== null ? `url(${images[selectedImage]})` : 'none',
        backgroundImage: `url(${images[selectedImage]})`,
        zIndex:-1
      }}
    >
      
      <Box 
        sx={{
          display: 'flex',
          marginTop:{xs:'600px', sm:'25%', md:'12rem', lg:'10rem'},
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign:'center',
        }}
      >
        {headings.map((heading, index) => (
          <Fade key={index} triggerOnce>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => handleHeadingHover(index)}
              onMouseLeave={handleHeadingLeave}
            >
              <Link to={heading.path} style={{textDecoration:'none'}}>
              <Typography className="heading-with-line" sx={{ fontSize:{xs:'25px', md:'40px'}, position: 'relative', overflow: 'hidden', color: 'white', cursor: 'pointer', marginBottom: '20px', '&:hover':{color:'#00c062'}}}>
                {heading.title}
                <span className="hover-line"></span>
              </Typography>
              </Link>
            </motion.div>
            <br></br>
            <br></br>
          </Fade>
        ))}
      </Box>
    </Box>
    </> 
  }
    </>
  );
};

export default Page;
