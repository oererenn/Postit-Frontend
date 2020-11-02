import React from 'react'
import './myFooter.css'

export function Myfooter(props) {
    

    return (
        <div className="footer-section pt-3">
      
      <div className="footers-wrapper">
        <ul style={{listStyle:"none"}}>
           <li><a style={{color:"#000000"}} href="/login">Help</a></li> 
            <li><a style={{color:"#000000"}} href="/login">About</a></li>
              <li><a style={{color:"#000000"}} href="/login">Terms</a></li> 
             <li><a style={{color:"#000000"}} href="/login">Privacy Policy</a></li> 
           
        </ul>

      </div>
    </div>
    )
}

export default Myfooter
