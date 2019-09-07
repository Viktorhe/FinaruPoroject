import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route , Link, withRouter} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import DetailsIcon from '@material-ui/icons/Details';
// import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import Header from './header'
import Comments from './comments'

import { login, fetchThreads, fetchComments, deleteThread, editThread } from '../redux/action'
import '../App.css'


class Threads extends Component {
  constructor(props) {
    super(props)
        let token = localStorage.getItem('token')
        let id = localStorage.getItem('id')
        let name = localStorage.getItem('name')
        localStorage.removeItem('thread')
        if (token) {
          let user = {
              id: id,
              name: name,
              token: token
          }
          this.props.user_dispatch(user)
          this.props.threadList_dispatch(token)
          this.props.commentsList_dispatch(token)
          this.props.history.push('/threads')
          
        }
        else{
            if (this.props.history) {
                this.props.history.push('/')
            }
        }
      }
    classes = () =>{
        makeStyles(theme => ({
            root: {
            padding: theme.spacing(3, 2),
            },
        }));
    }
    render(){
        let threads=[]
        if(this.props.threads)threads = [...this.props.threads]

        return (
            <div>
              <Header></Header>
                {
            threads.map( (e, idx) => {
              return (
                <Paper key={idx} className={this.classes.root}>
                      
                    <Typography variant="h5" component="h3">
                    {e.title}
                    </Typography>
                    <Typography component="p">
                    {new Date(e.date).toString()}
                    </Typography> 
                    <Typography component="p">
                    {[...e.category].toString()}
                    </Typography>
                    <Typography component="p">
                        Watched : {e.watched}
                    </Typography>
                    <Link to={`/comments/${e.id}`} ><DetailsIcon></DetailsIcon></Link>
                </Paper>
              )
            })
          }
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        threads: state.threads,
        comments: state.comments
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        user_dispatch: (payload) => {
          dispatch(login(payload))
        },
      threadList_dispatch: (payload) => dispatch(fetchThreads(payload)),
      commentsList_dispatch: (payload) => dispatch(fetchComments(payload)),
      deleteThread_dispatch: (payload) => dispatch(deleteThread(payload)),
      editThread_dispatch: (payload) => dispatch(editThread(payload)),
    }
  }
  
  const Conn = connect(mapStateToProps, mapDispatchToProps)(Threads)
  export default withRouter(Conn);
  