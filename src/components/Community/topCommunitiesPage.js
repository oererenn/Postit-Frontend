import React from 'react'
import Footer from '../SideBar/myFooter'
import RuleBar from '../Posts/ruleBar'
import NavBar from '../NavBar/myNavBar'
import TopCommunities from './topCommunities'
import './topCommunitiesPage.css'

export function Topcommunitiespage(props) {


  return (
    <div className="topCom-page-grid-container">
      <div className="myNav w-100"><NavBar className="w-100" /></div>
      <div className="topCom-page-page-content">
        <div className="topCom-page-posts"><TopCommunities /></div>
      </div>
      <div className="topCom-page-side-menu">
        <div className="topCom-page-rulebar"> <RuleBar /></div>
        <div className="topCom-page-footer"><Footer /></div>
      </div>
    </div>
  )
}

export default Topcommunitiespage
