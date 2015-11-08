//renders list of todo
//props: items={this.state.items} from main.jsx
//    database of ALL todo items

const React = require('react');
const ListItem = require('./list-item.jsx');



const List = React.createClass ({
  render () {
    //console.log("list ")
    //console.log(this.props.items)
    return <div className='listStyle'>

      {this.renderList()}
    </div>

  },

  renderList () {

    if (this.props.items && Object.keys(this.props.items).length === 0) {
      //console.log(Object.keys(this.props.items).length)
      return <div>add a to do to get started!</div>
    }
    else  {
      var children = []
      //console.log(this.props.items)
      for (var key in this.props.items) {
        //console.log(this.props.items[key][".key"])
        var thisItem = this.props.items[key]
        //console.log(thisItem)
        children.unshift(
          <ListItem
            key = {thisItem[".key"]}
            item = {thisItem[".value"]}>
          </ListItem>)
      }
      return children
    }
  }



})

module.exports = List;
