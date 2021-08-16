import React from 'react'
import {connect} from 'react-redux'
import {Icon,Label,Grid,Header,Image,Segment,Progress} from 'semantic-ui-react'

class PollResult extends React.Component{
  render(){
    const {question,user,authedUserVote}=this.props
    const optionOneVotes=question.optionOne.votes.length
    const optionTwoVotes=question.optionTwo.votes.length
    const totalVotes=optionOneVotes+optionTwoVotes

    let optionOneColour
    let optionTwoColour
    if(optionOneVotes>optionTwoVotes){
      optionOneColour={backgroundColor:'LavenderBlush '}
      optionTwoColour={backgroundColor:'Snow '}
    }
    if(optionTwoVotes>optionOneVotes){
      optionOneColour={backgroundColor:'Snow '}
      optionTwoColour={backgroundColor:'LavenderBlush '}
    }
    else{optionOneColour=optionTwoColour={backgroundColor:'Snow '}}

    return(
      <Grid  padded="vertically" columns={1} centered>
      <Grid.Row>
      <Grid.Column style={{ maxWidth: 550}}>
      <Segment style={{backgroundColor: 'Azure'}} color='yellow' >
      <Header as='h2' color='pink' textAlign='center'>Asked by {user.name}</Header>
      <Grid divided verticalAlign='middle'>
      <Grid.Row >
      <Grid.Column width={5}>
      <Image centered src={user.avatarURL} />
      </Grid.Column>
      <Grid.Column width={11}>
      <Header as='h4' color='pink' textAlign='center' content='Results:'/>
      <Segment style={optionOneColour}>
      {authedUserVote==='optionOne'&&<Label color='yellow' ribbon='right'>Your<br/>vote<Icon name='checkmark'/></Label>}
      <Header as='h5' color='pink'>{question.optionOne.text}</Header>
      <Progress percent={((optionOneVotes/totalVotes)*100).toFixed(2)} progress indicating>
      {optionOneVotes} out of {totalVotes} votes
      </Progress>
      </Segment>
      <Segment style={optionTwoColour}>
      {authedUserVote==='optionTwo'&&<Label color='yellow' ribbon='right'>Your<br/>vote<Icon name='checkmark'/></Label>}
      <Header as='h5' color='pink'>{question.optionTwo.text}</Header>
      <Progress percent={((optionTwoVotes/totalVotes)*100).toFixed(2)} progress indicating>
      {optionTwoVotes} out of {totalVotes} votes
      </Progress>
      </Segment>
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

const mapStateToProps=({questions,users,authedUser},{id,match})=>{
    let question
    let user
    let authedUserVote

    if(id!==undefined){
      question=questions[id]
      user=users[question.author]
      authedUserVote=users[authedUser].answers[question.id]
    }
    else{
      const {id}=match.params
      question=questions[id]
      user=users[question.author]
      authedUserVote=users[authedUser].answers[question.id]
    }

    return{
      question,
      user,
      authedUserVote
    }
  }

export default connect(mapStateToProps)(PollResult)
