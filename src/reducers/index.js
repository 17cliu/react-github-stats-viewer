// we make a reducer for each type of data, and then we
// combine them all into one big reducer here.

// import { combineReducers } from 'redux';

import { SEARCH } from '../actions'

// a reducer takes in two things:
// 1. the action (info about what happened); and
// 2. copy of current state.
// it applies the action and returns an updated copy of the store
//
// reducers edit state!!
//
// 💡 every time an action is dispatched, EVERY REDUCER RUNS, even if that
// reducer is technically irrelevant. each reducer therefore needs to decide
//  whether it needs to do anything for each action it handles.

// this is our `users` reducer:
function users (state = {}, action) {
    switch (action.type) {
        case SEARCH:
            return {
                username: action.payload.data.login,
                user: action.payload.data
            };
        default:
            // didn't have to do anything for this action; return unchanged state.
            return state;
    }
}

// say you call `combineReducers({ users, posts })` where `users` and `posts`
// are both functions. it will output a state like this:
//
//      { users: {...}, posts: {...}}
//
// and when it calls the `users`/`posts` reducers , it will only pass the
// relevant part of the subset to it (matching by key name) instead of the
// entire state.
//
// because we don't have a complicated state here where we have different
// collections of data to keep track of, we just have one main reducer that
// touches the entire state object. therefore, we don't need to use
// `combineReducers`. we just export our one main reducer as the root reducer.

// const rootReducer = combineReducers({
//     users
// });

const rootReducer = users;
export default rootReducer;
