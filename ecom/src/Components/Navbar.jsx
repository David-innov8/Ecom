import React from 'react'
import Logo from '../Assets/Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown'

export const Navbar = () => {
  return (
    <div className=' flex items-center justify-around py-7 px-20'>

        <div className='h-6'>
            <img  className='cursor-pointer h-full w-full' src={Logo}/>
        </div>
        

        <div className='flex  '>
           <a className='mr-4 cursor-pointer text-xs'>Gadgets</a>
           <a className='mr-4 cursor-pointer text-xs'>Footwear</a>
            
           <a className='mr-4 cursor-pointer text-xs'>Clothes</a>
           <a className=' cursor-pointer text-xs'>everything</a>
            

        </div>

        <div className='flex items-center justify-between text-xs ml-5'>
            <h2>07067871512</h2>

        <button className='box-border border border-red-300 text-red-300 px-4 ml-5 text-xs py-2 whitespace-nowrap'>Request a call</button>
       
        <FontAwesomeIcon className=' ml-5' icon={faCartShopping} />
        
        </div>
{/* 
        <Dropdown/> */}
    </div>
  )
}
