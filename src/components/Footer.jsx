import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemButton, Link, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useDarkMode } from '../context/DarkModeContext';

const navItemsRight = [
  { icon: <LinkedInIcon />, path: 'https://linkedin.com' },
  { icon: <TwitterIcon />, path: 'https://twitter.com' },
  { icon: <InstagramIcon />, path: 'https://instagram.com' },
];

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <>
    {/* <Divider sx={{marginTop:'2rem', borderColor:'#00c062'}}/> */}
    <br></br>
    <Box sx={{marginTop:{xs:'2rem',md:'10%'}, backgroundColor: darkMode ? '#090808' : '#f6fbf6', color: 'white', py: 3 }}>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" sx={{fontFamily:'Inter', fontSize:'1.2rem',color:'#c9c7c7'}}>
            <Link href="#" color="inherit" underline="none">
              Gen Marketing
            </Link>
            {' | '}
            <Link href="#" color="inherit" underline="none">
              Privacy Policy
            </Link>
          </Typography>
          <List sx={{ display: 'flex', gap: '1rem' }}>
            {navItemsRight.map((element, index) => (
              <ListItem key={index} disablePadding>
                <Link href={element.path} target="_blank" rel="noopener noreferrer" color="inherit">
                  <ListItemButton sx={{ color: 'white', '&:hover': {color:'#00c062'}, }}>
                    {element.icon}
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
    <br></br>
    <br></br>
    </>
  );
};

export default Footer;
