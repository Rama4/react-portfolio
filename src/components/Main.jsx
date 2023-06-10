import React from 'react'
import About from './About/About'
import Contact from './Contact'
import Home2 from "./Home/Home2";
import Projects from './Projects/Projects'

const Main = () => {
  return (
    <div>
        <Home2/>
        {/* <About/> */}
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Main