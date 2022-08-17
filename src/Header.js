import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
   <nav>
    <span>AniThings</span>
    <ul>
      <li><Link to='/' end>Encontrar</Link></li>
      <li><Link to='/Frases'>Frases</Link></li>
      <li><Link to='/Populares'>Populares</Link></li>
    </ul>
   </nav>
  )
}

export default Header;