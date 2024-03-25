import { useState } from 'react'
import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import Page1 from './pages/porfolio/Page1';
import ContactPage from './pages/ContactPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route index path="/" element={<Home/>} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/contactUs" element={<ContactPage />} />
      <Route path="/portfolio/page1" element={<Page1 />} />
    </Route>
  )
)

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
