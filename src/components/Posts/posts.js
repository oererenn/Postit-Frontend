import React,{useEffect,useState} from 'react'
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
import {useHistory} from 'react-router-dom'
import authHeader from '../../Service/AuthHeader'

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

export function Posts(props) {
const classes = useStyles();
 const [posts, setPosts] = useState([]);
const history = useHistory();
const user = JSON.parse(localStorage.getItem('user'));

 const fetchPosts = () => {
    axios.get("http://localhost:8080/api/posts").then(res => {
        console.log(res);
        setPosts(res.data);
    }).catch(err => {
      console.log(err)
    })
 }

 function Upvote(postId){
   if(!user){
     history.push(`/login`)
   }else{
let voteData = {
  userId: user.id,
  postId: postId,
  voteType: "UP_VOTE"
}

axios.post("http://localhost:8080/api/votes", voteData, {
  headers: authHeader()
}).then(res => {
  console.log("up voted");
  fetchPosts()
  console.log(res);
}).catch(error => {
  console.log(error);
})
   }
   

 }

 function Downvote(postId) {
    if (!user) {
      history.push(`/login`)
    }else{
let voteData = {
  userId: user.id,
  postId: postId,
  voteType: "DOWN_VOTE"
}


axios.post("http://localhost:8080/api/votes", voteData, {
  headers: authHeader()
}).then(res => {
  console.log("down voted");
  fetchPosts()
  console.log(res);
}).catch(error => {
  console.log(error);
})
    }

 }


 

 useEffect(() => {
     fetchPosts()
 }, []);

 function gotoPost(postId){
history.push(`/post/${postId}`)
 }

if(posts.length === 0){
    return <div className="d-flex" style={{justifyContent:"center",justifyItems:"center"}}><h4>No Posts</h4></div>
}else{


    return (
        <div>
            {posts.map(post=>
    <Card key={post.id} className="mb-3 h-100 d-flex">
        <div style={{backgroundColor:"#F8F9FA"}} className="d-flex flex-row align-items-start justify-content-center">
        <Box style={{minWidth:35}}>
         <IconButton onClick={()=>Upvote(post.id)} aria-label="upvote"><ArrowUpwardIcon className={classes.upvote}/></IconButton>
         <div style={{fontWeight:500,marginLeft:19}}>{post.voteCount|| 0}</div>
         <IconButton onClick={()=>Downvote(post.id)} aria-label="downvote"><ArrowDownwardIcon className={classes.downvote}/></IconButton>

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
        {/* <Button startIcon={<ChatBubbleIcon/>}  style={{fontWeight:550,textTransform:"none",fontSize:12}}>
        {0}  Comments
        </Button> */}
            <div className="ml-auto" style={{fontWeight:550,textTransform:"none",fontSize:13, marginBottom:3.8}}>Posted by on {String(post.createdAt).substring(0,10)} by <a href="/login" style={{color: "#202020",fontWeight:600}}>{post.user.username}</a></div>
      </CardActions> </div>
    </Card>)}
         
    </div>
    )
    }
}

export default Posts
