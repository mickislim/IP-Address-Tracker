import React from 'react'
import { useGlobalContext } from '../Context'

const Modal = () => {
  const {ip,location,isp} = useGlobalContext()


  return (
    <section id="modal-wrapper" className="fixed lg:top-64 sm:top-36 sm:w-6/6 lg:w-4/6 bg-white  lg:translate-x-40    sm:left-5   sm:right-5 lg:left-20 sm:h-64 lg:h-28 rounded-2xl z-50"  >

    <div id="modal" className="flex text-center py-3 lg:translate-y-4 item-center justify-center lg:flex-row sm:flex-col     "> 
      <article id="ip" className="lg:mx-5 my-2 lg:w-1/4 lg:text-start" >
        <p className="text-darkGray  "> IP Address</p>
        <h1 className="text-veryDarkGray font-extrabold text-1.5xl">{ip}</h1>
         
      
      </article>
      
      <article id="ip" className="lg:mx-5 my-2 lg:w-1/4  lg:text-start">
        <p className="text-darkGray ">Location</p>
        <h1 className="text-veryDarkGray font-extrabold text-1.5xl"></h1>
        
      
      </article >
      <article id="ip" className="lg:mx-5 my-2 lg:w-1/4 lg:text-start">
        <p className="text-darkGray ">Timezone </p>
        <h1 className="text-veryDarkGray font-extrabold text-1.5xl"></h1>
         
      
      </article>
      
      <article  className="lg:mx-5 my-2 lg:w-1/4 lg:text-start">
        <p className="text-darkGray "> ISP</p>
        <h1 className="text-veryDarkGray font-extrabold text-1.5xl">{isp}</h1>
         
      
      </article>

    </div>



 

 


  </section>
  )
}

export default Modal