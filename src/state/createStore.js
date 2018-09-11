import { createStore as reduxCreateStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducer'

const createStore = () => reduxCreateStore(reducer, composeWithDevTools())

export default createStore
