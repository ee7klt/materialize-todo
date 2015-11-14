//renders list of todo
//props: items={this.state.items} from main.jsx
//    database of ALL todo items
// props: done =
//        true => "Done" tab
//        false => "To Do" tab

const React = require('react');
const ListItem = require('./list-item.jsx');
const AddTodo = require('./add-todo.jsx');


const List = React.createClass ({
  render () {
    //console.log("list ")
    //console.log(this.props.items)
    return this.renderList()


  },

  renderList () {

  if (this.props.items && Object.keys(this.props.items).length === 0) {
      console.log('list.jsx: no items. returning addTodo')
      return <div >
        <AddTodo />
      </div>
    }
    else  {
      var children = []
      //console.log(this.props.items)
      for (var key in this.props.items) {
        //console.log(this.props.items)
        var thisItem = this.props.items[key]
        //console.log(thisItem)
        if (!thisItem.done) {
        children.unshift(
          <ListItem
            key = {thisItem[".key"]}
            item ={thisItem}>
          </ListItem>)
        }
      }
        console.log('list.jsx: found items. returning children')

      return <div className='listStyle'>
            {children}
          </div>

    }
  }



})

module.exports = List;
