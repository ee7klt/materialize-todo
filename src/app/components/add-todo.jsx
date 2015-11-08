const Card = require('material-ui/lib/card/card');
const CardText = require('material-ui/lib/card/card-text');
const CardActions = require('material-ui/lib/card/card-actions');
const FlatButton = require('material-ui/lib/flat-button');
const React = require('react');


const addTodo = React.createClass ({

  render () {
      console.log('this is addTodo.jsx')
    return <div>
      Add a to do to get started!
    </div>
  }
})

module.exports = addTodo;
