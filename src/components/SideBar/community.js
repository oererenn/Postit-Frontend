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
  })
}
function handleBaba(){
  console.log("yey")
  history.push("/submit")
}

useEffect(() => {
  fetchCommunities()
}, []);

    return (
        <div className="community-section">
      <div className="title">
        <span className="hoverable">Top Growing Communities</span>
      </div>
      <div className="communities-wrapper">
        {communities.map((community, index) => (
          <div key={community.id} className="community hoverable">
            <span style={{fontWeight:550}}>{index + 1}</span>
            <ArrowDropUp />
            <a  href="" style={{color: "#000000"}}><span onClick={handleBaba} className="name">c/{community.name}</span></a>
            <span className="ml-auto mr-3"><PeopleAltIcon className="mr-2"/>0 Members</span>
            
          </div>
        ))}
      </div>
      <div className="action-buttons">
        
        <div className="secondary-buttons d-flex">
           <Button size="small" className="ml-auto" style={{fontWeight:550,textTransform:"none",fontSize:12}} variant="contained" color="primary">
  More
</Button>
          
    
        </div>
      </div>
    </div>
    )
}

export default Community