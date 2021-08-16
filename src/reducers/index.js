import {combineReducers} from 'redux'
import {loadingBarReducer} from 'react-redux-loading'
import users from './users.js'
import questions from './/questions.js'
import authedUser from './authedUser.js'

export default combineReducers({
  questions,
  users,
  authedUser,
  loadingBar: loadingBarReducer
})
