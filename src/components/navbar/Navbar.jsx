import React, { useState } from 'react'
import {
  FiZap,
  FiMessageCircle,
  FiVideo,
  FiSearch,
  FiHome,
  FiUser,
  FiShoppingBag,
  FiBell,
  FiMessageSquare,
  FiSettings,
} from "react-icons/fi";
import './Navbar.css'
import SidebarContext from '../../Contexts/SidebarContext';
import {useContext }  from 'react'

function Navbar() {
  const [search , setSearch] = useState('')
  const {isOpen , toggleSidebar} = useContext(SidebarContext)
  return (
    <header>
      {/* contains mobile menu and logo  */}
      <div className="nav-top">
        <div className="logo">
          <a href=" ">
            <FiZap />
            <span>Sociala. </span>
          </a>
        </div>
        <div className={isOpen ? "mobile-menu" : "mobile-menu active"}>
          <a href=" ">
            <FiMessageCircle />
          </a>
          <a href=" ">
            <FiVideo />
          </a>
          <a href=" ">
            <FiSearch />
          </a>
          <button
            onClick={toggleSidebar}
            className="humburger-menu"
          ></button>
        </div>
      </div>

      {/* search bar  */}

      <form action="">
        <div className="search-bar">
          <FiSearch />
          <input
            type="search"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="start typing to search"
          />
        </div>
      </form>

      {/* menu one  */}

      <div className="secondary-menu">
        <a href=" ">
          <FiHome />
        </a>
        <a href=" ">
          <FiZap />
        </a>
        <a href=" ">
          <FiVideo />
        </a>
        <a href=" ">
          <FiUser />
        </a>
        <a href=" ">
          <FiShoppingBag />
        </a>
      </div>

      {/* second menu  */}

      <div className="main-menu">
        <a href=" " className="header-notification-icon">
          <span></span>
          <FiBell />
        </a>
        <a href=" " className="header-message-icon">
          <FiMessageSquare />
        </a>
        <a href=" " className="header-settings-icon">
          <FiSettings />
        </a>
        <img src="http://uitheme.net/sociala/images/profile-4.png" alt="" />
      </div>
    </header>
  );
}

export default Navbar