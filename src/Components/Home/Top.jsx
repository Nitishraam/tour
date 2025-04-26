import React from 'react'
import "./Home.css"
import logo from "../../Images/logo.jpg"
import About from '../About/About'

const Top = () => {
  return (
    <div>
          <div className='top'>
                <div className='lgg'><img className='logo' src={logo} alt="" />
                <h5 className='inc'>Village Properties</h5></div>
                    <h5 className='home'>Home</h5>
                    <h5 className='about'>About</h5>
                    <h5 className='feature'>Feature Listing</h5>
                    <h5 className='contact'>Contact</h5>
                </div>
    </div>
  )
}

export default Top