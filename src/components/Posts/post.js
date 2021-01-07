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
import { useParams } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useHistory } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';
import authHeader from '../../Service/AuthHeader'
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles((theme) => ({
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
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },

}));

export function Post(props) {
  const classes = useStyles();
  const [post, setPost] = useState([]);
  const [isBusy, setBusy] = useState(true)
  const [comments, setComments] = useState([])
  const { postId } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory()
  const fetchPost = (postId) => {
    axios.get(`http://localhost:8080/api/posts/${postId}`).then(res => {
      setPost(res.data);
      setBusy(false)
    }).catch(err => {
      console.log(err)
    })
  }

  const fetchPostComment = (postId) => {
    axios.get(`http://localhost:8080/api/posts/comment/${postId}`).then(res => {
      setComments(res.data)
      setBusy(false)
    }).catch(err => {
      console.log(err)
    })
  }

  const makeComment = (data) => {
    axios.post(`http://localhost:8080/api/comments`, data,{headers:authHeader()}).then(res => {
      fetchPost(postId)
      fetchPostComment(postId)
    }).catch(err => {
      console.log(err)
    })
  }

  const deleteComment = (commentId) => {
    axios.delete(`http://localhost:8080/api/comments/${commentId}`,{headers:authHeader()}).then(res => {
fetchPost(postId)
fetchPostComment(postId)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchPost(postId)
    fetchPostComment(postId)
  }, [postId]);

  function gotoLogin() {
    history.push("/login")
  }
  
  const DeleteSign = userId => {
    if(user){
      if(user.id === userId.userId){
         return <div className="ml-auto"><DeleteIcon/></div>
      }
    }
    return null
  }

  function gotoSignup() {
    history.push("/register")
  }

  const onSubmit = data => {
    data.postId = postId
    data.userId = user.id;
    makeComment(data);
    reset()
  };

  return (
    <div>
      {isBusy ? <div className={classes.root}>
        <CircularProgress />
      </div> : <div>
          <Card key={post.id} className="mb-3 h-100 d-flex">
            <div style={{ backgroundColor: "#F8F9FA" }} className="d-flex flex-row align-items-start justify-content-center">
              <Box style={{ minWidth: 35 }}>
                <IconButton><ArrowUpwardIcon className={classes.upvote} /></IconButton>
                <div style={{ fontWeight: 500, marginLeft: 19 }}>{post.voteCount || 0}</div>
                <IconButton><ArrowDownwardIcon className={classes.downvote} /></IconButton>

              </Box>
            </div>
            <div className="w-100">
              <CardActionArea className="w-100">
                {post.image ? <CardMedia
                  component="img"
                  alt=""
                  height="501"
                  image={post.image ? `http://localhost:8080/${post.id}/image/download` : null}
                  title={post.title}
                /> : <Box></Box>}

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {post.description}
                  </Typography>
                  <div> <a style={{ fontWeight: 402, textTransform: "none", fontSize: 12, color: "#555555" }} href="/login">c/{post.community.name}</a></div>
                </CardContent>
              </CardActionArea>

              <CardActions className="d-flex">
                <Button startIcon={<ChatBubbleIcon />} style={{ fontWeight: 550, textTransform: "none", fontSize: 12 }}>
                  {comments.length || 0}  Comments
        </Button>
                <div className="ml-auto" style={{ fontWeight: 550, textTransform: "none", fontSize: 13, marginBottom: 3.8 }}>Posted by on {String(post.createdAt).substring(0,10)} by <a href="/login" style={{ color: "#202020", fontWeight: 600 }}>{post.user.username}</a></div>

              </CardActions> </div>

          </Card>
        </div>}
      {localStorage.getItem("user") ? <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            Comment as <a href="/home" style={{ color: "#202020", fontWeight: 500 }}>{user.username}</a></div>
          <TextField className="w-100"
            style={{ backgroundColor: "#ffffff" }}
            inputRef={register}
            required
            name="text"
            id="outlined-multiline-static"
            label="What are your thoughts?"
            multiline
            rows={8}
            variant="outlined"
          />
          <Button type="submit" className="mt-3" size="small" variant="contained" color="primary">
            Comment
</Button></form>
      </div> : <div><Card className="h-100" variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>

          </Typography>
          <Typography className="d-flex justify-content-around" variant="h6" component="h6">
            <div style={{ color: "#A9A9A9", fontWeight: 450 }}>Log in or sign up to leave a comment</div>
            <ButtonGroup disableElevation variant="contained" color="primary">
              <Button size="small" onClick={gotoLogin}>Login</Button>
              <Button size="small" onClick={gotoSignup}>Sign up</Button>
            </ButtonGroup>
          </Typography>


        </CardContent>

      </Card></div>}
      <div>

        {comments.map(comment =>
          <Card key={comment.id} className="mt-3 d-flex" variant="outlined">
            <div style={{ backgroundColor: "#F8F9FA" }} className="d-flex flex-row align-items-start justify-content-center">
              <Box style={{ minWidth: 30 }}>
                <IconButton><ArrowUpwardIcon className={classes.upvote} /></IconButton>
                <div style={{ fontWeight: 500, marginLeft: 19 }}>{0}</div>
                <IconButton><ArrowDownwardIcon className={classes.downvote} /></IconButton>

              </Box>
            </div>
            <CardContent className="w-100">
              <Typography className="w-100" style={{ fontSize: 14 }} color="textSecondary">
                <div className="d-flex">
                <div><a style={{ color: "#555555", fontWeight: 550 }} href="/home">{comment.user.username}</a> on {String(comment.createdAt).substring(0,10)}</div>
             <div onClick={()=> deleteComment(comment.id)} className="ml-auto"><DeleteSign userId={comment.user.id}/></div>
                </div>
              </Typography>
              <Typography>
                {comment.text}
              </Typography>

            </CardContent>

          </Card>

        )}

      </div>
    </div>
  )
}

export default Post;
