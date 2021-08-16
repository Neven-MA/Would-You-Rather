import React,{Fragment} from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import {handleInitialData} from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Login from './Login.js'
import LeaderBoard from './LeaderBoard.js'
import NewQuestion from './NewQuestion.js'
import Home from './Home.js'
import NavBar from './NavBar.js'
import Error from './Error.js'
import PollContainer from './PollContainer.js'

class App extends React.Component{
 componentDidMount(){
   this.props.dispatch(handleInitialData())
 }
  render(){
    const {authedUser}=this.props
    return (
    <Router>
    <Fragment>
     <LoadingBar style={{ backgroundColor: 'PaleTurquoise', height: '3px' }} />
     {authedUser===null?(<Route path="/" component={Login}/>):
     (<Fragment>
       <NavBar/>
       <Switch>
       <Route exact path="/" component={Home}/>
       <Route  path="/add" component={NewQuestion}/>
       <Route  path="/leaderboard" component={LeaderBoard}/>
       <Route  path="/questions/:id" component={PollContainer}/>
       <Route component={Error}/>
       </Switch>
       </Fragment>
     )
     }
    </Fragment>
    </Router>
  );
 }
}

const mapStateToProps=({authedUser})=>{
  return{authedUser}
}

export default connect(mapStateToProps)(App);
