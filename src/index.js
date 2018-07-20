import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import styles.
import './index.css';

// import our components.
import App from './components/app/App';

// import store
import store from './store';

// service worker for caching stuff for offline use.
import registerServiceWorker from './registerServiceWorker';

// everything is a renderable component, even the store provider!
const app = (
    <Provider store={store}>
        {/* the provider exposes store to application. */}
        <App />
    </Provider>
);

// render html into an existing root element on the page.
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
