import React from 'react'
import {connect} from 'react-redux'
import {Grid,Tab} from 'semantic-ui-react'
import PollPreview from './PollPreview.js'
import PollResult from './PollResult.js'

class Home extends React.Component{
  render(){
    const {answeredId,unansweredId}=this.props
    return(
      <Grid  padded="vertically" columns={1} centered>
      <Grid.Row>
      <Grid.Column style={{ maxWidth: 550}}>
      <Tab panes={panes({answeredId,unansweredId})} />
      </Grid.Column>
      </Grid.Row>
      </Grid>
    )
  }
}

const panes=(props)=>{
  const {answeredId,unansweredId}=props
  return[
    { menuItem: 'Unanswered', render: () => <Tab.Pane>{unansweredId.map((id)=><PollPreview key={id} id={id}/>)}</Tab.Pane> },
    { menuItem: 'Answered', render: () => <Tab.Pane>{answeredId.map((id)=><PollResult key={id} id={id}/>)}</Tab.Pane> },
  ]
}

const mapStateToProps=({questions,users,authedUser})=>{
  const authedUserAnswers=users[authedUser].answers
  const answeredId=Object.keys(authedUserAnswers).sort((a,b)=>questions[b].timestamp-questions[a].timestamp)
  console.log(answeredId)
  const unansweredId=Object.keys(questions).filter((id)=>!answeredId.includes(id)).sort((a,b)=>questions[b].timestamp-questions[a].timestamp)
  console.log(unansweredId)
  return {
    answeredId,
    unansweredId
  }
}

export default connect(mapStateToProps)(Home)
