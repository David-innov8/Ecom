import {React, usestate} from 'react'

 const Dropdown = () => {

    const [isOpen, setIsOpen] = usestate(false)

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

  return (
    <div className=''>
        <h1>Custom drop down</h1>
        <div className= ' m-auto w-40 DropdownCotainer'>
            <div onClick={toggle} className='DropDownHeader  mb-3 py-2 px-8 font-medium text-lg'>Mangoes</div>
       
            <div className="DropdownListContainer">


            
        <ul className='DropdownList  p-0 m-0 pl-4 bg-white border-2 text-lg font-medium first:pt-3 ' >
            <li>Mangoes</li>
            <li>beans</li>
            <li>Rice</li>
        </ul>
        </div>
    </div>
    </div>
  )
}


export default Dropdown;