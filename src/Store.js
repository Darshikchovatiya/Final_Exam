import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { productRe } from './services/Reducer/Product_reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(productRe, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;