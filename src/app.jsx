var React = require('react');
var Test = require('./test')

var Hello = React.createClass({
  render: function() {
    return <h1 className="red">
      <Test />
    </h1>
  }
});

var element = React.createElement(Hello, {});
React.render(element, document.querySelector('.container'));
