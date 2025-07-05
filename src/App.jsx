import React from 'react'
import Home from './pages/Home/Home'
import Trends from './components/Trends/Trends'
import Reasons from './components/Reasons/Reasons'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div className='bg-black  text-white'>
      <Home/>
      <Trends/>
      <Reasons/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default App