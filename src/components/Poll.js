import React from 'react'
import {connect} from 'react-redux'
import {Button,Form,Grid,Header,Image,Segment,Radio} from 'semantic-ui-react'
import {handleSaveQuestionAnswer} from '../actions/shared.js'

class Poll extends React.Component{
  state={value:''}

  handleChange=(e,{value})=>{
    this.setState({value})
  }

  handleSubmit=(e)=>{
  e.preventDefault()
  const {dispatch,question,authedUser}=this.props
  const answer=this.state.value
  if(this.state.value!==null){
    dispatch(handleSaveQuestionAnswer(authedUser,question.id,answer))
   }
  }

  render(){
    const {question,user}=this.props
    const {value}=this.state
    return(
      <Grid  padded="vertically" columns={1} centered>
      <Grid.Row>
      <Grid.Column style={{ maxWidth: 550}}>
      <Segment style={{backgroundColor: 'Azure'}} color='yellow' >
      <Header as='h2' color='pink' textAlign='center'>{user.name} asks:</Header>
      <Grid divided  textAlign='center' verticalAlign='middle'>
      <Grid.Row >
      <Grid.Column width={5}>
      <Image centered src={user.avatarURL} />
      </Grid.Column>
      <Grid.Column width={11}>
      <Header as='h4' color='pink' content='Would you rather'/>
      <Form onSubmit={this.handleSubmit}>
        <Form.Field >
          <Radio
            label={question.optionOne.text}
            name='radioGroup'
            value='optionOne'
            checked={value === 'optionOne'}
            onChange={this.handleChange}
          />
      </Form.Field>
      <Form.Field>
      <Radio
            label={question.optionTwo.text}
            name='radioGroup'
            value='optionTwo'
            checked={value === 'optionTwo'}
            onChange={this.handleChange}/>
      </Form.Field>
      <Form.Field>

      <Button color='teal' fluid size='large' disabled={value===''}>Submit</Button>

      </Form.Field>
      </Form>
      </Grid.Column>
      </Grid.Row >
      </Grid>
      </Segment>
      </Grid.Column>
      </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps=({questions,users,authedUser},{id})=>{
    const question=questions[id]
    const user=users[question.author]

    return{
      question,
      user,
      authedUser,

    }
  }


export default connect(mapStateToProps)(Poll)
