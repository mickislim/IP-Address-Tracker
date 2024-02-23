import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const GlobalContext = createContext()

export const useGlobalContext =()=>useContext(GlobalContext)

const AppContext =({children})=>{
const [city,setCity] = useState('')
const [inputLocation,setInputLocation]=useState([])
const [ipAddress,setIpAddress] = useState('192.212.174.101')
const [cordinates,setCordinates]= useState([])




  const url = ` https://geo.ipify.org/api/v2/country?apiKey=at_r9R8a10vzGPZ7Q7xCKwIAiNyLj0XO&ipAddress=${ipAddress}`



  const fetchLocation = async () => {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const newLocation = await response.json();
      console.log("API Response:", newLocation); // Log the response to inspect its structure
      setInputLocation(newLocation)
      const geometry = inputLocation.location[0].geometry
      const lat = geometry.lat
      const lng = geometry.lng
      setCordinates([lat,lng])
  
    } catch (error) {
      console.error("Error fetching location:", error.message);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city) {
      return;
    }

   
  };
  useEffect(()=>{
    fetchLocation()
   },[])

const {ip,location,isp}=inputLocation

    return <GlobalContext.Provider value={{city,setCity,handleSubmit,ip,location,isp,cordinates}}>
        {children}
    </GlobalContext.Provider>
}

export default AppContext