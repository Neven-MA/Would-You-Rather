import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'
import {unsetAuthedUser} from '../actions/authedUser.js'

class Logout extends React.Component{
  handleClick=(e)=>{
    const {dispatch}=this.props
    dispatch(unsetAuthedUser())
  }

  render(){
    return(
      <Button basic color='yellow'
              floated='right'
              content='Logout'
              labelPosition="right"
              icon='log out'
              size='small'
              onClick={this.handleClick}/>
    )
  }
}

export default connect()(Logout)
