import React from 'react'
import Footer from '../SideBar/myFooter'
import RuleBar from './ruleBar'
import NavBar from '../NavBar/myNavBar'
import './postPage.css'
import Post from './post'


export function Postpage(props) {



    return (
        <div className="post-page-grid-container">
            <div className="myNav w-100"><NavBar className="w-100" /></div>
            <div className="post-page-page-content">
                <div className="post-page-posts"><Post /></div>
            </div>
            <div className="post-page-side-menu">
                <div className="post-page-rulebar"> <RuleBar /></div>
                <div className="post-page-footer"><Footer /></div>
            </div>
        </div>
    )
}

export default Postpage;
