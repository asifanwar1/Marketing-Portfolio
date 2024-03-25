import * as React from 'react';
import { Flip } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HomeIcon from '@mui/icons-material/Home';
import DatasetIcon from '@mui/icons-material/Dataset';
import { GenLogoGreenFab } from '../assets/icons'


const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },

  '&.MuiSpeedDial-root': {
    backgroundColor: 'transparent', // Set the background color of the SpeedDial container
  },
  '& .MuiFab-root': {
    transition: 'transform 0.3s ease-in-out', // Add a transition for the transform property
  },
  '& .MuiFab-root:hover': {
    transform: 'rotateY(180deg)', // Apply a flip effect on hover
  },
}));





const actions = [
  { icon: <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}><HomeIcon sx={{color:'#00c062', mt:'8px'}}/></Link>, name: 'Home',},
  { icon: <Link to='/contactUs' style={{ textDecoration: 'none', color: 'inherit' }}><ContactMailIcon sx={{color:'#00c062', mt:'8px'}}/></Link>, name: 'Contact' ,},
  { icon: <Link to='/portfolio' style={{ textDecoration: 'none', color: 'inherit' }}><DatasetIcon sx={{color:'#00c062', mt:'8px'}}/></Link>, name: 'Portfolio' ,},
];

export default function PlaygroundSpeedDial() {
  const [direction, setDirection] = React.useState('down');


  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>

      <Box sx={{ position: 'relative', mt: 3, height: 320 }}>
  
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          icon={<GenLogoGreenFab className='glyphicon'/>}
          direction={direction}
          FabProps={{ sx: { backgroundColor: 'white', '&:hover':{backgroundColor: 'white',}, p:'5px'} }} 
        >
          {actions.map((action) => (
          
            <SpeedDialAction
              key={action.name} 
              icon={action.icon}
              tooltipTitle={action.name}
              sx={{color:'white'}}
              />
       
          ))}
        </StyledSpeedDial>
    
      </Box>
    </Box>
  );
}