import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux';

import ReduxThunk from 'redux-thunk'
import Logger from 'redux-logger'
import { appReducer } from './appReducer';

// if you're also using redux-thunk, add it as a middleware
const createStoreWithMiddleware = compose(applyMiddleware(
  ReduxThunk,Logger ))(createStore);

const rootReducer = combineReducers({
    app: appReducer,
});

export default function configureStore(initialState = {}) {
    return createStoreWithMiddleware(rootReducer, initialState);
};

// const initialState = {}
//
// export default createStore(rootReducer,
//                     initialState,
//                     applyMiddleware(Logger,ReduxThunk)
//                   )
