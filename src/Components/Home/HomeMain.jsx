import React from 'react'
import { useState } from 'react'
import Home from './Home';
import data from '../../Images/Data/Data';
import "./Home.css"
import About from '../About/About';
import List from '../Featuring/List';
import Contact from '../Contact/Contact';
import logo from "../../Images/logo.jpg"

const HomeMain = () => {
    const [listOfData,setListOfData]= useState(data);

  return (

    
    <div className='main'>

           <div className='top'>
                      <div className='lgg'><img className='logo' src={logo} alt="" />
                      <h5 className='inc'>Village Properties</h5></div>
                          <h5 className='home'>Home</h5>
                         <a href="#about-section" className='about'> <h5 >About</h5></a>
                         <a className='feature' href="#list-section"> <h5 >Feature Listing</h5></a>
                          <a href="#contact-section" className='contact'><h5 >Contact</h5></a>
                      </div>
      {/* <video src="https://youtu.be/1K4fL_P5rQI?si=K_5r93JgJ_7QXv38" autoplay loop></video> */}
      <iframe
  width="100%"
  height="500"
  src="https://www.youtube.com/embed/1K4fL_P5rQI?autoplay=1&mute=1&loop=1&playlist=1K4fL_P5rQI"
  title="YouTube video"
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
></iframe>

      <div className='contmain'>
        <div className='cont1'>
            <h1>$23.5B+</h1>
            <h4>Worth Of Real Estate sold</h4>
            <h5>(Lifetime)</h5>
        </div>
        <div className='cont2'>
            <h1>175+</h1>
            <h4>Top Real Estate Agent</h4>
         
        </div>
        <div className='cont3'>
            <h1>14,100+</h1>
            <h5>Transactions(Lifetime)</h5>
        </div>
      </div>

        <div className='first'>
            <img src="https://media-production.lp-cdn.com/media/9a6c66b6-7734-4df9-a1ad-f06481aa6368" alt="" />
            <div className='child1'>
              <h1>About us</h1>
              <p>
              Founded in 1996 by Renee Grubb and her business partner, Village Properties represents a special connection between the people and places within the Santa Barbara region through highly trained and cultivated agents, and a focused mission on serving the community now and into the future.
              </p>
              <button className='read'>READ MORE</button>
            </div>
        </div>

        <div className='office'>
          <h1>Offices & Staff</h1>
          <h3>We support our Agents from three primary offices, with an experienced, multi-disciplinary support staff covering Marketing, Operations, Transaction Coordination, Finance, and Administration.
          </h3>
        </div>
        <div className='city'>
          <div className='citychild1'>
            <img className='cityimg1' src="https://media-production.lp-cdn.com/media/e3fe9647-f8d4-4fd6-a223-ae8ce2e79470" alt="" />
            <h1>Montecito</h1>
            <h5>1230 coast village road,monecito,CA 93180</h5>
          </div>
          <div className='citychild2'>
            <img className='cityimg2' src="https://media-production.lp-cdn.com/media/241172b5-fc9a-4617-b1ea-98495040c3f1" alt="" />
            <h1>Montecito</h1>
            <h5>1230 coast village road,monecito,CA 93180</h5>
          </div>
          <div className='citychild3'>
            <img className='cityimg3' src="https://media-production.lp-cdn.com/media/feecf415-1cde-4e93-911d-e06e071dcaac" alt="" />
            <h1>Montecito</h1>
            <h5>1230 coast village road,monecito,CA 93180</h5>
          </div>
        </div>
        
        <div id='about-section'>
        <About/>
       </div>
       
        <h1>Featured Properties</h1>
       <div className='flex'>
       
       {listOfData.map((dataTeam)=>(
            <Home key={dataTeam.id} dataSet={dataTeam}/>
        ))}
       </div>

      

          <div id='list-section'>
            <List/>
          </div>
          <div id='contact-section'>
            <Contact/>

          </div>
    
    </div>
    
  )
}

export default HomeMain