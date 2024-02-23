import React from "react"
import Attribution from "./Components/Attribution"
import Modal from "./Components/Modal"
import Header from "./Components/Header"
import MapSection from "./Components/MapSection"

function App() {

  return (
    <div id="container"  className="font-custom">
<main>
<Modal/>
<Header/>
<MapSection/>

</main>

<div className="attribution">
  <Attribution/>
</div>
    </div>
  )
}

export default App
