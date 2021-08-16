import {receiveQuestions,addQuestion,saveQuestionAnswerToQuestions} from './questions.js'
import {receiveUsers,addQuestionToUser,saveQuestionAnswerToUser} from './users.js'
import {getInitialData,saveQuestion,saveQuestionAnswer} from '../utils/api.js'
import {showLoading,hideLoading} from 'react-redux-loading'
import {setAuthedUser} from './authedUser.js'

const AUTHED_ID = null

export const handleInitialData=()=>{
  return (dispatch)=>{
    dispatch(showLoading())
    return getInitialData()
    .then(({users, questions})=>{
    dispatch(receiveUsers(users))
    dispatch(receiveQuestions(questions))
    dispatch(setAuthedUser(AUTHED_ID))
    dispatch(hideLoading())
   }
  )
 }
}

export const handleAddQuestion=(optionOneText,optionTwoText)=>{
  return (dispatch,getState)=>{
    const {authedUser}=getState()
    dispatch(showLoading())
    return saveQuestion({optionOneText,
                         optionTwoText,
                          author:authedUser })
    .then((question)=>{
      dispatch(addQuestion(question))
      dispatch(addQuestionToUser(question))})
    .then(()=>dispatch(hideLoading()))
  }
}

export const handleSaveQuestionAnswer=(authedUser,qid,answer)=>{
  return (dispatch)=>{
    dispatch(showLoading())
    dispatch(saveQuestionAnswerToQuestions(authedUser,qid,answer))
    dispatch(saveQuestionAnswerToUser(authedUser,qid,answer))
    return saveQuestionAnswer({authedUser,qid,answer})
    .then(()=>dispatch(hideLoading()))
    .catch((error)=>{console.warn('an error accured:',error)})
  }
}
