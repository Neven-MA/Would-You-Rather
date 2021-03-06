import {RECEIVE_QUESTIONS,ADD_QUESTION,SAVE_ANSWER_TO_QUESTIONS} from '../actions/questions.js'

const questions=(state={},action)=>{
  switch(action.type){
    case RECEIVE_QUESTIONS:
     return{...state,...action.questions};
    case ADD_QUESTION:
     const {question}=action
     return{...state,
            [question.id]:question}
    case SAVE_ANSWER_TO_QUESTIONS:
     const {authedUser,qid,answer}=action
     return {...state,
             [qid]: {
             ...state[qid],
             [answer]: {
             ...state[qid][answer],
             votes: state[qid][answer].votes.concat([authedUser])}}}
    default:
     return state
  }
}

export default questions
