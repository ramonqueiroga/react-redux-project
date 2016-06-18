import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts';
import comments from './comments';
import test from './test';
import outroReducer from './outro-reducer'


const rootReducer = combineReducers(
        {posts, comments, test, outroReducer, routing: routerReducer}
);

export default rootReducer;