import React from 'react';
import { BrowserRouter as Router, Route , Redirect} from "react-router-dom";
import {Provider} from 'react-redux'
import SignIn from './SignIn'
import Threads from './components/threads'
import Comments from './components/comments'
import Footer from './components/footer'
import './App.css';
import Store from './redux/store'

function App() {
  return (
    <Provider store={Store} >
    <div className="App">
      <Router>
        <Route exact path="/" render={() => (
              localStorage.getItem('token') ? (
                <Redirect to="/threads"/>
              ) : (
                <Threads/>
              )
            )}/>
        <Route exact path="/" component={SignIn} />
        <Route path="/threads" component={Threads} />
        <Route path="/comments/:id" component={Comments} />
      </Router>
      <Footer>
      </Footer>
    </div>
    </Provider>
  );
}

export default App;
