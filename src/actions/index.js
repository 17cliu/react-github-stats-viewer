import axios from 'axios';

// only actions can get data into the store.

// export name of each action, so that they can be referenced in the reducers
// as well. this ensures that a typo throws an error (can't reference variable)
// rather than failing silently during runtime when a reducer isn't found.
export const SEARCH = 'SEARCH';

// each action creator function needs to be exported.
// action creators just create an "action", which is an information payload.
// the store's `dispatch` fn is responsible for dispatching it. action creators
// are bound to `dispatch` via `bindActionCreators`, in `App.js`.
export function search (username) {
    const url = `https://api.github.com/users/${username}`;
    // `req` is a promise here. the redux-promise middleware (added in
    // `store.js`) resolves the promise into real data before passing it
    // to the reducer. we don't have to handle our own promises!
    const req = axios.get(url);

    // this payload conforms to the flux standard action format:
    // https://github.com/redux-utilities/flux-standard-action
    return {
        type: SEARCH,
        payload: req
    }
}
