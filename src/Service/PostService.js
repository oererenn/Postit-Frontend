import axios from "axios";

class PostService {

    async getPosts() {
        await axios.get("http://localhost:8080/api/posts").then(res => {
            return response.data;
        }).catch(error => {
            return error.response
        })
    }

    async getPost(postId) {
         await axios.get(`http://localhost:8080/api/posts/${postId}`).then(res => {
            return response.data;
         }).catch(error => {
            return error.response
         })
    }

    async addPost(postData) {
         await axios.post("http://localhost:8080/api/posts", postData, {}).then(res => {
             return response.data;
         }).catch(error => {
             return error.response  
         })
    }
}

export default new PostService();