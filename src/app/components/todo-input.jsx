const React = require('react')
const FlatButton = require('material-ui/lib/flat-button');
const TextField = require('material-ui/lib/text-field');
const FloatingActionButton = require('material-ui/lib/floating-action-button');


const TodoInput = React.createClass ({




  handleClick () {
    console.log('pushing '+this.refs.todoInput.getValue()+" to firebase");
  //  console.log(this.props.todoStore)
    this.props.todoStore.push({
      todo: this.refs.todoInput.getValue(),
      done: false
    })
    this.refs.todoInput.clearValue()
    //console.log(this.props.todoStore)
  },

  render () {
    return (

      <div className = 'inputStyle'>
        <h1>Carpe Diem</h1>
        <TextField
          floatingLabelText="Add a To Do"
          ref = "todoInput"
          />
        <FloatingActionButton onClick = {this.handleClick}>
        </FloatingActionButton>
      </div>
    );
  }




})


module.exports = TodoInput;
