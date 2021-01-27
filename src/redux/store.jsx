import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootProducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootProducer, applyMiddleware(...middlewares));

export default store;