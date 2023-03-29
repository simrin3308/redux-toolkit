import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const items = useSelector((state)=> state.cart )
  return (
    <div className='flex justify-between p-5 text-lg'>
        <span>Redux Store</span>
        <div>
            <Link className='pr-8' to='/'>Home</Link>
            <Link className='px-8' to='/Cart'>Cart</Link>
            <span className='px-8'>Cart Items: {items.length}</span>
        </div>
    </div>
  )
}

export default Navbar