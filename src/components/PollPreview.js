import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Button,Grid,Header,Image,Segment,Divider} from 'semantic-ui-react'

class PollPreview  extends React.Component{
  render(){
    const {question,user,id}=this.props
    return(
      <Segment style={{backgroundColor: 'Azure'}} color='yellow' >
      <Header as='h2' color='pink' textAlign='center'>{user.name} asks:</Header>
      <Grid divided  textAlign='center' verticalAlign='middle'>
      <Grid.Column width={5}>
      <Image centered src={user.avatarURL} />
      </Grid.Column>
      <Grid.Column width={11}>
      <Header as='h4' color='pink' content='Would you rather'/>
      <Header.Subheader>
      {question.optionOne.text} ...
      </Header.Subheader>
      <Divider hidden />
      <Link to={`/questions/${id}`}>
      <Button color='teal' fluid size='large'>View poll</Button>
      </Link>
      </Grid.Column>
      </Grid>
      </Segment>
    )
  }
}

const mapStateToProps=({questions,users},{id})=>{
    const question=questions[id]
    const user=users[question.author]
    return{
      question,
      user,
    }
  }

export default connect(mapStateToProps)(PollPreview)
