import React,{useEffect,useState} from 'react'
import './topCommunities.css'
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import axios from 'axios'
import './topCommunities.css'
import {useHistory} from 'react-router-dom'
export function Topcommunities(props) {
    
const [thecommunities, settheCommunities] = useState([]);
const history = useHistory();
const fetchtheCommunities = () => {
    axios.get("http://localhost:8080/api/communities").then(res => {
        console.log(res);
        settheCommunities(res.data);
    }).catch(err => {
        console.log(err);
    })
}


useEffect(() => {
    fetchtheCommunities()
}, []);


function goCommunity(communityId) {
    history.push(`/community/${communityId}`)
}

    return (
        <div className="topCom-section">
      <div className="title">
        <span className="hoverable">Top Growing Communities</span>
      </div>
      <div className="communities-wrapper">
        {thecommunities.map((community, index) => (
          <div key={community.id} className="topCom hoverable">
            <span style={{fontWeight:550}}>{index + 1}</span>
            <ArrowDropUp />
            <div onClick={() => goCommunity(community.id)} style={{color: "#000000"}}><span className="name">c/{community.name}</span></div>
            <span className="ml-auto mr-3"><PeopleAltIcon className="mr-2"/>{community.memberCount ||0} Members</span>
            
          </div>
        ))}
      </div>
    </div> 
    )
}

export default Topcommunities