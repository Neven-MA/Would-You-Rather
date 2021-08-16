import React from 'react'
import {connect} from 'react-redux'
import {Button,Form,Grid,Header,Image,Segment} from 'semantic-ui-react'
import {setAuthedUser} from '../actions/authedUser.js'

class Login extends React.Component{
  state={selectedUser:''}

  usersList=()=>{
    const {users}=this.props;
    return users.map((user)=>({
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src:user.avatarURL},
    }));
  }

  handleChange=(e,{value})=>{
    this.setState({selectedUser:value})
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    const {selectedUser}=this.state
    const{dispatch}=this.props
    dispatch(setAuthedUser(selectedUser))
  }

  render(){
    const {selectedUser}=this.state
    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 550}}>
      <Header as='h2' color='pink' >
      <Image src='/images/selection.png' spaced='right'/> Welcome to the Would You Rather App!
      <Header.Subheader className="ui teal ">
      Please sign in to continue
      </Header.Subheader>
      </Header>
      <Form onSubmit={this.handleSubmit}>
      <Segment style={{backgroundColor: 'Azure'}} color='yellow'>
      <Header as='h2' color='pink' textAlign='center' content='Sign in'/>
      <Form.Dropdown placeholder='Select User'
                     fluid
                     selection
                     options={this.usersList()}
                     value={selectedUser}
                     onChange={this.handleChange}/>
      <Button color='teal' fluid size='large' disabled={selectedUser===''}>Sign in</Button>
      </Segment>
      </Form>
      </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps=({users})=>{
  return{
    users:Object.values(users)
  }
}

export default connect(mapStateToProps)(Login)
