import { combineReducers } from 'redux'
import languagesReduser from './languagesList'


const rootReduser = combineReducers({
    languagesReduser,
});

export default rootReduser;