import React from 'react'
import Logo from '../Assets/Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown'

export const Navbar = () => {
  return (
    <div className=' flex items-center justify-between py-7 px-24'>
        <img  className='cursor-pointer' src={Logo}/>

        <div className='flex  '>
           <a className='mr-5 cursor-pointer'>Gadgets</a>
           <a className='mr-5 cursor-pointer'>Footwear</a>
            
           <a className='mr-5 cursor-pointer'>Clothes</a>
           <a className='mr-5 cursor-pointer'>everything</a>
            

        </div>

        <div className='flex items-center justify-between '>
            <h2>07067871512</h2>

        <button className='box-border border border-red-300 text-red-300 px-5 py-3 ml-10'>Request a call</button>
       
        <FontAwesomeIcon className=' ml-5' icon={faCartShopping} />
        
        </div>

        <Dropdown/>
    </div>
  )
}
