var React = require('react'),
    ReactDOM = require('react-dom'),
    ApiUtil = require('./util/apiUtil');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<div>{ApiUtil()}</div>, document.getElementById('root'));
});
