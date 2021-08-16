import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'
import {unsetAuthedUser} from '../actions/authedUser.js'

const Logout =(props)=>{
  const handleClick=(e)=>{
    const {dispatch}=props
    dispatch(unsetAuthedUser())
  }

  return(
      <Button basic color='yellow'
              floated='right'
              content='Logout'
              labelPosition="right"
              icon='log out'
              size='small'
              onClick={handleClick}/>
    )
}

export default connect()(Logout)
