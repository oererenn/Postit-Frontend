import React,{useEffect,useState} from 'react'
import {
    makeStyles
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {useForm} from 'react-hook-form'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Divider from '@material-ui/core/Divider';
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export function Submitpost(props) {
    
 const [communities, setCommunities] = useState([]);
 const [image, setImage] = useState([]);
 const [success,setSuccess] = useState(false);
 const[err, setError] = useState(false);


 const fetchCommunities = () => {
     axios.get("http://localhost:8080/api/communities").then(res => {
         console.log(res);
         setCommunities(res.data);
     })
 }

 const addPost = (postData) => {
     axios.post("http://localhost:8080/api/posts", postData,{
     }).then(res => {
         console.log("file uploaded successfully");
         setSuccess(true)
         console.log(res);
     }).catch(err => {
         console.log(err);
         setError(true)
     })

 }


 useEffect(() => {
     fetchCommunities()
 }, []);


const { register, handleSubmit, reset} = useForm();
const user = JSON.parse(localStorage.getItem("user"));

const classes = useStyles();


const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

    setError(false);
    setSuccess(false);
};

 async function onSubmit(data) {
       
       data.userId = "52eb2084-1b1f-42fc-88ec-8d6dca1b86f4";
       const formData = new FormData();
       formData.append("file", image)
       formData.append("data", new Blob([JSON.stringify({
           "title": data.title,
           "description": data.description,
           "communityId": data.communityId,
           "userId": data.userId
       })],{
           type: "application/json"
       }))

       addPost(formData);

       
       setImage("")
       reset()
  }

   const handleChange = (e) => {
    const file = e.target.files[0]
    setImage(file);
  };

    return (
        <Card variant="outlined">
           
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="p-3">
        <div className="mb-3"><h4>Create Post</h4>
          <Divider/></div>



          <div className="input-group mb-4">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroupFileAddon01">Image</span>
  </div>
  <div className="custom-file">
    <input onChange={handleChange} type="file" className="custom-file-input" id="inputGroupFile01"
      aria-describedby="inputGroupFileAddon01"/>
    <label className="custom-file-label" htmlFor="inputGroupFile01">{image.name || "Choose file"}</label>
  </div>
</div>

        <FormControl variant="outlined" className="w-100 mb-3">
        <InputLabel required htmlFor="outlined-age-native-simple">Community</InputLabel>
        <Select
          required
          inputRef={register}
          name="communityId"
          native
          inputProps={{
            name: 'communityId',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          {communities.map(community=><option key={community.id} value={community.id}>{community.name}</option>)}
          
        </Select>
        </FormControl>

        <TextField className="mb-3 w-100" required inputRef={register} name="title" id="outlined-basic" label="Title" variant="outlined" />

        <TextField className="w-100"
          required
          inputRef={register}
          name="description"
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={8}
          variant="outlined"
        />
       

        <Button type="submit" className="mt-3" size="small" variant="contained" color="primary">
  Post
</Button>

</div>
    </form>
    <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Succsessfully send the post!
        </Alert>
    </Snackbar>
    <Snackbar open={err} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Error
        </Alert>
    </Snackbar>
    </Card>
    )
}

export default Submitpost
