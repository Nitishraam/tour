import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div>
       
       <div className='onecont'>
          <div>
            <img className='oneimg' src="https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/o8f8b9vmfstvjbr9ry72" alt="" />
          </div>
          <div className='onechild'>
            <h1>Mission Canyon</h1>
            <p>Mission Canyon is located just north of the downtown Santa Barbara and is also home to the highest
               peak in the Santa Ynez Mountains, La Cumbre Peak. It is a wooded hilly area beginning at the Old 
               Mission and extending along Foothill Road, north and east into Mission Canyon Road and Las Canoas
                Road. </p>
                <button>Explore Neighborhood</button>
          </div>
        </div>
    </div>
  )
}

export default About