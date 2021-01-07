import axios from "axios";

class CommunityService {

async getCommunities(){
await axios.get("http://localhost:8080/api/communities").then(response => {
    return response.data;
}).catch(error => {
    return error.response
})
}

async getCommunity(communityId) {
    await axios.get(`http://localhost:8080/api/communities/${communityId}`).then(response => {
      
       return JSON.stringify(response.data);
    }).catch(error => {
        return error.response
    })
}

async getCommunityPosts(communityId) {
await axios.get(`http://localhost:8080/api/communities/${communityId}/posts`).then(response => {
    return response.data;
}).catch(error => {
    return error.response
})
}
}

export default new CommunityService();