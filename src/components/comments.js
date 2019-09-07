import React, { Component } from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
// import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
// import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Header from './header'
import Detail from './detail'

import { login, fetchThreads, fetchComments, editComment, deleteComment } from '../redux/action'
import '../App.css'

class Comments extends Component {
    constructor(props) {
        
        console.log('Mount Comment')
        let token = localStorage.getItem('token')
        let id = localStorage.getItem('id')
        let name = localStorage.getItem('name')
        localStorage.removeItem('thread');
        let thread = props.match.params.id
        localStorage.setItem('thread', thread);
        console.log(token)
        if (token) {
            let user = {
                id: id,
                name: name,
                token: token
            }
            props.user_dispatch(user)
            props.threadList_dispatch(token)
            props.commentsList_dispatch(token)
            
        //   this.props.history.push('/threads/'+thread)
        }
        let threads=[]
        let currentThread =[]
        if(props.threads){
            threads = [...props.threads]
            currentThread = threads.filter( (item) => 
                item.id === parseInt(thread)
            )
        }
        super(props)
        this.state = {
            selectedThread : currentThread,
            threads: props.threads,
            relatedComments : [],
            comments : props.comments

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
        let thread = localStorage.getItem('thread')
        let comments=[]
        let relatedComments=[]
        console.log(this.props.comments)
        if(this.props.comments){
            comments = [...this.props.comments]
            relatedComments = comments.filter( (item) => item.thread === parseInt(thread) 
            )
        }
        console.log('Render Comment')
        return (
            <div>
              <Header></Header>
              <Detail selectedThread={this.state.selectedThread} />
            {
            relatedComments.map( (e, idx) => {
              return (
                <Paper key={idx} className={this.classes.root}>
                      
                    <Typography variant="h5" component="h3">
                        
                    <span dangerouslySetInnerHTML={{ __html:e.message }} />
                    </Typography>
                    <Typography component="p">
                    {new Date(e.date).toString()}
                    </Typography> 
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
        editComments_dispatch: (payload) => dispatch(editComment(payload)),
        deleteComment_dispatch: (payload) => dispatch(deleteComment(payload)),
    }
  }
  
  const Conn = connect(mapStateToProps, mapDispatchToProps)(Comments)
  export default Conn;
  