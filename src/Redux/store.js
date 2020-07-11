import {createStore} from 'redux'
import userReducer from '../Redux/user/userReducer'





const store = createStore(userReducer)

export default store


