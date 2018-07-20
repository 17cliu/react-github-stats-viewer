import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import Main from '../main/Main';

function mapStateToProps (state) {
    return state;
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

// pass state and dispatch to app via props, then pass it all to main.
// usually when passing props, you have to pass from parent to children. this
// is pretty painful if you have to pass through many levels. instead, you
// can use connect to pass directly from one component to another one.
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
