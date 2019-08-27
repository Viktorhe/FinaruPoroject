import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { login, fetchThreads, fetchComments, editComment, deleteComment } from '../redux/action'
import '../App.css'

class Comments extends Component {
    UNSAFE_componentWillMount() {
        
        let token = localStorage.getItem('token')
        let id = localStorage.getItem('id')
        let name = localStorage.getItem('name')
        let thread = this.props.match.params.id
        if (token) {
            let user = {
                id: id,
                name: name,
                token: token
            }
            this.props.user_dispatch(user)
            this.props.threadList_dispatch(token)
            this.props.commentsList_dispatch(token)
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
        return (
            <div>

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
        editComments_dispatch: (payload) => dispatch(editComment(payload)),
        deleteComment_dispatch: (payload) => dispatch(deleteComment(payload)),
    }
  }
  
  const Conn = connect(mapStateToProps, mapDispatchToProps)(Comments)
  export default Conn;
  