import axios from 'axios';

// only actions can get data into the store.

// export name of each action, so that they can be referenced in the reducers
// as well. this ensures that a typo throws an error (can't reference variable)
// rather than failing silently during runtime when a reducer isn't found.
export const SEARCH = 'SEARCH';
export const GET_LANGUAGES = 'GET_LANGUAGES';

// each action creator function needs to be exported.
// action creators just create an "action", which is an information payload.
// the store's `dispatch` fn is responsible for dispatching it. action creators
// are bound to `dispatch` via `bindActionCreators`, in `App.js`.

const auth = `?client_id=xxxx&client_secret=yyy`;

export async function search (username) {
    const req = await Promise.all([
        axios.get(`https://api.github.com/users/${username}${auth}`),
        axios.get(`https://api.github.com/users/${username}/repos${auth}`)
    ]).then(responses => {
        // structure data so far
        return {
            user: responses[0].data,
            repositories: responses[1].data
        };
    }).then(async (data) => {
        // get languages
        const responses = await Promise.all(data.repositories.map(r => axios.get(`${r.languages_url}${auth}`)));
        const languages = responses.reduce((memo, response) => {
            const data = response.data;

            if (data) {
                Object.keys(data).forEach(k => {
                    if (!memo.hasOwnProperty(k)) {
                        memo[k] = 0;
                    }
                    memo[k] += data[k];
                });
            }

            return memo;
        }, {});

        data.languages = languages;
        return data;
    });

    return {
        type: SEARCH,
        payload: req
    };
}

export async function getLanguages (repos) {
    const promises = repos.map(r => axios.get(r.languages_url));
    const req = await Promise.all(promises);
    return {
        type: GET_LANGUAGES,
        payload: req
    };
}
