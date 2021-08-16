export const RECEIVE_QUESTIONS='RECEIVE_QUESTIONS'
export const ADD_QUESTION='ADD_QUESTION'
export const SAVE_ANSWER_TO_QUESTIONS='SAVE_ANSWER_TO_QUESTIONS'

export const receiveQuestions=(questions)=>{
  return{
    type:RECEIVE_QUESTIONS,
    questions
  }
}

export const addQuestion=(question)=>{
  return{
    type:ADD_QUESTION,
    question
  }
}

export const saveQuestionAnswerToQuestions=(authedUser,qid,answer)=>{
  return{
    type:SAVE_ANSWER_TO_QUESTIONS,
    authedUser,
    qid,
    answer
  }
}
