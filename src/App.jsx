import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Footer from './components/Footer';
import Service from './components/Service';
import Contact from './components/Contact';
import About from './components/About';
import ProjectSlider from './components/ProjectSlider';
import Stats from './components/Stats';

const App = () => {


const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='font-["mont_blanc"] scroll-smooth md:scroll-auto'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Service />}/>
          <Route path="/project" element={<ProjectSlider />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/stats" element={<Stats />}/>
          <Route path="*" element={
          <div className='w-screen h-screen pt-20 text-4xl font-bold text-center'>
            404 ERROR - PAGE NOT FOUND
          </div>}/>
        </Routes> 
        <Footer />
      </Router>
    </div>
  )
}
export default App