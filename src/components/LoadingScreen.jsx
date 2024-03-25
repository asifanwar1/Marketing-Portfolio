import React from 'react';
import { Box, } from '@mui/material';
import {GenLogoGreenIcon, } from '../assets/icons'


const LoadingScreen = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

      <GenLogoGreenIcon className="fade-in-out"/>

    </Box>
  );
};

export default LoadingScreen;




// import React, { useState, useEffect } from 'react';
// import { CircularProgress, Box } from '@mui/material';
// import { Fade, Flip } from 'react-awesome-reveal';
// import { VexaLogo, VexaLoadingLogo } from '../assets/images';
// import Loading from './Loading'

// const LoadingScreen = () => {
//   const [loading, setLoading] = useState(true);
//   const [backgroundColor, setBackgroundColor] = useState('#000');
//   const [flipDirection, setFlipDirection] = useState(true); // true for right to left, false for left to right

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setBackgroundColor('#fff'); // Final background color
//       setLoading(false);
//     }, 3000); // Change color after 3 seconds (adjust as needed)

//     const flipInterval = setInterval(() => {
//       setFlipDirection((prevDirection) => !prevDirection); // Flip direction back and forth
//     }, 2000); // Flip every 2 seconds (adjust as needed)

//     return () => {
//       clearTimeout(timeout);
//       clearInterval(flipInterval);
//     };
//   }, []);

//   return (
//     <>
//     <Loading />
    
//     <Box
//       sx={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         backgroundColor: backgroundColor,
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         zIndex: 9999,
//         overflow: 'hidden',
//         transition: 'background-color 1s ease-in-out', 
//       }}
//     >
//       <Fade triggerOnce>
//         <Box
//           sx={{
//             width: '100%',
//             height: '100%',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: '#212427', 
//           }}
//         >
       
//           <Flip
//             triggerOnce
//             direction={flipDirection ? 'vertical' : 'vertical-reverse'}
//             duration={1000}
//           >
//             <img
//               src={VexaLoadingLogo}
//               alt="VexaLogo"
//               style={{
//                 width: '10rem',
//                 maxWidth: '80%',
//                 maxHeight: '80%',
//                 transition: 'transform 1s ease-in-out',
//               }}
//             />
//           </Flip>
//         </Box>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '20%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//           }}
//         >
          
//         </Box>
//       </Fade>
//     </Box>
//     </>
//   );
// };

// export default LoadingScreen;


// import React, { useState, useEffect } from 'react';
// import { CircularProgress, Box, Typography, Grid } from '@mui/material';
// import { Fade, Flip, Bounce, Hinge, Rotate, AttentionSeeker } from 'react-awesome-reveal';
// import { VexaLoadingLogo } from '../assets/images';

// const LoadingScreen = () => {
//   const [backgroundColor, setBackgroundColor] = useState('#212427');
//   const [flipDirection, setFlipDirection] = useState(true); // true for right to left, false for left to right


//   const [animationCounter, setAnimationCounter] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAnimationCounter((prevCounter) => prevCounter + 1);
//     }, 500); // Trigger animation every 0.5 seconds (500 milliseconds)

//     setTimeout(() => {
//       clearInterval(interval);
//     }, 5000); // Stop the animation after 5 seconds (5000 milliseconds)

//     return () => clearInterval(interval); // Clean up interval on component unmount
//   }, []);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setBackgroundColor('#fff'); // Final background color
//     }, 3000); // Change color after 3 seconds (adjust as needed)

//     const flipInterval = setInterval(() => {
//       setFlipDirection((prevDirection) => !prevDirection); // Flip direction back and forth
//     }, 2000); // Flip every 2 seconds (adjust as needed)

//     return () => {
//       clearTimeout(timeout);
//       clearInterval(flipInterval);
//     };
//   }, []);

//   return (
//     <Box
//       sx={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         backgroundColor: backgroundColor,
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         zIndex: 9999,
//         overflow: 'hidden',
//         transition: 'background-color 1s ease-in-out', // CSS transition for background color
//       }}
//     >
//       {/* Sliding Diagonals Background Effect */}
//       <div
//         className="bg"
//         style={{
//           animation: 'slide 3s ease-in-out infinite alternate',
//           backgroundImage: 'linear-gradient(-60deg, #00c062 50%, #212427 50%)',
//           bottom: 0,
//           left: '-50%',
//           opacity: 0.5,
//           position: 'fixed',
//           right: '-50%',
//           top: 0,
//           zIndex: -1,
//         }}
//       ></div>
//       <div
//         className="bg bg2"
//         style={{
//           animationDirection: 'alternate-reverse',
//           animationDuration: '4s',
//         }}
//       ></div>
//       <div
//         className="bg bg3"
//         style={{
//           animationDuration: '5s',
//         }}
//       ></div>

//       {/* Content */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           textAlign: 'center',
//         }}
//       >
//         {/* <Fade triggerOnce> */}
//           <Grid container justifyContent="center" alignItems="center" spacing={2}>
//             {/* <Grid item xs={12}>
//               <Typography variant="h1" component="h1" sx={{ fontFamily: 'monospace' }}>
//                 Sliding Diagonals Background Effect
//               </Typography>
//             </Grid> */}
//             <Grid item xs={12}>
//               {/* Add your company logo */}
//               <Rotate
                
//                 // key={animationCounter}
//                 // direction={flipDirection ? 'vertical' : 'vertical-reverse'}
//                 duration={3000}
//               >
//                 <Box sx={{backgroundColor:'#262721', borderRadius:'24px', filter: 'drop-shadow(0px 0px 50px #05fa84)'}}>

//                 <img
//                   src={VexaLoadingLogo}
//                   alt="VexaLogo"
//                   style={{
//                     width: '10rem',
//                     maxWidth: '80%',
//                     maxHeight: '80%',
//                     transition: 'transform 1s ease-in-out',
//                   }}
//                 />
//                 </Box>
//               </Rotate>
//             </Grid>
//             {/* Loading Indicator (optional) */}
//             {/* <Grid item xs={12}>
//               <CircularProgress color="success" size={80} thickness={6} />
//             </Grid> */}
//           </Grid>
//         {/* </Fade> */}
//       </Box>
//     </Box>
//   );
// };

// export default LoadingScreen;
