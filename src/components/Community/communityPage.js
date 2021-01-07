import React, { useEffect, useState } from 'react'
import RuleBar from '../Posts/ruleBar'
import NavBar from '../NavBar/myNavBar'
import Footer from '../SideBar/myFooter'
import FilterBar from './communityFilterBar'
import CommunityPosts from './communityPosts'
import CommunityAbout from './communitAbout'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './communityPage.css'
import CommunityService from '../../Service/CommunityService'
export function Communitypage(props) {
    const [community, setCommunity] = useState([]);
    const { communityId } = useParams();
    const [isBusy, setIsBusy] = useState(true);
    const fetchCommunity = async (communityId) => {
        await axios.get(`http://localhost:8080/api/communities/${communityId}`).then(res => {
        
            setCommunity(res.data);
            setIsBusy(false)
        }).catch(err => {
            console.log(err);
        }) 
    }
    


    useEffect(() => {
        fetchCommunity(communityId)
    }, [communityId]);

    return (
        <div>{isBusy ? "Error" : <div className="community-page-grid-container">
            <div className="myNav w-100"><NavBar className="w-100" /></div>
            <div className="community-page-page-content">
                <div className="community-page-filterBar"><FilterBar communityName={community.name} /></div>
                <div className="community-page-posts"><CommunityPosts/></div>
            </div>
            <div className="community-page-side-menu">
                <div className="community-page-about"><CommunityAbout communityAbout={community.description} createdAt={community.createdAt} communityId ={community.id} community={community}/></div>
                <div className="community-page-rulebar"><RuleBar /></div>
                <div className="community-page-footer"><Footer /></div>
            </div>
        </div>}
        
        </div>
    )
}

export default Communitypage
