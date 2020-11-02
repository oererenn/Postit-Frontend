import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from "react-hook-form";
import AuthService from '../AuthService/authService'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import EmailValidator from 'email-validator'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Post-It © '}
      <Link color="inherit" href="https://material-ui.com/">

      </Link>{' '}
      {new Date().getFullYear()}
      {''}
    </Typography>
  );
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function SignUp() {
  const classes = useStyles();

const { register, handleSubmit} = useForm();


 const[success,setSuccess] = useState(false);
 const[err, setError] = useState(false);
 const[message,setMessage] = useState("");

const onSubmit = data => {

const passregext = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;


  if(EmailValidator.validate(data.email)){
    if(passregext.test(data.password)){
AuthService.register(data.username, data.email, data.password).then(res => {

   setMessage(res.data.message)
   if (res.data.message === "Successfully registered!") {
     setSuccess(true)
   } else {
     setError(true)
   }
 }).catch(err => {


 })
    }else{
      setError(true)
      setMessage("Password should has a minimum eight and maximum 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character")
    }
 
  }else{
    setError(true)
    setMessage("Please enter a valid email")
  }
     
  }
  

const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

    setError(false);
    setSuccess(false);
};


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
              inputRef={register}
              name="username"
                autoComplete="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              inputRef={register}
              name="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputRef={register}
                name="password"
                variant="outlined"
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
        
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
       <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {message}
        </Alert>
    </Snackbar>
    <Snackbar open={err} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {message}
        </Alert>
    </Snackbar>
    </Container>
  );
}

export default SignUp