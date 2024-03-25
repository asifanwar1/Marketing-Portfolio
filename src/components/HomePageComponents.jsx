import React from 'react'
import DrawerAppBar from './DrawerAppBar'
import About from './About'
import Portfolio from './Portfolio'
import Footer from './Footer'
import { Box } from '@mui/material'
import { useDarkMode } from '../context/DarkModeContext'
import FAQs from './FAQs'
import Services from './Services'
import BannerImageSection from './BannerImageSection'
import TextBanner from './TextBanner'

const HomePageComponents = () => {

    const { darkMode } = useDarkMode();

  return (
    <>
        <Box sx={{backgroundColor: darkMode ? '#090808' : '#f6fbf6',}}>
            <DrawerAppBar/>
            <TextBanner/>
            <BannerImageSection/>
            <About/>
            <Services/>
            <Portfolio/>
            <FAQs/>
            <Footer/>
        </Box>
    </>
  )
}

export default HomePageComponents