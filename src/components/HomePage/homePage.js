import React from 'react'
import './homePage.css'
import NavBar from '../NavBar/myNavBar'
import Posts from '../Posts/posts'
import Community from '../SideBar/community'
import FilterBar from './filterBar'
import TopicBar from '../SideBar/topics'
import Footer from '../SideBar/myFooter'

export function Homepage(props) {
    return (
        <div className ="home-page-grid-container">
         <div className = "myNav w-100"><NavBar className="w-100"/></div>
         <div className="home-page-page-content">
         <div className ="home-page-posts"><Posts/></div>
         <div className ="home-page-filterBar"><FilterBar/></div>
         </div>
         <div className="home-page-side-menu"> 
        <div className ="home-page-community"><Community/></div>
        <div className ="home-page-topic"><TopicBar/></div>
        <div className ="home-page-footer"><Footer/></div>
         </div>
         </div>
    )
}

export default Homepage



