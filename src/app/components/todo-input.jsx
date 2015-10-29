const React = require('react')
const FlatButton = require('material-ui/lib/flat-button');
const TextField = require('material-ui/lib/text-field');


const TodoInput = React.createClass ({



  getInitialState () {
    return {
      newTodo: 'TodoInput'
    };
  },

  render () {
    return (

      <div>
      <h1>this is TodoInput</h1>
      <TextField />
      </div>
);
  }




})


module.exports = TodoInput;
