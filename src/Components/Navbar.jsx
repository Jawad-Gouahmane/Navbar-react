import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (

    <div className='d-flex  align-items-center justify-content-between bg-dark text-white  '>
      <h1> Chi match</h1>

    <nav className='p-4'>
 
   <Link className='text-white p-4 text-decoration-none' to={'/'} >Accueil</Link>
   <Link className='text-white p-4 text-decoration-none' to={'/Reservation'} >Reservation</Link>
   <Link className='text-white p-4 text-decoration-none' to={'/Evenement'} >Evenement</Link>
   <Link className='text-white p-4 text-decoration-none' to={'/Shop'} >Shop</Link>
   <Link className='text-white p-4 text-decoration-none' to={'/Contact'} >Contact</Link>


    </nav>



        
    </div>
  )
}
