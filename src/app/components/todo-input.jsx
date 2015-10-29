const React = require('react')
const FlatButton = require('material-ui/lib/flat-button');
const TextField = require('material-ui/lib/text-field');


module.exports = React.createClass ({


  getInitialState () {
    return {
      newTodo: '';
    }
  },
  render () {<div className="inputStyle">
    <TextField
      hintText="Hint Text"
      onChange={this._handleTextFieldChange}
      value = {this.state.newTodo}
      />

    <FlatButton label="Carpe Diem" primary={true} onTouchTap={this._handleTouchTap} />
  </div>
},

_handleTextFieldChange: function(e) {
  this.setState({
    newTodo: e.target.value
  })
},

_handleTouchTap() {

  console.log(this.state.newTodo);
  this.props.todoStore.push(this.state.newTodo);


}



})
