import React,{useEffect,useState} from 'react'
import "./community.css";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import Button from '@material-ui/core/Button';
import axios from 'axios'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import {useHistory} from 'react-router-dom'

export function Community(props) {
    
const [communities, setCommunities] = useState([]);
const history = useHistory();

const fetchCommunities = () => {
  axios.get("http://localhost:8080/api/communities").then(res => {
    console.log(res);
    setCommunities(res.data);
  }).catch(err =>{
    console.log(err);
  })
}


useEffect(() => {
  fetchCommunities()
}, []);

function gotoCommunity(communityId) {
  history.push(`/community/${communityId}`)
}

function gotoTopCommunities() {
  history.push(`/communities/leaderboard`)
}

    return (
        <div className="community-section">
      <div className="title">
        <span className="hoverable">Top Growing Communities</span>
      </div>
      <div className="communities-wrapper">
        {communities.slice(0,5).map((community, index) => (
          <div key={community.id} className="community hoverable">
            <span style={{fontWeight:400}}>{index + 1}</span>
            <ArrowDropUp />
            <div onClick={() => gotoCommunity(community.id)} style={{color: "#000000"}}><span className="name">c/{community.name}</span></div>
        <span className="ml-auto mr-3"><PeopleAltIcon className="mr-2"/>{community.memberCount||0} Members</span>
            
          </div>
        ))}
      </div>
      <div className="action-buttons">
        
        <div className="secondary-buttons d-flex">
           <Button onClick={() => gotoTopCommunities()} size="small" className="ml-auto" style={{fontWeight:550,textTransform:"none",fontSize:12}} variant="contained" color="primary">
  More
</Button>
          
    
        </div>
      </div>
    </div>
    )
}

export default Community