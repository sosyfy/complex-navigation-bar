import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Routes , Route} from 'react-router-dom'
import Home from '../Home/Home';
import About from '../about/About';
import Contact from '../contact/Contact';
import MobileMenu from '../../components/footerMenu/MobileMenu';
import './MainPage.css'

function MainPage() {
  return (
    <main>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
      <MobileMenu/>
    </main>
  );
}

export default MainPage