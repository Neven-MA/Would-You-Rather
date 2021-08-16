export const RECEIVE_USERS='RECEIVE_USERS'
export const ADD_QUESTION_TO_USER='ADD_QUESTION_TO_USER'
export const SAVE_ANSWER_TO_USER='SAVE_ANSWER_TO_USER'

export const receiveUsers=(users)=>{
  return{
    type:RECEIVE_USERS,
    users
  }
}

export const addQuestionToUser=(question)=>{
  return{
    type:ADD_QUESTION_TO_USER,
    question
  }
}

export const saveQuestionAnswerToUser=(authedUser,qid,answer)=>{
  return{
    type:SAVE_ANSWER_TO_USER,
    authedUser,
    qid,
    answer
  }
}
