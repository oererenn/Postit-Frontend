import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import axios from 'axios'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const useStyles = makeStyles({
    upvote: {
        color: "",
        '&:hover': {
            color: "#C53700",
        },
    },
    downvote: {
        color: "",
        '&:hover': {
            color: "#5F73CB",
        },
    },
});

export function Communityposts(props) {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);
    const history = useHistory();
    const { communityId } = useParams();
    
    const fetchCommunityPosts = async (communityId) => {
        await axios.get(`http://localhost:8080/api/communities/${communityId}/posts`).then(res => {
            console.log(res);
            setPosts(res.data);
        }).catch(err => {
            console.log(err)
        })
    }
    console.log(communityId)
    useEffect(() => {
        fetchCommunityPosts(communityId)
    }, [communityId]);

    function gotoPost(postId) {
        history.push(`/post/${postId}`)
    }

    if (posts.length === 0) {
        return <div className="d-flex" style={{ justifyContent: "center", justifyItems: "center" }}><h4>No Posts</h4></div>
    } else {

        return (
            <div>
            {posts.map(post=>
    <Card key={post.id} className="mb-3 h-100 d-flex">
        <div style={{backgroundColor:"#F8F9FA"}} className="d-flex flex-row align-items-start justify-content-center">
        <Box style={{minWidth:35}}>
         <IconButton><ArrowUpwardIcon  className={classes.upvote}/></IconButton>
         <div style={{fontWeight:500,marginLeft:19}}>{post.voteCount|| 0}</div>
         <IconButton><ArrowDownwardIcon className={classes.downvote}/></IconButton>

        </Box>
        </div>
        <div className ="w-100">
      <CardActionArea onClick={() => gotoPost(post.id)} className="w-100">
        {post.image ? <CardMedia
          component="img"
          alt=""
          height="300"
          image = {post.image ? `http://localhost:8080/${post.id}/image/download` : null}
          title={post.title}
        /> : <Box></Box>}
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" component="p">
            {post.description}
          </Typography>
         <div> <a style={{fontWeight:400,textTransform:"none",fontSize:12,color: "#555555"}} href ="/login">c/{post.community.name}</a></div>
        </CardContent>
      </CardActionArea>
     
      <CardActions className="d-flex">
        <Button startIcon={<ChatBubbleIcon/>}  style={{fontWeight:550,textTransform:"none",fontSize:12}}>
        {post.comments.length||0}  Comments
        </Button>
            <div className="ml-auto" style={{fontWeight:550,textTransform:"none",fontSize:13, marginBottom:3.8}}>Posted by on {post.createdAt} by <a href="/login" style={{color: "#202020",fontWeight:600}}>{post.user.username}</a></div>
      </CardActions> </div>
    </Card>)}
         
    </div>
        )
    }
}

export default Communityposts
