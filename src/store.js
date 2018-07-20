import { createStore, compose, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'; // middleware package

// import root reducer.
import rootReducer from './reducers';

// initial state of application.
const defaultState = {
    displayName: '--',
    username: '17cliu'
};

// merge all middleware/store enhancers, because we can only pass one fn to `createStore`.
// - middleware: fn executed on every action dispatched.
// - enhancer: fn executed only once, to create a new and improved store creator.
//   that store creator now creates stores with functionality enabled by the
//   enhancer.
const enhancers = compose(
    // combine all middleware with this call. this MUST go before the enhancers.
    applyMiddleware(ReduxPromise),
    // if redux dev tool extension exists, enable it. this will allow us to
    // inspect the store and time travel.
    window.devToolsExtension ? window.devToolsExtension() : (f) => f,
);

// create store. we'll pass it to the application provider in `index.js`.
const store = createStore(rootReducer, defaultState, enhancers);

// use webpack hot module reloading, so that when code for reducers change,
// they're reloaded on the fly.
if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
