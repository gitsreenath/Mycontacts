import React from 'react'
import {Link} from 'react-router-dom'



const Nav = () => {
  return (
<nav className='navbar bg-dark'>
  <div className="container-fluid">
    <Link className='navbar-brand text-light' to='/'>MY CONTACTS</Link>
<ul className='nav '>
  <li className='nav-item text-light'>
    <Link className='nav-link text-light' to='/'>HOME</Link>
  </li>
  <li className='nav-item' >
    <Link className='nav-link text-light' to='/Favorites'>FAVORITES</Link>
  </li>
</ul>
  </div>


</nav>
  )
}

export default Nav