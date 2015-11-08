const Card = require('material-ui/lib/card/card');
const CardText = require('material-ui/lib/card/card-text');
const CardActions = require('material-ui/lib/card/card-actions');
const FlatButton = require('material-ui/lib/flat-button');
const React = require('react');


const addTodo = React.createClass ({

  render () {
    //console.log('this is addTodo.jsx')
    return <div className='listItemClass'>
      <Card
        style = {{
          width: '50%',
          margin: '0 auto',
        }}
        >
        <CardText>Add a Todo to get started!</CardText>
      
        </Card>
    </div>
  }
})

module.exports = addTodo;
