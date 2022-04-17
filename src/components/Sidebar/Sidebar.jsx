import React, { useContext } from 'react'
import './Sidebar.css'
import SidebarContext from '../../Contexts/SidebarContext'
import {FiTv ,FiZap ,FiGlobe ,FiAward,FiUser} from 'react-icons/fi'


function Sidebar() {
    const {isOpen} = useContext(SidebarContext)
  return (
       <div className={isOpen? "sidebar close" : "sidebar" }>
         <div className="sidebar_container">
           <div className="sidebar_card">
             <div className="sidebar_caption">
               <span>New Feeds</span>
             </div>
             <ul>
               
               <li>
                 <a href=" ">
                   <FiTv />
                   <span>NewsFeed</span>
                 </a>
               </li>
               <li> 
                 <a href=" ">
                   <FiAward />
                   <span>Badges</span>
                 </a>
               </li>
               <li>
                 <a href=" ">
                   <FiGlobe />
                   <span>Explore Stories</span>
                 </a>
               </li>
               <li>
                 <a href=" ">
                   <FiZap />
                   <span>Popular Groups</span>
                 </a>
               </li>
               <li>
                 <a href=" ">
                   <FiUser />
                   <span>Author Profile</span>
                 </a>
               </li>
             </ul>
           </div>
           <div className="sidebar_card">

           </div>
           <div className="sidebar_card">

           </div>
         </div>
       </div> 
  )
}

export default Sidebar