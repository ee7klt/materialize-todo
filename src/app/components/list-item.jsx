// props
//  item = {this.state.items[key] from list.jsx
//    single to do from db

const Card = require('material-ui/lib/card/card');
const CardText = require('material-ui/lib/card/card-text');
const CardActions = require('material-ui/lib/card/card-actions');
const FlatButton = require('material-ui/lib/flat-button');
const React = require('react');


const ListItem = React.createClass ({

  handleDoneClick () {
    console.log('done!')
  },
  render () {
    return <div className="listItemClass">
      <Card
        style = {{
          width: '50%',
          margin: '0 auto',
        }}
        >
        <CardText>{this.props.item}</CardText>
        <CardActions>
          <FlatButton label="Done" onClick={this.handleDoneClick}/>
        </CardActions>
        </Card>
    </div>
  }
})

module.exports = ListItem;
