import React,{useEffect,useState} from 'react'
import './communityAbout.css'
import Button from '@material-ui/core/Button';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Divider from '@material-ui/core/Divider';
import CakeIcon from '@material-ui/icons/Cake';
import axios from 'axios'
import authHeader from '../../Service/AuthHeader'
export function Communitabout(props) {

const [community, setCommunity] = useState([]);
const [isBusy, setIsBusy] = useState(true);
const [buttonToggle, setButton] = useState("Join")
const user = JSON.parse(localStorage.getItem("user"));
const fetchCommunity = async () => {
  await axios.get(`http://localhost:8080/api/communities/${props.communityId}`).then(res => {
    setCommunity(res.data);
    setIsBusy(false)
  }).catch(err => {
    console.log(err);
  })
}


const addUserToCommunity = async () => {
await axios.post("http://localhost:8080/api/users/community", {communityId: props.communityId,
  userId: user.id},{headers:authHeader()}).then(res => {
    fetchCommunity()
    if(buttonToggle === "Leave"){
      setButton("Join")
    }else{
      setButton("Leave")
    }
  }).catch(err => {
    console.log(err);

  })
}

const getUserCommunities = async () => {
  await axios.get(`http://localhost:8080/api/users/${user.id}/communities`,{headers:authHeader()}).then(res => {
     for (var i = 0; i < res.data.length; i++) {
       if (res.data[i].id === props.communityId) {
         setButton("Leave")
         
       } else {
         setButton("Join")
       }
     }
  }).catch(err => {
    console.log(err);
  })
}

useEffect(() => {
 if(user){
    getUserCommunities()
  }
  fetchCommunity()
});

  return (
    <div>
      {isBusy? "loading" :<div className="communityAbout-section">
      <div className="title">
        <span className="hoverable">About Community</span>
      </div>
      <div className="communityAbouts-wrapper">
        <div className="p-3">{community.description}
          
          <div className="pt-3">  <span className=""><PeopleAltIcon style={{ color:"#00B400"}} className="mr-2"/>{community.memberCount ||0} Members</span></div>
          <div><CakeIcon style={{ color: "#00B400" }} /><span className="pl-2">{String(props.createdAt).substring(0,10) || "November 12, 2020"}</span></div>
          <Divider />
        {user ? <div id="joinButton" onClick={addUserToCommunity} className="pt-3"><Button size="small" variant="contained" color="primary">
            {buttonToggle}
</Button></div>:null}
          

        </div>

      </div>
    </div>}
    
    </div>
  )
}

export default Communitabout
