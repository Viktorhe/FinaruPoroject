import React, {Component} from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from './logo192.png'
import { connect } from 'react-redux'
import { validateLogin, fetchThreads, fetchComments } from './redux/action'
import { Redirect,  withRouter  } from "react-router-dom";

class SignIn extends Component {
  constructor(){
    super()
    this.state = {
      email:'',
      password:'',
      error:''
    }
  }
  classes = () => {
    makeStyles(theme => ({
      '@global': {
        body: {
          backgroundColor: theme.palette.common.white,
        },
      },
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
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));
  }
  handleLogin = () => {
    this.props.login_dispatch(this.state)
    this.props.threads_dispatch(this.state)
    this.props.comments_dispatch(this.state)
    this.props.history.push('/threads')
  }

  render(){
    let id = localStorage.getItem('id')
    if (id) {
      this.props.history.push('/threads')
    }
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={this.classes.paper}>
          <Typography component="h1" variant="h1">
            &nbsp;
          </Typography>
          <Typography component="h1" variant="h5">
            React Forum
          </Typography>
        <img src={Logo} alt="logo" />
          <form className={this.classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => this.setState({email:e.target.value})}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => this.setState({password:e.target.value})
              }
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={this.classes.submit}
              onClick={ () => this.handleLogin() }
            >
              Sign In
            </Button>
            {this.state.error ? (
              <div className="error-login">
                {this.state.error}
              </div>
            ) : <div></div>}
          </form>
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token_state: state.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login_dispatch: (payload) => {
      dispatch(validateLogin(payload))
    },
    threads_dispatch: (payload) => {
      dispatch(fetchThreads(payload))
    },
    comments_dispatch: (payload) => {
      dispatch(fetchComments(payload))
    }
  }
}

const Conn = connect(mapStateToProps, mapDispatchToProps)(SignIn)
export default withRouter(Conn);
