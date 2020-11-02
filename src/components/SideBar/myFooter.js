import React from 'react'
import './myFooter.css'

export function Myfooter(props) {
    
var footers = [{
    name: "Sports"
}]
    return (
        <div className="footer-section pt-3">
      
      <div className="footers-wrapper">
        <ul style={{listStyle:"none"}}>
           <li><a style={{color:"#000000"}} >Help</a></li> 
            <li><a style={{color:"#000000"}} >About</a></li>
              <li><a style={{color:"#000000"}} >Terms</a></li> 
             <li><a style={{color:"#000000"}} >Privacy Policy</a></li> 
           
        </ul>

      </div>
    </div>
    )
}

export default Myfooter
