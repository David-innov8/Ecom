import {React, useState} from 'react'

 const Dropdown = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

    const [selectedOption, setSelectedOption] = useState(null)

    const optionSelected=(target)=>()=>{
        setSelectedOption(target)
        setIsOpen(false)
    }

    const options = ['Mangoes','Rice','beans']
     
  return (
    <div className=''>
   
        <div className= ' m-auto w-40 DropdownCotainer'>
            <div onClick={toggle} className='DropDownHeader  mb-3 py-2 px-8 font-medium cursor-pointer text-lg'>Mangoes</div>
            <img></img>
            {
                isOpen && (

                    <div className="DropdownListContainer">
                        <ul className='DropdownList  p-0 m-0 pl-4 bg-white border-2 text-lg font-medium first:pt-3 ' >
           {
            options.map(options=>(
                <li onClick={optionSelected(options)} key={Math.random()}>
                        {options}
                </li>
            )    
                
            
            )
           }
        </ul>
        </div>
   
                )


            }
    </div>
    </div>
  )
}


export default Dropdown;