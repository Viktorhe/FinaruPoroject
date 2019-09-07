import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import '../App.css';

import { logout } from '../redux/action'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Logout = () => {
  localStorage.clear()
  window.location.reload()
}
const clearThread = () =>{
  console.log(localStorage.getItem('thread'))
  localStorage.removeItem('thread')
  console.log(localStorage.getItem('thread'))
}

const Header = ({logout_dispatch}) =>{
  const classes = useStyles();
  console.log('Mount Header')
  let token = localStorage.getItem('token')
  if(token)
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link className="transLink" to="/threads" onClick={ () => clearThread() }>React Forum</Link>
            </Typography>
            <Button color="inherit" onClick={ () => {
            logout_dispatch({})
            Logout()
            }
          }>Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  else
    return (
    <div>
    </div> 
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
      logout_dispatch: (payload) => dispatch(logout(payload))
    }
  }
  
  const Conn = connect(null, mapDispatchToProps)(Header)
  export default Conn;
  