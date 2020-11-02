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
           <li><a style={{color:"#000000"}} href="#">Help</a></li> 
            <li><a style={{color:"#000000"}} href="#">About</a></li>
              <li><a style={{color:"#000000"}} href="#">Terms</a></li> 
             <li><a style={{color:"#000000"}} href="#">Privacy Policy</a></li> 
           
        </ul>

      </div>
    </div>
    )
}

export default Myfooter
