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
export function Communitypage(props) {
    const [community, setCommunity] = useState([]);
    const { communityId } = useParams();

    const fetchCommunity = async (communityId) => {
        await axios.get(`http://localhost:8080/api/communities/${communityId}`).then(res => {
            console.log(res);
            setCommunity(res.data);
        }).catch(err => {
            console.log(err);
        })
    }


    useEffect(() => {
        fetchCommunity(communityId)
    }, [communityId]);

    return (
        <div className="community-page-grid-container">
            <div className="myNav w-100"><NavBar className="w-100" /></div>
            <div className="community-page-page-content">
                <div className="community-page-filterBar"><FilterBar communityName={community.name} /></div>
                <div className="community-page-posts"><CommunityPosts/></div>
            </div>
            <div className="community-page-side-menu">
                <div className="community-page-about"><CommunityAbout communityAbout={community.description} createdAt={community.createdAt}/></div>
                <div className="community-page-rulebar"><RuleBar /></div>
                <div className="community-page-footer"><Footer /></div>
            </div>
        </div>
    )
}

export default Communitypage
