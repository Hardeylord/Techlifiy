import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayouts from './MainLayouts/MainLayouts'
import HomePage from './Pages/HomePage'
import Card from './Components/Card'
import ImageSlider from './Pages/ImageSlider'
import UseEffect from './Pages/UseEffect'
import Practice from './Pages/Practice'
import Circ from './Pages/Circ'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayouts/>}>
      <Route index element={<Circ/>}/>
      <Route path='card' element={<Card />}/>
      <Route path='practice' element={<Practice />}/>
      <Route path='slider' element={<ImageSlider />}/>
      <Route path='useeffect' element={<UseEffect />}/>
      
      <Route path='circ' element={<HomePage />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
