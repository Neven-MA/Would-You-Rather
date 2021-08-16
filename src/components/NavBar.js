import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {Menu,Image,Header} from 'semantic-ui-react'
import Logout from './Logout.js'

const NavBar=(props)=>{
    const {user}=props
    return(
    <Menu attached='top' color='yellow' pointing secondary stackable>
    <Menu.Item name='Home' as={NavLink} to='/' exact />
    <Menu.Item name='New Question'as={NavLink} to='/add'/>
    <Menu.Item name='Leader Board' as={NavLink} to='/leaderboard'/>
    <Menu.Menu position='right'>
    <Header as='h5' color='pink'>
    Hello, {user.name}
    <Image src={user.avatarURL} avatar spaced='left' verticalAlign='bottom'/>
    </Header>
    <Menu.Item>
    <Logout/>
    </Menu.Item>
    </Menu.Menu>
    </Menu>
    )
}

const mapStateToProps=({users,authedUser})=>{
  return{
    user:users[authedUser]
  }
}

export default connect(mapStateToProps)(NavBar)
