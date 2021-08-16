import React from 'react'
import {connect} from 'react-redux'
import {Button,Form,Grid,Header,Segment,Divider} from 'semantic-ui-react'
import {handleAddQuestion} from '../actions/shared.js'

class NewQuestion extends React.Component{
  state={
    optionOne:'',
    optionTwo:''
  }

  handleOptionOne=(e,{value})=>{
    this.setState({optionOne:value})
  }

  handleOptionTwo=(e,{value})=>{
    this.setState({optionTwo:value})
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    const {optionOne,optionTwo}=this.state
    const {dispatch}=this.props
    dispatch(handleAddQuestion(optionOne,optionTwo))
    this.props.history.push('/')
  }

 render(){
   const {optionOne,optionTwo}=this.state
   return(
     <Grid  padded="vertically" columns={1} centered>
     <Grid.Row>
     <Grid.Column style={{ maxWidth: 550}}>
     <Segment style={{backgroundColor: 'Azure'}} color='yellow'>
     <Header as='h2' textAlign='center' color='pink' content='Create New Question'/>
     <Divider/>
     <Header as='h4' color='pink' content='Complete the question:'/>
     <Form onSubmit={this.handleSubmit}>
     <Header as='h3' color='pink' content='Would you rather...'/>
     <Form.Input placeholder='Option One' onChange={this.handleOptionOne} value={optionOne}/>
     <Divider horizontal>OR</Divider>
     <Form.Input placeholder='Option Two' onChange={this.handleOptionTwo} vaue={optionTwo}/>
     <Form.Field>
     <Button color='teal' fluid size='large' >Submit</Button>
     </Form.Field>
     </Form>
     </Segment>
     </Grid.Column>
     </Grid.Row>
     </Grid>
   )
 }
}

export default connect()(NewQuestion)
