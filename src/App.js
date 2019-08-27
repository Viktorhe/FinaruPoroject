import React from 'react';
// import Logo from './logo.svg';
import { BrowserRouter as Router, Route , Link, Redirect} from "react-router-dom";
// import Axios from 'axios';
import {Provider} from 'react-redux'
import SignIn from './SignIn'
import Threads from './components/threads'
import Comments from './components/comments'
import Header from './components/header'
import Footer from './components/footer'
// import List from './components/list'
import './App.css';
import Store from './redux/store'

function App() {
  let token = localStorage.getItem('token')
  let thread = localStorage.getItem('thread')
  return (
    <Provider store={Store} >
    <div className="App">
      <Router>
        <Header>

        </Header>
        <Route exact path="/" render={() => 
        ( thread ? (<Redirect to={'/threads/'+thread}/>) : 
          (
            token ? (
              <Redirect to="/threads"/>
            ) : (
              <SignIn/>
            )
          )
        )
        }/>
        <Route path="/threads" component={Threads} />
        <Route path="/threads/:id" component={Comments} />
      </Router>
      <Footer>
      </Footer>
    </div>
    </Provider>
  );
}

  // eslint-disable-next-line
// function login(email,password){
//   let optmember = {
//     method:'get',
//     url:'https://my-json-server.typicode.com/Viktorhe/finaruporoject/user'
//   }
//   Axios(optmember)
//   .then (({data}) => {
//     let userFilter = (list) => list.filter(item => item.email === email && item.password === password)
//     let result  = userFilter(data)
//     if(result.length > 0){
//       return {
//         message:"login success",
//         id:result.id,
//         name:result.name
//       }
//     }
//     else{
//       return {
//         message:"login failed",
//         id:0,
//         name:""
//       }
//     }
//   })
//   .catch(error => {
//     return {
//       message:"login failed" + error,
//       id:0,
//       name:""
//     }
//   })
// }
// // eslint-disable-next-line
// function getThreads(){
//   let option = {
//     method:'get',
//     url:'https://my-json-server.typicode.com/Viktorhe/finaruporoject/threads'
//   }
//   Axios(option)
//   .then (({data}) => {
//     return data
//   })
//   .catch(error => {
//     console.error(error);
//   })
// }
// // eslint-disable-next-line
// function getComments(){
//   let option = {
//     method:'get',
//     url:'https://my-json-server.typicode.com/Viktorhe/finaruporoject/comments'
//   }
//   Axios(option)
//   .then (({data}) => {
//     return data
//   })
//   .catch(error => {
//     console.error(error);
//   })
// }

// const Home = () => {
//   // eslint-disable-next-line
//   const [threads, setThreads] = useState([])
//   // eslint-disable-next-line
//   let maping = getThreads()
//   if (threads.length === 0) {
//     return (
//         <div className='lists-card'>
//             <div className='list-card'>
//                 Loading...
//             </div>
//             <div className='list-card'>
//                 Loading...
//             </div>
//             <div className='list-card'>
//                 Loading...
//             </div>
//         </div>
//     )
//   } else {
//       return (
//           <div className='lists-card'>
//               {threads.map((item, idx) => {
//                   return (
//                       <div key={idx} className='list-card'>
//                           <div>{item.title}</div>
//                           <div>{item.date}</div>
//                           <div>{item.watched}</div>
//                           <Link to={'/thread/'+item.id}>Home</Link>
//                       </div>       
//                   )
//               })}
//           </div>
//       )
//   }
// }
// const Threads = ({ match }) => {
//   return (
//     <div>
//     {match.params.id}
//     </div>
//   );
// }

export default App;
