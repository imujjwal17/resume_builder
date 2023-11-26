import React from "react"
import Nav from "./Component/Nav"
import Hero from "./Component/Hero"
import Intro from "./Component/Intro"
import Footer from "./Component/Footer"
import Copyright from "./Component/Copyright"
function App() {

  return (
    <>
      <div className="relative">
        <Nav/>
      </div>
      <div className="relative">
        <Hero/>
      </div>
      <div className="relative">
        <Intro/>
      </div>
      <div className="relative">
        <Footer/>
      </div>
      <div className="relative">
        <Copyright/>
      </div>
    </>
  )
}

export default App;
