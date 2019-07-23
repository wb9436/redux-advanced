import { combineReducers } from 'redux'
import counter from './counter/reducer'
import userInfo from './userInfo/reducer'

export default combineReducers({
  counter,
  userInfo
})
