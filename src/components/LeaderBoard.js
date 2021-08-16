import React from 'react'
import {connect} from 'react-redux'
import {Label,Grid,Header,Image,Segment,Divider} from 'semantic-ui-react'

const LeaderBoard =(props)=>{
    const {usersData}=props
    const colors=['yellow','grey','orange']
    return(
      <Grid  padded="vertically" columns={1} centered>
      <Grid.Row>
      <Grid.Column style={{ maxWidth: 550}}>
       {usersData.map((user,index)=>
      (<Segment key={user.id} style={{backgroundColor: 'Azure'}} color='yellow'>
        <Label corner='left' color={colors[index]} icon='trophy'/>
      <Grid divided  textAlign='center' verticalAlign='middle'>
      <Grid.Row>
      <Grid.Column width={4}>
      <Image centered src={user.avatar} />
      </Grid.Column>
      <Grid.Column width={8}>
      <Header as='h4' color='pink' content={user.name}/>
      <Divider/>
      <Header.Subheader> Answered questions: {user.noOfAnswers}</Header.Subheader>
      <Divider/>
      <Header.Subheader> Created questions: {user.noOfQuestions}</Header.Subheader>
      </Grid.Column>
      <Grid.Column width={4}>
      <Segment>
      <Header as='h2' textAlign='center' color='pink' content='Score'/>
      <Divider/>
      <Label circular color='teal'>{user.total}</Label>
      </Segment>
      </Grid.Column>
      </Grid.Row>
      </Grid>
      </Segment>))}
      </Grid.Column>
      </Grid.Row>
      </Grid>
    )
}

const mapStateToProps=({questions,users,authedUser})=>{
  const usersData=Object.values(users).map((user)=>({
      name:user.name,
      id:user.id,
      avatar:user.avatarURL,
      noOfAnswers:Object.keys(user.answers).length,
      noOfQuestions:user.questions.length,
      total:Object.keys(user.answers).length+user.questions.length
  }))
  return{
     usersData:usersData.sort((a,b)=>b.total-a.total)
  }
}

export default connect(mapStateToProps)(LeaderBoard);
