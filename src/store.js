import {combineReducers, createStore} from 'redux';
import dashReducer from './Components/Dash/state/dashReducer';
import authReducer from './Components/Auth/state/authReducer';
import {devToolsEnhancer} from 'redux-devtools-extension';

const rootReducer = combineReducers({
    dashReducer,
    authReducer
});

export default createStore(rootReducer, devToolsEnhancer());

