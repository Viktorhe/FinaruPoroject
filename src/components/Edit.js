import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editThread } from '../redux/action'

import '../App.css'

const Edit = ({editValue_state , editThread_dispatch}) => {
    let token = localStorage.getItem('token')
    let id = localStorage.getItem('id')
    if (token) {
        editThread_dispatch({form:this.state, token})
    }
    return (
        <div className="container-insert">
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
  return {
    editValue_state: state.edit_value,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editThread_dispatch: (payload) => dispatch(editThread(payload))
  }
}

const Conn = connect(mapStateToProps, mapDispatchToProps)(Edit)
export default Conn;