import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import log from '../middleware/log'

export default createStore(reducers, applyMiddleware(log))