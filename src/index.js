import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.css'
import App from './contianers/App'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import initStore from './store'

const store = initStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/' component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
