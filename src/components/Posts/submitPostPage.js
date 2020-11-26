import React from 'react'
import NavBar from '../NavBar/myNavBar'
import RuleBar from './ruleBar'
import SubmitPost from './submitPost'
import Footer from '../SideBar/myFooter'
import './submitPostPage.css'
import { Redirect } from 'react-router-dom'

export function Submitpostpage(props) {

  if (!localStorage.getItem("user")) {
    return <Redirect to="/login" />
  }
  return (
    <div className="submit-page-grid-container">


      <div className="myNav w-100"><NavBar className="w-100" /></div>



      <div className="submit-page-page-content">
        <div className="submit-page-posts"><SubmitPost /></div>



      </div>



      <div className="submit-page-side-menu">
        <div className="submit-page-rulebar"> <RuleBar /></div>
        <div className="submit-page-footer"><Footer /></div>


      </div>



    </div>
  )
}

export default Submitpostpage
