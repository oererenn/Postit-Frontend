import React from 'react'
import './communityAbout.css'
import Button from '@material-ui/core/Button';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Divider from '@material-ui/core/Divider';
import CakeIcon from '@material-ui/icons/Cake';
export function Communitabout(props) {


  return (
    <div className="communityAbout-section">
      <div className="title">
        <span className="hoverable">About Community</span>
      </div>
      <div className="communityAbouts-wrapper">
        <div className="p-3">{props.communityAbout}
          
          <div className="pt-3">  <span className=""><PeopleAltIcon style={{ color:"#00B400"}} className="mr-2"/>0 Members</span></div>
          <div><CakeIcon style={{ color: "#00B400" }} /><span className="pl-2">{props.createdAt || "November 12, 2020"}</span></div>
          <Divider />
        <div className="pt-3"><Button size="small" variant="contained" color="primary">
            Join
</Button></div>
          


        </div>

      </div>
    </div>
  )
}

export default Communitabout
