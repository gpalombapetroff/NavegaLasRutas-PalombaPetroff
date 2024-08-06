import React from 'react'
import CartWidget from './CartWidget'

export const NavBar = () => {
  return (
    <nav className='nav'>
        <h2>Tienda</h2>
        <CartWidget/>
    </nav>
  )
}


