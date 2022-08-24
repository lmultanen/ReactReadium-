import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id='navbar' className='row'>
      {/* <a>Stories</a>
      <a>Authors</a> */}
      <Link to='/stories'>Stories</Link>
      <Link to='/authors'>Authors</Link>
    </div>
  )
}

export default Navbar
