const React = require('react')
const FlatButton = require('material-ui/lib/flat-button');
const TextField = require('material-ui/lib/text-field');
const FloatingActionButton = require('material-ui/lib/floating-action-button');


const TodoInput = React.createClass ({



  getInitialState () {
    return {
      newTodo: 'TodoInput'
    };
  },

  render () {
    return (

      <div className = 'inputStyle'>
      <h1>Carpe Diem</h1>
      <TextField
        floatingLabelText="Add a To Do"
        />
        <FloatingActionButton>
    
  </FloatingActionButton>
      </div>
);
  }




})


module.exports = TodoInput;
