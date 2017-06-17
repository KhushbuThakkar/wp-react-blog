import { combineReducers } from 'redux'
import login from './Login'
import signup from './Signup'
import posts from './Posts'
import pages from './Pages'

export default combineReducers({
  login,
  signup,
  posts,
  pages
})