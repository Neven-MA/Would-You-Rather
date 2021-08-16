import React from 'react'
import {connect} from 'react-redux'
import Poll from './Poll.js'
import PollResult from './PollResult.js'
import Error from './Error.js'

const PollContainer=(props)=>{
  const {answeredId,wrongId,question}=props


    {if(wrongId===false){
      if(answeredId.includes(question.id)){
        return(<PollResult id={question.id}/>)
      }
      else{
        return(<Poll id={question.id}/>)
      }
    }
    else{
      return(<Error/>)
    }
    }

}

const mapStateToProps=({questions,users,authedUser},props)=>{
  const {id}=props.match.params
  const question=questions[id]
  let wrongId=false

  if(question===undefined){
    wrongId=true
  }

  const authedUserAnswers=users[authedUser].answers
  const answeredId=Object.keys(authedUserAnswers).sort((a,b)=>questions[b].timestamp-questions[a].timestamp)

  return {
    answeredId,
    wrongId,
    question
  }
}

export default connect(mapStateToProps)(PollContainer)
