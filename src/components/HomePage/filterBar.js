import React from 'react'
import CloseIcon from "@material-ui/icons/Close";
import Whatshot from "@material-ui/icons/Whatshot";
import NewReleases from "@material-ui/icons/NewReleases";
import TrendingUp from "@material-ui/icons/TrendingUp";
import Menu from "@material-ui/icons/Menu";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import './filterBar.css'

export function Filterbar(props) {
    
 return (
    <div className="main-bar">
      <div className="update-card">
        <div className="top-section">
          <span>UPDATES FROM POST-IT</span>
          <CloseIcon className="hoverable" />
        </div>
        <div className="body hoverable">
          <div className="context">
            <span className="title">Keep yourself safe and informed</span>
            <br />
            <span className="description">Visit r/Coronavirus to talk about COVID-19, and visit www.who.int for more information.</span>
          </div>
        </div>
      </div>

      <div className="filter-container">
        <div className="filter-element hoverable">
          <Whatshot />
          <span>Hot</span>
        </div>
        <div className="filter-element hoverable">
          <span>Everywhere</span>
          <ArrowDropDown />
        </div>
        <div id="new" className="filter-element-secondary2 hoverable">
          <NewReleases />
          <span>New</span>
        </div>
        <div className="filter-element-secondary2 hoverable">
          <TrendingUp />
          <span>Top</span>
        </div>
        <MoreHoriz className="filter-element-tertiary hoverable" />
        <div className="spacer"></div>
        <div className="filter-element-menu hoverable">
          <Menu />
          <ArrowDropDown />
        </div>
      </div>
    </div>
  );
}

export default Filterbar
