import React from 'react'
import IconArrow from '../assets/images/icon-arrow.svg'
import { useGlobalContext } from '../Context'

const Header = () => {
  const{city,setCity, handleSubmit,location}=useGlobalContext()
  return (
    <section id="header-section" className='lg:pt-12' >
    <header className="flex item-center justify-center text-center">
      <h1 className="font-semibold text-2xl py-5  text-white font-sans" >IP Address Tracker</h1>
    </header>
    
        <form className="flex  flex-row items-center lg:justify-center sm:justify-between mx-5" onSubmit={handleSubmit} >
    <div className="w-screen lg:flex lg:item-center lg:justify-center  lg:w-1/3">
      <input type="text" placeholder=" Search for any IP address or domain"  className="px-5 sm:w-full sm:h-12 font-extrabold text-1.5xl " value={city} onChange={(e)=>setCity(e.target.value)}/>
    
    </div>
    
    
    
      <button type='submit' className="  bg-veryDarkGray w-16 h-12 hover:bg-darkGray " ><img src={IconArrow} alt="icon-arrow" className="flex item-center justify-center sm:px-4 lg:px-6 "/></button>
    
        </form>
      </section>
    )
}

export default Header