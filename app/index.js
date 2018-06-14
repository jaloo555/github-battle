const React = require('react')
const ReactDOM = require('react-dom')
const PropTypes = require('prop-types')

var App = require('./components/App')

require('./index.css')

// state, lifescycle event, UI

ReactDOM.render(<App/>, document.getElementById('app'))