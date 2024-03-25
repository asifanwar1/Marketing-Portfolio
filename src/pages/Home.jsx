import React, {useEffect, useState} from 'react'
import { DarkModeProvider } from '../context/DarkModeContext'
import HomePageComponents from '../components/HomePageComponents'
import LoadingScreen from '../components/LoadingScreen'

const Home = () => {
  
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
      <DarkModeProvider>
        {loading ? <LoadingScreen /> : <HomePageComponents />}
      </DarkModeProvider>
    </>
  )
}

export default Home