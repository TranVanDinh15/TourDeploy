import { combineReducers } from 'redux';
import loginReducer from './login';
const rootReducer = combineReducers({
    userLogin: loginReducer,
});
export default rootReducer;
