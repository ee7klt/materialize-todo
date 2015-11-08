// props
//  item = this.state.items[key] from list.jsx
//    single to do from db

const Card = require('material-ui/lib/card/card');
const CardText = require('material-ui/lib/card/card-text');
const CardActions = require('material-ui/lib/card/card-actions');
const FlatButton = require('material-ui/lib/flat-button');
const React = require('react');
const rootUrl = 'https://materialtodo.firebaseio.com/';

const ListItem = React.createClass ({

  componentWillMount () {
    // mount db at the todo level
    this.fb = new Firebase(rootUrl + 'items/' + this.props.item['.key']);
    //this.bindAsArray(this.fb, 'thisItem');
    //console.log(this.fb)
  },
  log () {
    console.log(this.props.item+ ' ' + this.state.done)
  },
  handleDoneClick (event) {
    //console.log('done!')
    this.setState({
      done: true
    })
    console.log(event.target.click)

    //setTimeout(this.log,2000)

  },
  getInitialState () {
    return {
      done: false
    }
  },
  render () {
    return <div className = "listItemClass">
      <Card
        style = {{
          width: '50%',
          margin: '0 auto',
        }}
        >
        <CardText>{this.props.item.todo}</CardText>
        <CardActions>
          <FlatButton label="Done" onClick={this.handleDoneClick}/>
        </CardActions>
        </Card>
    </div>
  }
})

module.exports = ListItem;
