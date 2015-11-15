// props
//  item = this.state.items[key] from list.jsx
//    single to do from db

const Card = require('material-ui/lib/card/card');
const CardText = require('material-ui/lib/card/card-text');
const CardActions = require('material-ui/lib/card/card-actions');
const FlatButton = require('material-ui/lib/flat-button');
const React = require('react');
const rootUrl = 'https://materialtodo.firebaseio.com/';
const ReactFire = require('reactfire');

const ListItem = React.createClass ({
    mixins: [ReactFire],
  componentWillMount () {
    // mount db at the todo level
    this.fb = new Firebase(rootUrl + 'items/' + this.props.item['.key']);
    this.bindAsArray(this.fb, 'todo');
    //console.log(this.fb)
    //console.log(this.state.todo)
  },
  log () {
    console.log(this.props.item+ ' ' + this.state.done)
  },
  handleDoneClick (event) {
    //console.log('done!')
    this.setState({
      done: false
    })
    this.fb.update({
      done: false
    })
    //console.log(event.target.click)

    //setTimeout(this.log,2000)

  },
  getInitialState () {
    return {
      done: false
    }
  },
  render () {
    //console.log(this.state.todo)
    return <div className = "listItemClass">
      <Card
        style = {{
          width: '50%',
          margin: '0 auto',
        }}
        >
        <CardText>{this.props.item.todo}</CardText>
        <CardActions>
          <FlatButton label="Do it Again!" onClick={this.handleDoneClick}/>
        </CardActions>
        </Card>
    </div>
  }
})

module.exports = ListItem;
