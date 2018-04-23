import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const store = createStore(reducer)

console.log(store.getState())

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
