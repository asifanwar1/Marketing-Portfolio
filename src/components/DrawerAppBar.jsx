import * as React from 'react';
import { Outlet, Link, } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import {Toolbar} from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
// import { useDarkMode } from '../context/DarkModeContext';
import SwitchBtn from './SwitchBtn.jsx';
import {GenLogoWhiteIcon } from '../assets/icons/index.js';


const drawerWidth = 240;
const navItemsLeft = [
  {title: 'About', path:'/#about'},
  {title: 'Services', path:'/#services'},
  {title: 'Portfolio', path:'/#portfolioSec'},
  {title: 'FAQs', path:'/#faqs'},
];

const navItems = [
  {title: 'Home', path:'/'},
  {title: 'Portfolio', path:'/portfolio'},
  {title: 'Contact', path:'/contactUs'},
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






function DrawerAppBar(props) {
  // const { darkMode } = useDarkMode();
  const darkMode = true;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', transition: 'top 2.5s ease'  }}>
     
        <Box sx={{  textAlign:'center',}} >
  
          <ListItemButton sx={{display:'flex', justifyContent:'center',  margin:'auto', color:'white', '&:hover': {color:'#00c062'}, fontFamily:'Oranienbaum', }}>
            <GenLogoWhiteIcon className="logoTop"/>
          </ListItemButton>
        </Box>
      <Divider />
      <List >
        {navItems.map((element, index) => (
          <ListItem  key={index} disablePadding >
          <Link to={element.path} style={{ textDecoration: 'none', textAlign:'center', margin:'auto' }}>
            <ListItemButton sx={{color:'white', '&:hover': {color:'#00c062'}, fontFamily:'Inter', fontSize:'1.5rem', textAlign:'center', }}>
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
      <AppBar sx={{backgroundColor: darkMode ? 'inherit' : '#f6fbf6', boxShadow:'none', mt:'25px'}}>
        <Toolbar>
          <IconButton
            // color="black"
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
              <HashLink smooth  to='/#home' style={{ textDecoration: 'none', scrollBehavior: 'smooth', }}>
                <ListItemButton sx={{ color:'white', '&:hover': {color:'#00c062'}, fontFamily:'Oranienbaum', }}>
                  <GenLogoWhiteIcon className="logoTop"/>
                </ListItemButton>
              </HashLink >
            </ListItem>
   
          </Box>
   
          

          <Box sx={{ display: { xs: 'none', sm: 'none', md:'flex' }, justifyContent:'center', width:'100%', }}>
          <Box sx={{ display: { xs: 'none', sm: 'none', md:'flex' }, ml:'11rem', px:'5px', py:'8px', textAlign:'center', backgroundColor:'#212427', border:'1px solid #383839', borderRadius:'35px', backdropFilter: 'blur(15px)', opacity: 0.5, }}>
            {navItemsLeft.map((element, index) => (
              <ListItem  key={index}  sx={{}}>
              <HashLink smooth  to={element.path} style={{ textDecoration: 'none', scrollBehavior: 'smooth'}}>
                <ListItemButton sx={{color:'white', '&:hover': {color:'#00c062'}, fontFamily:'Inter', fontSize:'0.9rem', }}>
                  {element.title}
                </ListItemButton>
              </HashLink >
            </ListItem>
            ))}
          </Box>
          </Box>
          

          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg:"flex" }, marginLeft:'auto' }}>
            <ListItem sx={{marginRight:'15px'}}>
              <Link smooth  to="/contactUs" style={{ textAlign:'center', textDecoration: 'none', scrollBehavior: 'smooth'}}>
                <ListItemButton sx={{width:'150px', px:'29px',  py:'18px', textAlign:'center', color: darkMode ? '#c9c7c7' : 'white', backgroundColor: darkMode ? '#212427' : 'black', border:'1px solid #383839',  borderRadius:'35px', transition: 'background-color 0.3s ease', '&:hover': {backgroundColor:'#00c062'}, '&:active': {backgroundColor:'#00c062'}, fontFamily:'Inter', fontSize:'1rem'}}>Contact Us</ListItemButton>
              </Link>
            </ListItem>

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
            // flexShrink: 0,
            '& .MuiDrawer-paper': {
              backgroundColor: darkMode ? '#212427' : '#f6fbf6',
              // border:'1px solid #383839', borderRadius:'35px', 
              width: '100%',
              // margin:'auto',
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

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;