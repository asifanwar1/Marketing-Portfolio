import { Box } from '@mui/material'
import React from 'react'
import { BannerImage } from '../assets/images'
import { Zoom } from 'react-awesome-reveal'

const BannerImageSection = () => {
  const style = {
    position:'absolute', 
    top:'15rem',
    bottom:'18rem',
    width:'100%',
    height: '100vh',
    filter: 'drop-shadow(0px 0px 20px #1c1c1c)',
  }


  return (
    <>
        <Box sx={style}>
          <Zoom cascade direction='In' duration={3000}>
            <Box >
                <img src={BannerImage} alt='VexaBanner' style={{ width:'100%', height: '100vh', objectFit: 'cover',}} />
            </Box>
            </Zoom>
        </Box>
    </>
  )
}

export default BannerImageSection