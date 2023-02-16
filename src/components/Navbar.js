import React, { useState } from 'react';
import MenuData from './MenuData'
import './Navbar.css'

const Navbar = () => {
  const [clicked,setClikced] = useState(false)

  const handleClick= () => {
     setClikced(clicked ? false : true)
  }
  return (
    <nav className='navItems'>
      <h1 className='logo'>React</h1>
      <div className='menu-icons' onClick={handleClick}>
      <i className={clicked ? 'fas fa-times' : 'fa-solid fa-sliders'}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
       { MenuData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                <i className={item.icons} ></i>{item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  );
};

export default Navbar;