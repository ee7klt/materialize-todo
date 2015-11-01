//renders list of todo
//props: items={this.state.items}

const React = require('react');


const List = React.createClass ({
  render () {
    //console.log("list ")
    //console.log(this.props.items)
    return <div className = 'listStyle'>
      {this.renderList()}

    </div>

  },

  renderList () {


    if ((this.props.loaded) && this.props.items && Object.keys(this.props.items).length != 0) {
      var children = []
      //console.log(this.props.items)
      for (var key in this.props.items) {
        //console.log(this.props.items[key][".key"])
        var thisItem = this.props.items[key]
        console.log(thisItem)
        children.push(<li key = {thisItem[".key"]}>{thisItem[".value"]}</li>)
      }
      return children
    } else if (this.props.items && Object.keys(this.props.items).length === 0) {
        console.log(Object.keys(this.props.items).length)
        return <div>add a to do to get started!</div>
    }
  }



})

module.exports = List;
