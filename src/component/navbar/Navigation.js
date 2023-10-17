import React from 'react'
import './navigation.css'
import { Link } from 'react-router-dom'
function Navigation() {
  return (
    <div>
      <ul className='navi'>
        <div> 
            <li><h1 style={{color:'red'}}>The Movies </h1></li>
            </div>
        <div>
  <li><Link to='/'> Home</Link></li>
  <li><Link to='/add'>AjoutMovie</Link></li>
  <li><Link to='/movielist'>MovieList</Link></li>
  <li><Link to='/profile'>Profile</Link></li>
  </div>
</ul>
    </div>
  )
}

export default Navigation
