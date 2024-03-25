import * as React from 'react';
import { Outlet, Link, } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
// import { useDarkMode } from '../context/DarkModeContext';
import SwitchBtn from './SwitchBtn.jsx';
import {  GenLogoWhiteIcon } from '../assets/icons/index.js';



const navItems = [
  {title: 'Home', path:'/'},
  {title: 'About', path:'/#about'},
  {title: 'Portfolio', path:'/portfolio'},
];


const navItemsRight = [
  {icon: <LinkedInIcon/>, path:'https://linkedin.com'},
  {icon: <XIcon/>, path:'https://twitter.com'},
  {icon: <InstagramIcon/>, path:'https://instagram.com'},
];





function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};






function ContactAppBar(props) {
  // const { darkMode } = useDarkMode();
  const darkMode = true;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', transition: 'top 2.5s ease'  }}>
     
        <Box sx={{ textAlign:'center',}} >
          <ListItemButton sx={{display:'flex', justifyContent:'center',  margin:'auto', color:'white', '&:hover': {color:'#00c062'}, fontFamily:'Oranienbaum', fontSize:'1.5rem', }}>
          <GenLogoWhiteIcon className="logoTop"/>
          </ListItemButton>
        </Box>
      <Divider />
      <List >
        {navItems.map((element, index) => (
          <ListItem  key={index} disablePadding >
          <Link to={element.path} style={{ textDecoration: 'none', textAlign:'center', margin:'auto' }}>
            <ListItemButton sx={{color:'white', '&:hover': {color:'#00c062'}, fontFamily:'Poppins', fontSize:'1.5rem', textAlign:'center', }}>
              {element.title}
            </ListItemButton>
          </Link>
        </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex',}}>
      {/* <CssBaseline /> */}
      {/* <HideOnScroll {...props}> */}
      <AppBar sx={{backgroundColor: darkMode ? 'inherit' : '#f6fbf6', boxShadow:'none', }}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: '#00c062' , }}
          >
            <GenLogoWhiteIcon className="logoTop"/>
          </IconButton>
            {/* <Box sx={{display: { md: 'none' }, marginLeft:'auto'}}>
              <SwitchBtn/>
            </Box> */}
          <Box sx={{ display: {xs: 'none', sm: 'none', md: 'flex' }, marginLeft:'-20px'}}>
          <ListItem disablePadding>
              <HashLink smooth  to='/' style={{ textDecoration: 'none', scrollBehavior: 'smooth', }}>
                <ListItemButton sx={{ color:'white', '&:hover': {color:'#00c062'}, fontFamily:'Poppins', }}>
                <GenLogoWhiteIcon className="logoTop"/>
                </ListItemButton>
              </HashLink >
            </ListItem>
      
          </Box>
          
          

          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg:"flex" }, marginLeft:'auto' }}>
         
            {navItemsRight.map((element, index) => (
              <ListItem  key={index} sx={{marginLeft:'-42px'}} >
                <Link to={element.path} target="_blank" rel="noopener noreferrer">
                  <ListItemButton sx={{color:'white', '&:hover': {color:'#00c062'},}}>
                    {element.icon}
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
            {/* <ListItem disablePadding >
                <SwitchBtn/>
            </ListItem> */}
          </Box>
          <Outlet/>
        </Toolbar>
      </AppBar>
      {/* </HideOnScroll> */}
      <nav>
        <Drawer
          container={container}
          // variant="temporary"
          variant="persistent"
          anchor="top"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          // ModalProps={{
          //   keepMounted: true, // Better open performance on mobile.
          // }}
          // sx={{
          //   display: { xs: 'block', sm: 'none' },
          //   '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          // }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            // width: drawerWidth,
            // width: '100%',
            // height: '100vh',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              backgroundColor: darkMode ? '#212427' : '#f6fbf6',
              width: '100%',
              // width: drawerWidth,
              height: '100vh',
              boxSizing: 'border-box',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      
    </Box>
  );
}

ContactAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ContactAppBar;