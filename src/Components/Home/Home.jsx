import React from 'react'
import "./Home.css"
// import img from "../../Images/coln9.jpg"
const Home = (props) => {
  const{
    img,
    road,
    city,
    dollar,
    beds
  }=props.dataSet;
    return (
    <div>
       <div>

       </div>
        <div className='full'>
            <img className='imgg' src={img} alt="" />
            <h1>{road}</h1>
            <h1>{city}</h1>
            <h4>{dollar}</h4>
            <h5>{beds}</h5>
        </div>

       


    </div>
  )
}

export default Home