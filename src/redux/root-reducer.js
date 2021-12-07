import { combineReducers } from 'redux';
import contentReducer from './content/content.reducer';

export default combineReducers({
    content: contentReducer
});