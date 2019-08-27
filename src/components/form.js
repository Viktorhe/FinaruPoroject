import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addThread } from '../redux/action'

import '../App.css'

const Form  = ({addThread_dispatch}) => {
    let token = localStorage.getItem('token')
    let id = localStorage.getItem('id')
    if (token) {
        addThread_dispatch({form:this.state, token})
    }
    return (
        <div className="container-insert">
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      addThread_dispatch: (payload) => dispatch(addThread(payload))
    }
  }
  
  const Conn = connect(null, mapDispatchToProps)(Form)
  export default Conn;
  