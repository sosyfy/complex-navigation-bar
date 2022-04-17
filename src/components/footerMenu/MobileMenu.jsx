import React from 'react'
import {FiHome ,FiPackage , FiLayout , FiLayers} from "react-icons/fi";
import './MobileMenu.css'

function MobileMenu() {
  return (
    <div className='footer-menu'>
      <a href=" " className="footer-icon">
        <FiHome />
      </a>
      <a href=" " className="footer-icon">
        <FiPackage />
      </a>
      <a href=" " className="footer-icon">
        <FiLayout />
      </a>
      <a href=" " className="footer-icon">
        <FiLayers />
      </a>
      <a href=" " className='footer-image'>
      <img src="http://uitheme.net/sociala/images/profile-4.png" alt="" />
      </a>
    </div>
  );
}

export default MobileMenu

